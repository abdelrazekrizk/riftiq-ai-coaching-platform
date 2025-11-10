import { Logger } from '@aws-lambda-powertools/logger';

export const logger = new Logger({
  serviceName: '@riftiq/ai-coaching',
  logLevel: process.env.LOG_LEVEL || 'INFO',
});

export const createAgentLogger = (agentName: string): Logger => {
  return logger.createChild({
    persistentLogAttributes: { agent: agentName },
  });
};
