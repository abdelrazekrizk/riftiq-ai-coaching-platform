// Agent-Specific Types for RiftIQ AI Coaching System

// Performance Analytics Agent Types
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
  insights: Array<{
    type: string;
    description: string;
    impact: string;
    confidence: number;
  }>;
  confidence: number;
  processingTime: number;
}

// API Response Type
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata: {
    awsRequestId?: string;
    timestamp: Date;
    processingTime: number;
    version: string;
    [key: string]: any;
  };
}
