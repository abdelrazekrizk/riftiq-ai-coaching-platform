import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

import { ContentPersonalizationService } from './service';
import { createErrorResponse, createSuccessResponse } from '../../shared/utils/response';

const logger = new Logger({
  serviceName: '@riftiq/content-agent',
  logLevel: process.env.LOG_LEVEL as 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' || 'INFO'
});

const metrics = new Metrics({
  namespace: 'RiftIQ/Agents',
  serviceName: 'content-personalization'
});

const tracer = new Tracer({
  serviceName: '@riftiq/content-agent'
});

const contentService = new ContentPersonalizationService({
  logger,
  metrics,
  tracer
});

const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const startTime = Date.now();
  const requestId = context.awsRequestId;
  
  logger.addContext({ requestId });
  
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    
    if (!body?.userId) {
      return createErrorResponse(400, 'INVALID_REQUEST', 'userId required');
    }

    logger.info('Generating content recommendations', {
      userId: body.userId,
      contentType: body.contentType,
      skillLevel: body.skillLevel
    });

    metrics.addMetric('RecommendationRequests', MetricUnit.Count, 1);

    const recommendations = await contentService.getRecommendations(body);
    
    const processingTime = Date.now() - startTime;

    metrics.addMetric('RecommendationProcessingTime', MetricUnit.Milliseconds, processingTime);
    metrics.addMetric('RecommendationSuccess', MetricUnit.Count, 1);
    metrics.addMetric('ContentItemsReturned', MetricUnit.Count, recommendations.items.length);

    logger.info('Content recommendations generated', {
      userId: body.userId,
      itemCount: recommendations.items.length,
      processingTime,
      confidence: recommendations.confidence
    });

    return createSuccessResponse(recommendations, {
      requestId,
      processingTime,
      version: '1.0'
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    
    logger.error('Content recommendation failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      processingTime
    });

    metrics.addMetric('RecommendationErrors', MetricUnit.Count, 1);

    return createErrorResponse(
      500, 
      'RECOMMENDATION_FAILED', 
      'Content recommendation failed',
      { requestId, processingTime }
    );
  }
};

export const main = middy(lambdaHandler)
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());