// RiftIQ AI Coaching System - Database Schema Type Definitions
// Version: 1.0 | Framework: Node.js 22 + TypeScript 5.7

// ============================================================================
// POSTGRESQL SCHEMA TYPES (Prisma)
// ============================================================================

export interface UserRecord {
  id: string;
  email: string;
  username: string;
  passwordHash?: string;
  profile: UserProfileRecord;
  preferences: UserPreferencesRecord;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  isActive: boolean;
  emailVerified: boolean;
}

export interface UserProfileRecord {
  userId: string;
  displayName: string;
  avatar?: string;
  gameRank: string;
  mainRole: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  timezone: string;
  bio?: string;
  country?: string;
  language: string;
  publicProfile: boolean;
}

export interface UserPreferencesRecord {
  userId: string;
  coachingStyle: 'Aggressive' | 'Supportive' | 'Analytical' | 'Motivational';
  coachingIntensity: 'Low' | 'Medium' | 'High';
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  privacySettings: PrivacySettingsRecord;
  learningPreferences: LearningPreferencesRecord;
}

export interface PrivacySettingsRecord {
  profileVisibility: 'Public' | 'Friends' | 'Private';
  shareAnalytics: boolean;
  shareProgress: boolean;
  allowFriendRequests: boolean;
  showOnlineStatus: boolean;
}

export interface LearningPreferencesRecord {
  preferredContentTypes: string[];
  learningStyle: 'Visual' | 'Auditory' | 'Kinesthetic' | 'Mixed';
  sessionDuration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  avoidTopics: string[];
}

export interface GameplaySessionRecord {
  id: string;
  userId: string;
  gameMode: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  status: 'active' | 'completed' | 'abandoned';
  performanceMetrics: PerformanceMetricsRecord;
  metadata: SessionMetadataRecord;
  createdAt: Date;
  updatedAt: Date;
}

export interface PerformanceMetricsRecord {
  sessionId: string;
  kda: KDARecord;
  economy: EconomyRecord;
  objectives: ObjectivesRecord;
  skillMetrics: SkillMetricsRecord;
  overallScore: number;
  rank: string;
  improvement: number;
}

export interface KDARecord {
  kills: number;
  deaths: number;
  assists: number;
  ratio: number;
  killParticipation: number;
  firstBlood: boolean;
}

export interface EconomyRecord {
  goldEarned: number;
  goldSpent: number;
  goldPerMinute: number;
  efficiency: number;
  itemBuildScore: number;
  farmingScore: number;
}

export interface ObjectivesRecord {
  participated: number;
  secured: number;
  contested: number;
  participationRate: number;
  successRate: number;
  impactScore: number;
}

export interface SkillMetricsRecord {
  accuracy: number;
  reactionTime: number;
  decisionMaking: number;
  positioning: number;
  timing: number;
  adaptation: number;
}

export interface SessionMetadataRecord {
  gameVersion: string;
  server: string;
  region: string;
  teamComposition: string[];
  enemyComposition: string[];
  mapName: string;
  gameLength: number;
}

export interface AnalyticsRecord {
  id: string;
  userId: string;
  sessionId?: string;
  analysisType: 'real-time' | 'post-game' | 'historical' | 'trend';
  category: 'performance' | 'behavior' | 'learning' | 'social';
  metrics: Record<string, number>;
  insights: AnalyticsInsightRecord[];
  recommendations: string[];
  confidence: number;
  processingTime: number;
  createdAt: Date;
}

export interface AnalyticsInsightRecord {
  type: 'strength' | 'weakness' | 'opportunity' | 'trend';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  evidence: string[];
  suggestions: string[];
  confidence: number;
}

export interface CoachingHistoryRecord {
  id: string;
  userId: string;
  sessionId?: string;
  coachingType: 'real-time' | 'post-game' | 'strategic' | 'educational';
  message: string;
  category: 'tactical' | 'strategic' | 'mechanical' | 'mental';
  priority: 'low' | 'medium' | 'high' | 'critical';
  deliveryTime: number;
  userResponse?: string;
  effectiveness?: number;
  feedback?: number;
  createdAt: Date;
}

