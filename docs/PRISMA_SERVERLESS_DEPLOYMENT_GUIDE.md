# Prisma + Serverless Framework Deployment Guide

## Initial Setup to Production Deployment

### 1. Project Structure Setup

```bash
# Create backend directory
mkdir backend && cd backend

# Initialize Node.js project
npm init -y

# Install core dependencies
npm install @prisma/client prisma
npm install serverless serverless-plugin-typescript
npm install typescript @types/node ts-node
npm install aws-lambda @types/aws-lambda

# Install dev dependencies
npm install -D @serverless/typescript
```

### 2. Prisma Configuration

#### Initialize Prisma
```bash
npx prisma init
```

#### Configure `prisma/schema.prisma`
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Gaming specific fields
  playerId  String?  @unique
  rank      String?
  level     Int      @default(1)
  
  @@map("users")
}

model GameSession {
  id        String   @id @default(cuid())
  userId    String
  gameType  String
  score     Int
  duration  Int
  createdAt DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
  
  @@map("game_sessions")
}

model PerformanceMetric {
  id        String   @id @default(cuid())
  userId    String
  metric    String
  value     Float
  timestamp DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
  
  @@map("performance_metrics")
}
```

#### Environment Configuration
Create `.env`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/riftiq_dev"
AWS_REGION="us-east-1"
```

### 3. Serverless Framework Configuration

#### Create `serverless.ts`
```typescript
import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'riftiq-backend',
  frameworkVersion: '4',
  plugins: ['serverless-plugin-typescript'],
  provider: {
    name: 'aws',
    runtime: 'nodejs22.x',
    region: 'us-east-1',
    stage: '${opt:stage, "dev"}',
    environment: {
      DATABASE_URL: '${env:DATABASE_URL}',
      AWS_REGION: '${self:provider.region}',
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: ['rds:*'],
            Resource: '*',
          },
        ],
      },
    },
  },
  functions: {
    performanceAgent: {
      handler: 'src/agents/performance/handler.main',
      events: [
        {
          http: {
            method: 'post',
            path: 'api/v1/performance/analyze',
            cors: true,
          },
        },
      ],
    },
    coachingAgent: {
      handler: 'src/agents/coaching/handler.main',
      events: [
        {
          http: {
            method: 'post',
            path: 'api/v1/coaching',
            cors: true,
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      RDSInstance: {
        Type: 'AWS::RDS::DBInstance',
        Properties: {
          DBInstanceIdentifier: 'riftiq-postgres-${self:provider.stage}',
          DBInstanceClass: 'db.t3.micro',
          Engine: 'postgres',
          EngineVersion: '16.1',
          AllocatedStorage: 20,
          DBName: 'riftiq',
          MasterUsername: 'riftiq_user',
          MasterUserPassword: '${env:DB_PASSWORD}',
          VPCSecurityGroups: [{ Ref: 'DatabaseSecurityGroup' }],
          PubliclyAccessible: true,
        },
      },
      DatabaseSecurityGroup: {
        Type: 'AWS::EC2::SecurityGroup',
        Properties: {
          GroupDescription: 'Security group for RDS instance',
          SecurityGroupIngress: [
            {
              IpProtocol: 'tcp',
              FromPort: 5432,
              ToPort: 5432,
              CidrIp: '0.0.0.0/0',
            },
          ],
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
```

### 4. Lambda Function Implementation

#### Create `src/agents/performance/handler.ts`
```typescript
import { APIGatewayProxyHandler } from 'aws-lambda';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const main: APIGatewayProxyHandler = async (event) => {
  try {
    const { playerId } = JSON.parse(event.body || '{}');
    
    // Get user performance data
    const user = await prisma.user.findUnique({
      where: { playerId },
      include: {
        performanceMetrics: {
          orderBy: { timestamp: 'desc' },
          take: 10,
        },
      },
    });

    if (!user) {
      return {
        statusCode: 404,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    // Calculate performance insights
    const avgScore = user.performanceMetrics.reduce((sum, metric) => 
      sum + metric.value, 0) / user.performanceMetrics.length;

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        playerId,
        averageScore: avgScore,
        recentMetrics: user.performanceMetrics,
        recommendations: [
          'Focus on accuracy over speed',
          'Practice aim training for 15 minutes daily',
        ],
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
```

