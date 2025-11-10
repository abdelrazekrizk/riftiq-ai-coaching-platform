import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

import { PerformanceAnalyticsService } from './service';
import { PerformanceAnalysisRequest } from '../../types/agents';
import { createErrorResponse, createSuccessResponse } from '../../shared/utils/response';
import { createAgentLogger } from '../../shared/utils/logger';

const logger = createAgentLogger('performance');
const metrics = new Metrics({ 
  namespace: 'RiftIQ/Agents',
  serviceName: 'performance-analytics'
});
const tracer = new Tracer({ serviceName: 'riftiq-performance' });

const performanceService = new PerformanceAnalyticsService({ metrics, tracer });

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

    // Simple analysis for demo
    const request: PerformanceAnalysisRequest = {
      userId: body.playerId || body.userId || 'demo-user',
      sessionId: `session-${Date.now()}`,
      analysisType: 'real-time',
      gameplayData: {
        events: body.events || [],
        metadata: {
          gameMode: body.gameMode || 'ranked',
          duration: body.duration || 1800,
          patch: body.patch || '14.22',
          server: body.server || 'na1'
        }
      }
    };

    logger.info('Starting performance analysis', {
      userId: request.userId,
      sessionId: request.sessionId
    });

    metrics.addMetric('PerformanceAnalysisRequests', MetricUnit.Count, 1);

    const result = await performanceService.analyzePerformance(request);
    const processingTime = Date.now() - startTime;

    if (processingTime > 200) {
      logger.warn('Analysis exceeded 200ms target', { processingTime });
    }

    metrics.addMetric('ProcessingTime', MetricUnit.Milliseconds, processingTime);
    metrics.addMetric('PerformanceAnalysisSuccess', MetricUnit.Count, 1);

    return createSuccessResponse(result, {
      requestId: context.awsRequestId,
      processingTime
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error('Performance analysis failed', { error });
    metrics.addMetric('PerformanceAnalysisErrors', MetricUnit.Count, 1);
    
    return createErrorResponse(
      500,
      'ANALYSIS_FAILED',
      'Performance analysis failed',
      { requestId: context.awsRequestId, processingTime }
    );
  }
};

export const main = middy(lambdaHandler)
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());