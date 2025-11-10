export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    timestamp: string;
    details?: any;
  };
  metadata?: {
    timestamp: string;
    requestId?: string;
    processingTime?: number;
    version?: string;
  };
}

export interface PerformanceAnalysisRequest {
  userId: string;
  sessionId: string;
  analysisType: 'real-time' | 'post-game' | 'historical';
  gameplayData: {
    events: Array<{
      timestamp: number;
      type: string;
      data: any;
      context: any;
    }>;
    metadata: {
      gameMode: string;
      duration: number;
      patch: string;
      server: string;
    };
  };
  timeWindow?: number;
}

export interface PerformanceAnalysisResult {
  analysisId: string;
  confidence: number;
  insights: Array<{
    category: string;
    message: string;
    priority: 'low' | 'medium' | 'high';
    actionable: boolean;
  }>;
  metrics: {
    kda: number;
    accuracy: number;
    gameTime: number;
    skillRating: number;
  };
  recommendations: string[];
}