#### Create `src/agents/coaching/handler.ts`
```typescript
import { APIGatewayProxyHandler } from 'aws-lambda';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const main: APIGatewayProxyHandler = async (event) => {
  try {
    const { sessionData } = JSON.parse(event.body || '{}');
    const { userId } = sessionData;

    // Get recent game sessions
    const sessions = await prisma.gameSession.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    // Generate coaching insights
    const totalSessions = sessions.length;
    const avgScore = sessions.reduce((sum, s) => sum + s.score, 0) / totalSessions;

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        coaching: {
          totalSessions,
          averageScore: avgScore,
          improvement: avgScore > 75 ? 'Excellent' : 'Needs work',
          tips: [
            'Maintain consistent practice schedule',
            'Focus on weak areas identified in analysis',
          ],
        },
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
```

### 5. Database Migration & Deployment

#### Local Development Setup
```bash
# Generate Prisma client
npx prisma generate

# Run migrations (local)
npx prisma migrate dev --name init

# Seed database (optional)
npx prisma db seed
```

#### Production Database Setup
```bash
# Set production DATABASE_URL
export DATABASE_URL="postgresql://user:pass@prod-host:5432/riftiq"

# Deploy database schema to production
npx prisma migrate deploy

# Generate production client
npx prisma generate
```

### 6. Deployment Commands

#### Development Deployment
```bash
# Deploy to dev stage
npm run deploy:dev
# or
serverless deploy --stage dev
```

#### Production Deployment
```bash
# Set production environment
export DATABASE_URL="postgresql://prod-user:prod-pass@rds-endpoint:5432/riftiq"
export DB_PASSWORD="your-secure-password"

# Deploy to production
npm run deploy:prod
# or
serverless deploy --stage prod
```

### 7. Package.json Scripts

Add to `package.json`:
```json
{
  "scripts": {
    "dev": "serverless offline",
    "deploy:dev": "serverless deploy --stage dev",
    "deploy:prod": "serverless deploy --stage prod",
    "db:migrate": "npx prisma migrate dev",
    "db:deploy": "npx prisma migrate deploy",
    "db:generate": "npx prisma generate",
    "db:studio": "npx prisma studio"
  }
}
```

### 8. Environment Management

#### Development `.env`
```env
DATABASE_URL="postgresql://localhost:5432/riftiq_dev"
DB_PASSWORD="dev-password"
AWS_REGION="us-east-1"
```

#### Production `.env.production`
```env
DATABASE_URL="postgresql://prod-user:secure-pass@riftiq-postgres-prod.xyz.rds.amazonaws.com:5432/riftiq"
DB_PASSWORD="production-secure-password"
AWS_REGION="us-east-1"
```

### 9. Testing Deployment

#### Test API Endpoints
```bash
# Test Performance Agent
curl -X POST https://your-api-id.execute-api.us-east-1.amazonaws.com/dev/api/v1/performance/analyze \
  -H "Content-Type: application/json" \
  -d '{"playerId": "test-123"}'

# Test Coaching Agent
curl -X POST https://your-api-id.execute-api.us-east-1.amazonaws.com/dev/api/v1/coaching \
  -H "Content-Type: application/json" \
  -d '{"sessionData": {"userId": "test-user-id"}}'
```

### 10. Troubleshooting

#### Common Issues
- **Prisma Client not found**: Run `npx prisma generate`
- **Database connection failed**: Check DATABASE_URL format
- **Lambda timeout**: Increase timeout in serverless.ts
- **CORS errors**: Ensure headers in all responses

#### Debug Commands
```bash
# Check Prisma client
npx prisma studio

# View serverless logs
serverless logs -f performanceAgent --tail

# Test locally
serverless offline
```

## Complete Deployment Checklist

- [ ] Install dependencies
- [ ] Configure Prisma schema
- [ ] Set up environment variables
- [ ] Create Lambda handlers
- [ ] Configure serverless.ts
- [ ] Run database migrations
- [ ] Deploy to AWS
- [ ] Test API endpoints
- [ ] Monitor CloudWatch logs