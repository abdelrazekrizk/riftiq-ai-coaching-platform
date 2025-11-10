import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

import { SocialInteractionService } from './service';
import { createErrorResponse, createSuccessResponse } from '../../shared/utils/response';

const logger = new Logger({ serviceName: 'riftiq-social' });
const metrics = new Metrics({ 
  namespace: 'RiftIQ/Agents',
  serviceName: 'social-interaction'
});
const tracer = new Tracer({ serviceName: 'riftiq-social' });

const socialService = new SocialInteractionService({ logger, metrics, tracer });

const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const startTime = Date.now();
  logger.addContext(context);
  
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const path = event.path || '';
    const method = event.httpMethod;
    
    if (!body && method === 'POST') {
      return createErrorResponse(400, 'INVALID_REQUEST', 'Request body is required');
    }

    let result;
    
    // Route based on path and method
    if (path.includes('/message') && method === 'POST') {
      // Send message
      const request = {
        userId: body.userId || 'demo-user',
        channelId: body.channelId || 'general',
        message: body.message || 'Hello team!',
        messageType: body.messageType || 'text'
      };
      
      result = await socialService.sendMessage(request);
      metrics.addMetric('MessagesProcessed', MetricUnit.Count, 1);
      
    } else if (path.includes('/team') && method === 'POST') {
      // Create team
      const request = {
        userId: body.userId || 'demo-user',
        teamName: body.teamName || 'Demo Team',
        description: body.description
      };
      
      result = await socialService.createTeam(request);
      metrics.addMetric('TeamsCreated', MetricUnit.Count, 1);
      
    } else if (path.includes('/team') && method === 'GET') {
      // Get team members
      const teamId = event.pathParameters?.teamId || 'demo-team';
      result = await socialService.getTeamMembers(teamId);
      metrics.addMetric('TeamMemberRequests', MetricUnit.Count, 1);
      
    } else {
      // Default social interaction
      result = {
        message: 'Social interaction processed',
        timestamp: new Date().toISOString(),
        features: ['messaging', 'teams', 'community']
      };
    }

    const processingTime = Date.now() - startTime;
    
    if (processingTime > 100) {
      logger.warn('Social processing exceeded 100ms target', { processingTime });
      metrics.addMetric('SlowSocial', MetricUnit.Count, 1);
    }

    metrics.addMetric('SocialProcessingTime', MetricUnit.Milliseconds, processingTime);
    metrics.addMetric('SocialSuccess', MetricUnit.Count, 1);

    return createSuccessResponse(result, {
      requestId: context.awsRequestId,
      processingTime
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error('Social interaction failed', { error });
    metrics.addMetric('SocialErrors', MetricUnit.Count, 1);
    
    return createErrorResponse(
      500, 
      'SOCIAL_FAILED', 
      'Social interaction failed',
      { requestId: context.awsRequestId, processingTime }
    );
  }
};

export const main = middy(lambdaHandler)
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());