import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

import { StrategyOptimizationService } from './service';
import { createErrorResponse, createSuccessResponse } from '../../shared/utils/response';

const logger = new Logger({ serviceName: 'riftiq-strategy' });
const metrics = new Metrics({ 
  namespace: 'RiftIQ/Agents',
  serviceName: 'strategy-optimization'
});
const tracer = new Tracer({ serviceName: 'riftiq-strategy' });

const strategyService = new StrategyOptimizationService({ logger, metrics, tracer });

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

    // Create strategy request from input
    const request = {
      userId: body.userId || body.playerId || 'demo-user',
      gameContext: {
        gameMode: body.gameMode || 'ranked',
        currentPhase: body.currentPhase || 'mid-game',
        playerStats: body.playerStats || {},
        teamComposition: body.teamComposition || {}
      },
      preferences: body.preferences
    };

    logger.info('Generating strategy recommendations', {
      userId: request.userId,
      gameMode: request.gameContext.gameMode
    });

    metrics.addMetric('StrategyRequests', MetricUnit.Count, 1);

    const recommendations = await strategyService.generateRecommendations(request);
    
    const processingTime = Date.now() - startTime;
    
    if (processingTime > 300) {
      logger.warn('Strategy generation exceeded 300ms target', { processingTime });
      metrics.addMetric('SlowStrategy', MetricUnit.Count, 1);
    }

    metrics.addMetric('StrategyProcessingTime', MetricUnit.Milliseconds, processingTime);
    metrics.addMetric('StrategySuccess', MetricUnit.Count, 1);

    return createSuccessResponse(recommendations, {
      requestId: context.awsRequestId,
      processingTime
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error('Strategy generation failed', { error });
    metrics.addMetric('StrategyErrors', MetricUnit.Count, 1);
    
    return createErrorResponse(
      500, 
      'STRATEGY_FAILED', 
      'Strategy generation failed',
      { requestId: context.awsRequestId, processingTime }
    );
  }
};

export const main = middy(lambdaHandler)
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());