export interface LearningProgressRecord {
  id: string;
  userId: string;
  contentId: string;
  pathId?: string;
  moduleId?: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'skipped';
  progress: number;
  timeSpent: number;
  score?: number;
  attempts: number;
  lastAccessed: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AchievementRecord {
  id: string;
  userId: string;
  achievementId: string;
  name: string;
  description: string;
  category: string;
  type: 'performance' | 'social' | 'learning' | 'milestone';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  progress: number;
  maxProgress: number;
  completed: boolean;
  unlockedAt?: Date;
  createdAt: Date;
}

// ============================================================================
// DYNAMODB SCHEMA TYPES
// ============================================================================

export interface DynamoDBUserConnection {
  PK: string; // USER#{userId}
  SK: string; // CONNECTION#{connectionId}
  userId: string;
  connectionId: string;
  status: 'connected' | 'disconnected';
  connectedAt: number;
  lastActivity: number;
  subscriptions: string[];
  metadata: Record<string, any>;
  TTL?: number;
}

export interface DynamoDBSocialConnection {
  PK: string; // USER#{userId}
  SK: string; // FRIEND#{friendId}
  userId: string;
  friendId: string;
  status: 'pending' | 'accepted' | 'blocked';
  relationship: 'friend' | 'teammate' | 'mentor' | 'student';
  strength: number;
  createdAt: number;
  lastInteraction: number;
  sharedActivities: string[];
  GSI1PK?: string; // FRIEND#{friendId}
  GSI1SK?: string; // USER#{userId}
}

export interface DynamoDBMessage {
  PK: string; // CONVERSATION#{conversationId}
  SK: string; // MESSAGE#{timestamp}#{messageId}
  messageId: string;
  conversationId: string;
  senderId: string;
  recipientId?: string;
  groupId?: string;
  content: MessageContentRecord;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
  reactions: MessageReactionRecord[];
  editedAt?: number;
  deletedAt?: number;
  TTL?: number;
}

export interface MessageContentRecord {
  type: 'text' | 'image' | 'video' | 'coaching' | 'system';
  text?: string;
  media?: MediaContentRecord;
  coaching?: CoachingContentRecord;
  system?: SystemContentRecord;
}

export interface MediaContentRecord {
  url: string;
  type: string;
  size: number;
  thumbnail?: string;
  duration?: number;
}

export interface CoachingContentRecord {
  tip: string;
  category: string;
  difficulty: string;
  source: string;
  effectiveness?: number;
}

export interface SystemContentRecord {
  type: string;
  data: Record<string, any>;
  action?: string;
}

export interface MessageReactionRecord {
  userId: string;
  emoji: string;
  timestamp: number;
}

export interface DynamoDBRealtimeSession {
  PK: string; // SESSION#{sessionId}
  SK: string; // REALTIME
  sessionId: string;
  userId: string;
  gameMode: string;
  status: 'active' | 'paused' | 'ended';
  startTime: number;
  endTime?: number;
  currentState: GameStateRecord;
  coachingSettings: CoachingSettingsRecord;
  metrics: RealtimeMetricsRecord;
  lastUpdate: number;
  TTL?: number;
}

export interface GameStateRecord {
  gameTime: number;
  phase: 'early' | 'mid' | 'late';
  score: { team: number; enemy: number };
  objectives: ObjectiveStateRecord[];
  teamFight: boolean;
  playerState: PlayerStateRecord;
}

export interface ObjectiveStateRecord {
  type: string;
  status: 'available' | 'contested' | 'secured';
  timer?: number;
  importance: number;
}

export interface PlayerStateRecord {
  position: { x: number; y: number };
  health: number;
  mana: number;
  level: number;
  gold: number;
  items: string[];
  abilities: string[];
}

export interface CoachingSettingsRecord {
  intensity: 'low' | 'medium' | 'high';
  focus: string[];
  style: 'aggressive' | 'supportive' | 'analytical';
  frequency: number;
  latencyTarget: number;
}

export interface RealtimeMetricsRecord {
  messagesDelivered: number;
  averageLatency: number;
  userEngagement: number;
  effectiveness: number;
  lastCoaching: number;
}

export interface DynamoDBGroup {
  PK: string; // GROUP#{groupId}
  SK: string; // METADATA
  groupId: string;
  name: string;
  description?: string;
  type: 'team' | 'guild' | 'study' | 'casual';
  ownerId: string;
  settings: GroupSettingsRecord;
  activity: GroupActivityRecord;
  createdAt: number;
  updatedAt: number;
}

export interface GroupSettingsRecord {
  privacy: 'public' | 'private' | 'invite-only';
  maxMembers: number;
  requirements: string[];
  rules: string[];
  autoAccept: boolean;
}

export interface GroupActivityRecord {
  lastActive: number;
  messagesPerDay: number;
  eventsPerWeek: number;
  engagement: number;
  memberCount: number;
}

export interface DynamoDBGroupMember {
  PK: string; // GROUP#{groupId}
  SK: string; // MEMBER#{userId}
  groupId: string;
  userId: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: number;
  contribution: number;
  status: 'active' | 'inactive' | 'away';
  permissions: string[];
  GSI1PK?: string; // USER#{userId}
  GSI1SK?: string; // GROUP#{groupId}
}

export interface DynamoDBEvent {
  PK: string; // EVENT#{eventId}
  SK: string; // METADATA
  eventId: string;
  type: 'coaching' | 'social' | 'system' | 'user';
  source: string;
  userId?: string;
  sessionId?: string;
  data: Record<string, any>;
  timestamp: number;
  processed: boolean;
  retryCount: number;
  TTL?: number;
}

// ============================================================================
// REDIS CACHE TYPES
// ============================================================================

export interface CacheKey {
  pattern: string;
  ttl: number;
  type: 'string' | 'hash' | 'list' | 'set' | 'zset';
}

export interface UserCacheData {
  userId: string;
  profile: UserProfileRecord;
  preferences: UserPreferencesRecord;
  recentSessions: string[];
  activeConnections: string[];
  lastActivity: number;
  cacheTime: number;
}

export interface SessionCacheData {
  sessionId: string;
  userId: string;
  gameState: GameStateRecord;
  coachingQueue: CoachingQueueItem[];
  metrics: RealtimeMetricsRecord;
  lastUpdate: number;
  cacheTime: number;
}

export interface CoachingQueueItem {
  messageId: string;
  priority: number;
  message: string;
  type: string;
  timestamp: number;
  attempts: number;
}

export interface AnalyticsCacheData {
  userId: string;
  timeframe: string;
  metrics: Record<string, number>;
  trends: Record<string, any>;
  lastCalculated: number;
  cacheTime: number;
}

// ============================================================================
// DATABASE CONNECTION TYPES
// ============================================================================

export interface DatabaseConnections {
  postgresql: PostgreSQLConnection;
  dynamodb: DynamoDBConnection;
  redis: RedisConnection;
}

export interface PostgreSQLConnection {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
  poolSize: number;
  connectionTimeout: number;
  idleTimeout: number;
}

export interface DynamoDBConnection {
  region: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  endpoint?: string;
  maxRetries: number;
  timeout: number;
}

export interface RedisConnection {
  host: string;
  port: number;
  password?: string;
  database: number;
  maxRetriesPerRequest: number;
  retryDelayOnFailover: number;
  connectTimeout: number;
}

// ============================================================================
// QUERY TYPES
// ============================================================================

export interface QueryOptions {
  limit?: number;
  offset?: number;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
  filters?: Record<string, any>;
  include?: string[];
}

export interface PaginationOptions {
  page: number;
  limit: number;
  cursor?: string;
}

export interface QueryResult<T> {
  data: T[];
  total: number;
  page?: number;
  limit?: number;
  hasNext: boolean;
  hasPrev: boolean;
  cursor?: string;
}

// ============================================================================
// MIGRATION TYPES
// ============================================================================

export interface MigrationScript {
  version: string;
  name: string;
  description: string;
  up: string;
  down: string;
  checksum: string;
  appliedAt?: Date;
}

export interface SchemaVersion {
  version: string;
  appliedAt: Date;
  checksum: string;
  description: string;
}
