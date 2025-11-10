import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

import { ProgressTrackingService } from './service';
import { createErrorResponse, createSuccessResponse } from '../../shared/utils/response';

const logger = new Logger({ serviceName: 'riftiq-progress' });
const metrics = new Metrics({ 
  namespace: 'RiftIQ/Agents',
  serviceName: 'progress-tracking'
});
const tracer = new Tracer({ serviceName: 'riftiq-progress' });

const progressService = new ProgressTrackingService({ logger, metrics, tracer });

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
    if (path.includes('/achievement') && method === 'POST') {
      // Track achievement
      const request = {
        userId: body.userId || 'demo-user',
        achievementData: {
          type: body.type || 'skill_improvement',
          value: body.value || 15,
          context: body.context || {},
          timestamp: Date.now()
        }
      };
      
      result = await progressService.trackAchievement(request);
      metrics.addMetric('AchievementRequests', MetricUnit.Count, 1);
      
    } else if (path.includes('/goal') && method === 'POST') {
      // Set goal
      const request = {
        userId: body.userId || 'demo-user',
        goal: {
          type: body.goalType || 'rank',
          title: body.title || 'Reach Higher Rank',
          description: body.description || 'Climb the competitive ladder',
          targetValue: body.targetValue || 100,
          deadline: body.deadline
        }
      };
      
      result = await progressService.setGoal(request);
      metrics.addMetric('GoalRequests', MetricUnit.Count, 1);
      
    } else if (path.includes('/report') && method === 'GET') {
      // Get progress report
      const userId = event.pathParameters?.userId || 'demo-user';
      const timeframe = event.queryStringParameters?.timeframe || '30d';
      const category = event.queryStringParameters?.category;
      
      result = await progressService.generateProgressReport(userId, {
        timeframe,
        category
      });
      metrics.addMetric('ProgressReportRequests', MetricUnit.Count, 1);
      
    } else {
      // Default progress tracking
      result = {
        message: 'Progress tracking processed',
        timestamp: new Date().toISOString(),
        features: ['achievements', 'goals', 'analytics']
      };
    }

    const processingTime = Date.now() - startTime;

    metrics.addMetric('ProgressProcessingTime', MetricUnit.Milliseconds, processingTime);
    metrics.addMetric('ProgressSuccess', MetricUnit.Count, 1);

    return createSuccessResponse(result, {
      requestId: context.awsRequestId,
      processingTime
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.error('Progress tracking failed', { error });
    metrics.addMetric('ProgressErrors', MetricUnit.Count, 1);
    
    return createErrorResponse(
      500, 
      'PROGRESS_FAILED', 
      'Progress tracking failed',
      { requestId: context.awsRequestId, processingTime }
    );
  }
};

export const main = middy(lambdaHandler)
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());