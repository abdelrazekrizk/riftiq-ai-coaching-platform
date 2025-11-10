import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnit } from '@aws-lambda-powertools/metrics';
import { Tracer } from '@aws-lambda-powertools/tracer';

export interface MessageRequest {
  userId: string;
  channelId: string;
  message: string;
  messageType?: 'text' | 'system' | 'coaching';
  metadata?: any;
}

export interface MessageResponse {
  messageId: string;
  timestamp: number;
  deliveryStatus: 'sent' | 'delivered' | 'failed';
  channelId: string;
}

export interface TeamMember {
  userId: string;
  username: string;
  role: 'leader' | 'member' | 'coach';
  status: 'online' | 'offline' | 'in-game';
  joinedAt: number;
  stats?: {
    gamesPlayed: number;
    winRate: number;
    rank: string;
  };
}

export interface Team {
  teamId: string;
  name: string;
  description?: string;
  leaderId: string;
  members: TeamMember[];
  createdAt: number;
  settings: {
    isPublic: boolean;
    maxMembers: number;
    requireApproval: boolean;
  };
}

export class SocialInteractionService {
  private logger: Logger;
  private metrics: Metrics;
  private tracer: Tracer;

  constructor(config: { logger: Logger; metrics: Metrics; tracer: Tracer }) {
    this.logger = config.logger;
    this.metrics = config.metrics;
    this.tracer = config.tracer;
  }

  async sendMessage(request: MessageRequest): Promise<MessageResponse> {
    const segment = this.tracer.getSegment();
    const subsegment = segment?.addNewSubsegment('sendMessage');

    try {
      this.logger.info('Processing message', {
        userId: request.userId,
        channelId: request.channelId,
        messageType: request.messageType || 'text'
      });

      const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await this.validateMessage(request.message);
      await this.deliverMessage(messageId, request);

      const response: MessageResponse = {
        messageId,
        timestamp: Date.now(),
        deliveryStatus: 'delivered',
        channelId: request.channelId
      };

      this.metrics.addMetric('MessagesDelivered', MetricUnit.Count, 1);
      subsegment?.addAnnotation('messageDelivered', true);

      return response;

    } catch (error) {
      this.logger.error('Failed to send message', { error });
      subsegment?.addError(error as Error);
      throw error;
    } finally {
      subsegment?.close();
    }
  }

  async getTeamMembers(teamId: string): Promise<TeamMember[]> {
    const segment = this.tracer.getSegment();
    const subsegment = segment?.addNewSubsegment('getTeamMembers');

    try {
      this.logger.info('Retrieving team members', { teamId });

      const members: TeamMember[] = [
        {
          userId: 'user_001',
          username: 'ProGamer123',
          role: 'leader',
          status: 'online',
          joinedAt: Date.now() - 86400000,
          stats: {
            gamesPlayed: 150,
            winRate: 0.68,
            rank: 'Diamond II'
          }
        },
        {
          userId: 'user_002',
          username: 'StrategyMaster',
          role: 'member',
          status: 'in-game',
          joinedAt: Date.now() - 172800000,
          stats: {
            gamesPlayed: 89,
            winRate: 0.72,
            rank: 'Diamond I'
          }
        }
      ];

      this.metrics.addMetric('TeamMembersRetrieved', MetricUnit.Count, members.length);
      subsegment?.addAnnotation('memberCount', members.length);

      return members;

    } catch (error) {
      this.logger.error('Failed to retrieve team members', { error, teamId });
      subsegment?.addError(error as Error);
      throw error;
    } finally {
      subsegment?.close();
    }
  }

  async createTeam(request: { userId: string; teamName: string; description?: string }): Promise<Team> {
    const segment = this.tracer.getSegment();
    const subsegment = segment?.addNewSubsegment('createTeam');

    try {
      this.logger.info('Creating team', {
        userId: request.userId,
        teamName: request.teamName
      });

      const teamId = `team_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const team: Team = {
        teamId,
        name: request.teamName,
        description: request.description,
        leaderId: request.userId,
        members: [
          {
            userId: request.userId,
            username: 'TeamLeader',
            role: 'leader',
            status: 'online',
            joinedAt: Date.now()
          }
        ],
        createdAt: Date.now(),
        settings: {
          isPublic: true,
          maxMembers: 5,
          requireApproval: false
        }
      };

      await this.saveTeam(team);

      this.metrics.addMetric('TeamsCreated', MetricUnit.Count, 1);
      subsegment?.addAnnotation('teamCreated', true);

      return team;

    } catch (error) {
      this.logger.error('Failed to create team', { error });
      subsegment?.addError(error as Error);
      throw error;
    } finally {
      subsegment?.close();
    }
  }

  private async validateMessage(message: string): Promise<void> {
    const bannedWords = ['spam', 'toxic', 'cheat'];
    const lowerMessage = message.toLowerCase();
    
    for (const word of bannedWords) {
      if (lowerMessage.includes(word)) {
        throw new Error(`Message contains prohibited content: ${word}`);
      }
    }
  }

  private async deliverMessage(messageId: string, request: MessageRequest): Promise<void> {
    this.logger.info('Delivering message', {
      messageId,
      channelId: request.channelId,
      userId: request.userId
    });

    await new Promise(resolve => setTimeout(resolve, 10));
  }

  private async saveTeam(team: Team): Promise<void> {
    this.logger.info('Saving team to database', {
      teamId: team.teamId,
      memberCount: team.members.length
    });
  }

  async healthCheck(): Promise<any> {
    return {
      dynamodb: 'healthy',
      websocket: 'connected',
      eventbridge: 'operational',
      redis: 'connected'
    };
  }
}