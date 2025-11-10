import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

import { RealTimeCoachingService } from './service';
import { createErrorResponse, createSuccessResponse } from '../../shared/utils/response';

const logger = new Logger({ serviceName: 'riftiq-coaching' });
const metrics = new Metrics({ 
  namespace: 'RiftIQ/Agents',
  serviceName: 'real-time-coaching'
});
const tracer = new Tracer({ serviceName: 'riftiq-coaching' });

const coachingService = new RealTimeCoachingService({ logger, metrics, tracer });

// WebSocket Connect Handler
const connectHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const startTime = Date.now();
  const connectionId = event.requestContext.connectionId!;
  
  logger.addContext(context);
  
  try {
    const userId = event.queryStringParameters?.userId;
    const sessionId = event.queryStringParameters?.sessionId;

    if (!userId) {
      return { statusCode: 400, body: 'userId is required' };
    }

    await coachingService.handleConnection(connectionId, userId, sessionId);
    
    const processingTime = Date.now() - startTime;
    
    if (processingTime > 50) {
      logger.warn('Connection handling exceeded 50ms target', { processingTime });
      metrics.addMetric('SlowConnection', MetricUnit.Count, 1);
    }

    return { statusCode: 200, body: 'Connected' };
  } catch (error) {
    logger.error('WebSocket connection failed', { error });
    return { statusCode: 500, body: 'Connection failed' };
  }
};

// WebSocket Disconnect Handler
const disconnectHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const connectionId = event.requestContext.connectionId!;
  
  logger.addContext(context);
  
  try {
    await coachingService.handleDisconnection(connectionId);
    return { statusCode: 200, body: 'Disconnected' };
  } catch (error) {
    logger.error('WebSocket disconnection failed', { error });
    return { statusCode: 500, body: 'Disconnection failed' };
  }
};

const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const startTime = Date.now();
  logger.addContext(context);
  
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    
    if (!body) {
      return createErrorResponse(400, 'INVALID_REQUEST', 'Request body is required');
    }

    const request = {
      userId: body.userId || body.playerId || 'demo-user',
      sessionData: body.sessionData || {}
    };

    logger.info('Processing coaching request', { userId: request.userId });
    metrics.addMetric('CoachingRequests', MetricUnit.Count, 1);

    const response = await coachingService.handleCoachingRequest('http-session', request);
    
    const processingTime = Date.now() - startTime;
    metrics.addMetric('CoachingLatency', MetricUnit.Milliseconds, processingTime);
    
    return createSuccessResponse(response, {
      requestId: context.awsRequestId,
      processingTime
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error('Coaching request failed', { error });
    metrics.addMetric('CoachingErrors', MetricUnit.Count, 1);
    
    return createErrorResponse(
      500, 
      'COACHING_FAILED', 
      'Coaching request failed',
      { requestId: context.awsRequestId, processingTime }
    );
  }
};

export const connect = middy(connectHandler)
  .use(httpErrorHandler());

export const disconnect = middy(disconnectHandler)
  .use(httpErrorHandler());

export const main = middy(lambdaHandler)
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());