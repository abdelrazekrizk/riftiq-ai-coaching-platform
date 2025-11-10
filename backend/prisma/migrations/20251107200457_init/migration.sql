-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- CreateEnum
CREATE TYPE "CoachingStyle" AS ENUM ('AGGRESSIVE', 'SUPPORTIVE', 'ANALYTICAL', 'MOTIVATIONAL');

-- CreateEnum
CREATE TYPE "Intensity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'FRIENDS', 'PRIVATE');

-- CreateEnum
CREATE TYPE "LearningStyle" AS ENUM ('VISUAL', 'AUDITORY', 'KINESTHETIC', 'MIXED');

-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "AnalysisType" AS ENUM ('REAL_TIME', 'POST_GAME', 'HISTORICAL', 'TREND');

-- CreateEnum
CREATE TYPE "AnalyticsCategory" AS ENUM ('PERFORMANCE', 'BEHAVIOR', 'LEARNING', 'SOCIAL');

-- CreateEnum
CREATE TYPE "CoachingType" AS ENUM ('REAL_TIME', 'POST_GAME', 'STRATEGIC', 'EDUCATIONAL');

-- CreateEnum
CREATE TYPE "CoachingCategory" AS ENUM ('TACTICAL', 'STRATEGIC', 'MECHANICAL', 'MENTAL');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "AchievementType" AS ENUM ('PERFORMANCE', 'SOCIAL', 'LEARNING', 'MILESTONE');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY');

