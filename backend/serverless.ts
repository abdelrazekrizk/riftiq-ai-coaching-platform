import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: 'riftiq-ai-coaching-clean',
  frameworkVersion: '4',
  provider: {
    name: 'aws',
    runtime: 'nodejs22.x',
    region: 'us-east-1',
    stage: 'production',
    httpApi: {
      cors: {
        allowedOrigins: ['*'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
      }
    },
    environment: {
      DATABASE_URL: '${env:DATABASE_URL}',
      REDIS_URL: '${env:REDIS_URL}',
      COGNITO_USER_POOL_ID: '${env:COGNITO_USER_POOL_ID}',
      COGNITO_CLIENT_ID: '${env:COGNITO_CLIENT_ID}',
      POWERTOOLS_SERVICE_NAME: 'riftiq-ai-coaching',
      POWERTOOLS_METRICS_NAMESPACE: 'RiftIQ/Agents',
      LOG_LEVEL: 'INFO'
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:Query',
              'dynamodb:Scan',
              'dynamodb:GetItem',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
              'dynamodb:DeleteItem'
            ],
            Resource: 'arn:aws:dynamodb:${aws:region}:${aws:accountId}:table/*'
          },
          {
            Effect: 'Allow',
            Action: [
              'events:PutEvents'
            ],
            Resource: 'arn:aws:events:${aws:region}:${aws:accountId}:event-bus/default'
          },
          {
            Effect: 'Allow',
            Action: [
              'bedrock:InvokeModel'
            ],
            Resource: 'arn:aws:bedrock:${aws:region}::foundation-model/*'
          }
        ]
      }
    }
  },
  build: {
    esbuild: {
      bundle: true,
      minify: false,
      target: 'node22',
      format: 'cjs',
      exclude: ['@aws-sdk/*']
    }
  },
  functions: {
    performanceAgent: {
      handler: 'src/agents/performance/handler.main',
      events: [
        {
          httpApi: {
            path: '/api/v1/performance/analyze',
            method: 'post'
          }
        }
      ]
    },
    coachingAgent: {
      handler: 'src/agents/coaching/handler.main',
      events: [
        {
          httpApi: {
            path: '/api/v1/coaching',
            method: 'post'
          }
        }
      ]
    },
    strategyAgent: {
      handler: 'src/agents/strategy/handler.main',
      events: [
        {
          httpApi: {
            path: '/api/v1/strategy/recommend',
            method: 'post'
          }
        }
      ]
    },
    socialAgent: {
      handler: 'src/agents/social/handler.main',
      events: [
        {
          httpApi: {
            path: '/api/v1/social/{proxy+}',
            method: 'any'
          }
        }
      ]
    },
    progressAgent: {
      handler: 'src/agents/progress/handler.main',
      events: [
        {
          httpApi: {
            path: '/api/v1/progress/{proxy+}',
            method: 'any'
          }
        }
      ]
    },
    contentAgent: {
      handler: 'src/agents/content/handler.main',
      events: [
        {
          httpApi: {
            path: '/api/v1/content/{proxy+}',
            method: 'any'
          }
        }
      ]
    }
  }
};

module.exports = serverlessConfiguration;