-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('PENDING', 'ACCEPTED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "RelationshipType" AS ENUM ('FRIEND', 'TEAMMATE', 'MENTOR', 'STUDENT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "avatar" TEXT,
    "gameRank" TEXT NOT NULL,
    "mainRole" TEXT NOT NULL,
    "skillLevel" "SkillLevel" NOT NULL DEFAULT 'BEGINNER',
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "bio" TEXT,
    "country" TEXT,
    "language" TEXT NOT NULL DEFAULT 'en',
    "publicProfile" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "coachingStyle" "CoachingStyle" NOT NULL DEFAULT 'SUPPORTIVE',
    "coachingIntensity" "Intensity" NOT NULL DEFAULT 'MEDIUM',
    "notificationsEnabled" BOOLEAN NOT NULL DEFAULT true,
    "emailNotifications" BOOLEAN NOT NULL DEFAULT true,
    "pushNotifications" BOOLEAN NOT NULL DEFAULT true,
    "profileVisibility" "Visibility" NOT NULL DEFAULT 'PUBLIC',
    "shareAnalytics" BOOLEAN NOT NULL DEFAULT true,
    "shareProgress" BOOLEAN NOT NULL DEFAULT true,
    "allowFriendRequests" BOOLEAN NOT NULL DEFAULT true,
    "showOnlineStatus" BOOLEAN NOT NULL DEFAULT true,
    "preferredContentTypes" TEXT[],
    "learningStyle" "LearningStyle" NOT NULL DEFAULT 'MIXED',
    "sessionDuration" INTEGER NOT NULL DEFAULT 30,
    "difficulty" "SkillLevel" NOT NULL DEFAULT 'INTERMEDIATE',
    "topics" TEXT[],
    "avoidTopics" TEXT[],

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameplay_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameMode" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "duration" INTEGER,
    "status" "SessionStatus" NOT NULL DEFAULT 'ACTIVE',
    "gameVersion" TEXT NOT NULL,
    "server" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "teamComposition" TEXT[],
    "enemyComposition" TEXT[],
    "mapName" TEXT NOT NULL,
    "gameLength" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gameplay_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performance_metrics" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "kills" INTEGER NOT NULL,
    "deaths" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "kdaRatio" DOUBLE PRECISION NOT NULL,
    "killParticipation" DOUBLE PRECISION NOT NULL,
    "firstBlood" BOOLEAN NOT NULL DEFAULT false,
    "goldEarned" INTEGER NOT NULL,
    "goldSpent" INTEGER NOT NULL,
    "goldPerMinute" DOUBLE PRECISION NOT NULL,
    "economyEfficiency" DOUBLE PRECISION NOT NULL,
    "itemBuildScore" DOUBLE PRECISION NOT NULL,
    "farmingScore" DOUBLE PRECISION NOT NULL,
    "objectivesParticipated" INTEGER NOT NULL,
    "objectivesSecured" INTEGER NOT NULL,
    "objectivesContested" INTEGER NOT NULL,
    "participationRate" DOUBLE PRECISION NOT NULL,
    "successRate" DOUBLE PRECISION NOT NULL,
    "impactScore" DOUBLE PRECISION NOT NULL,
    "accuracy" DOUBLE PRECISION NOT NULL,
    "reactionTime" DOUBLE PRECISION NOT NULL,
    "decisionMaking" DOUBLE PRECISION NOT NULL,
    "positioning" DOUBLE PRECISION NOT NULL,
    "timing" DOUBLE PRECISION NOT NULL,
    "adaptation" DOUBLE PRECISION NOT NULL,
    "overallScore" DOUBLE PRECISION NOT NULL,
    "rank" TEXT NOT NULL,
    "improvement" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "performance_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT,
    "analysisType" "AnalysisType" NOT NULL,
    "category" "AnalyticsCategory" NOT NULL,
    "metrics" JSONB NOT NULL,
    "insights" JSONB NOT NULL,
    "recommendations" TEXT[],
    "confidence" DOUBLE PRECISION NOT NULL,
    "processingTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coaching_history" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT,
    "coachingType" "CoachingType" NOT NULL,
    "message" TEXT NOT NULL,
    "category" "CoachingCategory" NOT NULL,
    "priority" "Priority" NOT NULL,
    "deliveryTime" INTEGER NOT NULL,
    "userResponse" TEXT,
    "effectiveness" DOUBLE PRECISION,
    "feedback" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coaching_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "learning_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "pathId" TEXT,
    "moduleId" TEXT,
    "status" "ProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "timeSpent" INTEGER NOT NULL DEFAULT 0,
    "score" DOUBLE PRECISION,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastAccessed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "learning_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievements" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" "AchievementType" NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "maxProgress" DOUBLE PRECISION NOT NULL DEFAULT 100,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "unlockedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_connections" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,
    "status" "ConnectionStatus" NOT NULL DEFAULT 'PENDING',
    "relationship" "RelationshipType" NOT NULL DEFAULT 'FRIEND',
    "strength" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastInteraction" TIMESTAMP(3),
    "sharedActivities" TEXT[],

    CONSTRAINT "social_connections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userId_key" ON "user_profiles"("userId");

-- CreateIndex
CREATE INDEX "user_profiles_userId_idx" ON "user_profiles"("userId");

-- CreateIndex
CREATE INDEX "user_profiles_skillLevel_idx" ON "user_profiles"("skillLevel");

-- CreateIndex
CREATE INDEX "user_profiles_gameRank_idx" ON "user_profiles"("gameRank");

-- CreateIndex
CREATE UNIQUE INDEX "user_preferences_userId_key" ON "user_preferences"("userId");

-- CreateIndex
CREATE INDEX "user_preferences_userId_idx" ON "user_preferences"("userId");

-- CreateIndex
CREATE INDEX "gameplay_sessions_userId_idx" ON "gameplay_sessions"("userId");

-- CreateIndex
CREATE INDEX "gameplay_sessions_gameMode_idx" ON "gameplay_sessions"("gameMode");

-- CreateIndex
CREATE INDEX "gameplay_sessions_startTime_idx" ON "gameplay_sessions"("startTime");

-- CreateIndex
CREATE INDEX "gameplay_sessions_status_idx" ON "gameplay_sessions"("status");

-- CreateIndex
CREATE UNIQUE INDEX "performance_metrics_sessionId_key" ON "performance_metrics"("sessionId");

-- CreateIndex
CREATE INDEX "performance_metrics_sessionId_idx" ON "performance_metrics"("sessionId");

-- CreateIndex
CREATE INDEX "performance_metrics_overallScore_idx" ON "performance_metrics"("overallScore");

-- CreateIndex
CREATE INDEX "performance_metrics_rank_idx" ON "performance_metrics"("rank");

-- CreateIndex
CREATE INDEX "analytics_userId_idx" ON "analytics"("userId");

-- CreateIndex
CREATE INDEX "analytics_sessionId_idx" ON "analytics"("sessionId");

-- CreateIndex
CREATE INDEX "analytics_analysisType_idx" ON "analytics"("analysisType");

-- CreateIndex
CREATE INDEX "analytics_category_idx" ON "analytics"("category");

-- CreateIndex
CREATE INDEX "analytics_createdAt_idx" ON "analytics"("createdAt");

-- CreateIndex
CREATE INDEX "coaching_history_userId_idx" ON "coaching_history"("userId");

-- CreateIndex
CREATE INDEX "coaching_history_sessionId_idx" ON "coaching_history"("sessionId");

-- CreateIndex
CREATE INDEX "coaching_history_coachingType_idx" ON "coaching_history"("coachingType");

-- CreateIndex
CREATE INDEX "coaching_history_category_idx" ON "coaching_history"("category");

-- CreateIndex
CREATE INDEX "coaching_history_createdAt_idx" ON "coaching_history"("createdAt");

-- CreateIndex
CREATE INDEX "learning_progress_userId_idx" ON "learning_progress"("userId");

-- CreateIndex
CREATE INDEX "learning_progress_contentId_idx" ON "learning_progress"("contentId");

-- CreateIndex
CREATE INDEX "learning_progress_pathId_idx" ON "learning_progress"("pathId");

-- CreateIndex
CREATE INDEX "learning_progress_status_idx" ON "learning_progress"("status");

-- CreateIndex
CREATE INDEX "learning_progress_lastAccessed_idx" ON "learning_progress"("lastAccessed");

-- CreateIndex
CREATE INDEX "achievements_userId_idx" ON "achievements"("userId");

-- CreateIndex
CREATE INDEX "achievements_achievementId_idx" ON "achievements"("achievementId");

-- CreateIndex
CREATE INDEX "achievements_type_idx" ON "achievements"("type");

-- CreateIndex
CREATE INDEX "achievements_rarity_idx" ON "achievements"("rarity");

-- CreateIndex
CREATE INDEX "achievements_completed_idx" ON "achievements"("completed");

-- CreateIndex
CREATE UNIQUE INDEX "achievements_userId_achievementId_key" ON "achievements"("userId", "achievementId");

-- CreateIndex
CREATE INDEX "social_connections_userId_idx" ON "social_connections"("userId");

-- CreateIndex
CREATE INDEX "social_connections_friendId_idx" ON "social_connections"("friendId");

-- CreateIndex
CREATE INDEX "social_connections_status_idx" ON "social_connections"("status");

-- CreateIndex
CREATE INDEX "social_connections_relationship_idx" ON "social_connections"("relationship");

-- CreateIndex
CREATE UNIQUE INDEX "social_connections_userId_friendId_key" ON "social_connections"("userId", "friendId");

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gameplay_sessions" ADD CONSTRAINT "gameplay_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_metrics" ADD CONSTRAINT "performance_metrics_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "gameplay_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analytics" ADD CONSTRAINT "analytics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analytics" ADD CONSTRAINT "analytics_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "gameplay_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coaching_history" ADD CONSTRAINT "coaching_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coaching_history" ADD CONSTRAINT "coaching_history_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "gameplay_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_progress" ADD CONSTRAINT "learning_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_progress" ADD CONSTRAINT "learning_progress_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "gameplay_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_connections" ADD CONSTRAINT "social_connections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_connections" ADD CONSTRAINT "social_connections_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
