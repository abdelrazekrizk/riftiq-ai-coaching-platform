
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model GameplaySession
 * 
 */
export type GameplaySession = $Result.DefaultSelection<Prisma.$GameplaySessionPayload>
/**
 * Model PerformanceMetrics
 * 
 */
export type PerformanceMetrics = $Result.DefaultSelection<Prisma.$PerformanceMetricsPayload>
/**
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>
/**
 * Model CoachingHistory
 * 
 */
export type CoachingHistory = $Result.DefaultSelection<Prisma.$CoachingHistoryPayload>
/**
 * Model LearningProgress
 * 
 */
export type LearningProgress = $Result.DefaultSelection<Prisma.$LearningProgressPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model SocialConnection
 * 
 */
export type SocialConnection = $Result.DefaultSelection<Prisma.$SocialConnectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SkillLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type SkillLevel = (typeof SkillLevel)[keyof typeof SkillLevel]


export const CoachingStyle: {
  AGGRESSIVE: 'AGGRESSIVE',
  SUPPORTIVE: 'SUPPORTIVE',
  ANALYTICAL: 'ANALYTICAL',
  MOTIVATIONAL: 'MOTIVATIONAL'
};

export type CoachingStyle = (typeof CoachingStyle)[keyof typeof CoachingStyle]


export const Intensity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Intensity = (typeof Intensity)[keyof typeof Intensity]


export const Visibility: {
  PUBLIC: 'PUBLIC',
  FRIENDS: 'FRIENDS',
  PRIVATE: 'PRIVATE'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]


export const LearningStyle: {
  VISUAL: 'VISUAL',
  AUDITORY: 'AUDITORY',
  KINESTHETIC: 'KINESTHETIC',
  MIXED: 'MIXED'
};

export type LearningStyle = (typeof LearningStyle)[keyof typeof LearningStyle]


export const SessionStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const AnalysisType: {
  REAL_TIME: 'REAL_TIME',
  POST_GAME: 'POST_GAME',
  HISTORICAL: 'HISTORICAL',
  TREND: 'TREND'
};

export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType]


export const AnalyticsCategory: {
  PERFORMANCE: 'PERFORMANCE',
  BEHAVIOR: 'BEHAVIOR',
  LEARNING: 'LEARNING',
  SOCIAL: 'SOCIAL'
};

export type AnalyticsCategory = (typeof AnalyticsCategory)[keyof typeof AnalyticsCategory]


export const CoachingType: {
  REAL_TIME: 'REAL_TIME',
  POST_GAME: 'POST_GAME',
  STRATEGIC: 'STRATEGIC',
  EDUCATIONAL: 'EDUCATIONAL'
};

export type CoachingType = (typeof CoachingType)[keyof typeof CoachingType]


export const CoachingCategory: {
  TACTICAL: 'TACTICAL',
  STRATEGIC: 'STRATEGIC',
  MECHANICAL: 'MECHANICAL',
  MENTAL: 'MENTAL'
};

export type CoachingCategory = (typeof CoachingCategory)[keyof typeof CoachingCategory]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const ProgressStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]


export const AchievementType: {
  PERFORMANCE: 'PERFORMANCE',
  SOCIAL: 'SOCIAL',
  LEARNING: 'LEARNING',
  MILESTONE: 'MILESTONE'
};

export type AchievementType = (typeof AchievementType)[keyof typeof AchievementType]


export const Rarity: {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY'
};

export type Rarity = (typeof Rarity)[keyof typeof Rarity]


export const ConnectionStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  BLOCKED: 'BLOCKED'
};

export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus]


export const RelationshipType: {
  FRIEND: 'FRIEND',
  TEAMMATE: 'TEAMMATE',
  MENTOR: 'MENTOR',
  STUDENT: 'STUDENT'
};

export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType]

}

export type SkillLevel = $Enums.SkillLevel

export const SkillLevel: typeof $Enums.SkillLevel

export type CoachingStyle = $Enums.CoachingStyle

export const CoachingStyle: typeof $Enums.CoachingStyle

export type Intensity = $Enums.Intensity

export const Intensity: typeof $Enums.Intensity

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

export type LearningStyle = $Enums.LearningStyle

export const LearningStyle: typeof $Enums.LearningStyle

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type AnalysisType = $Enums.AnalysisType

export const AnalysisType: typeof $Enums.AnalysisType

export type AnalyticsCategory = $Enums.AnalyticsCategory

export const AnalyticsCategory: typeof $Enums.AnalyticsCategory

export type CoachingType = $Enums.CoachingType

export const CoachingType: typeof $Enums.CoachingType

export type CoachingCategory = $Enums.CoachingCategory

export const CoachingCategory: typeof $Enums.CoachingCategory

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

export type AchievementType = $Enums.AchievementType

export const AchievementType: typeof $Enums.AchievementType

export type Rarity = $Enums.Rarity

export const Rarity: typeof $Enums.Rarity

export type ConnectionStatus = $Enums.ConnectionStatus

export const ConnectionStatus: typeof $Enums.ConnectionStatus

export type RelationshipType = $Enums.RelationshipType

export const RelationshipType: typeof $Enums.RelationshipType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameplaySession`: Exposes CRUD operations for the **GameplaySession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameplaySessions
    * const gameplaySessions = await prisma.gameplaySession.findMany()
    * ```
    */
  get gameplaySession(): Prisma.GameplaySessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performanceMetrics`: Exposes CRUD operations for the **PerformanceMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerformanceMetrics
    * const performanceMetrics = await prisma.performanceMetrics.findMany()
    * ```
    */
  get performanceMetrics(): Prisma.PerformanceMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachingHistory`: Exposes CRUD operations for the **CoachingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachingHistories
    * const coachingHistories = await prisma.coachingHistory.findMany()
    * ```
    */
  get coachingHistory(): Prisma.CoachingHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningProgress`: Exposes CRUD operations for the **LearningProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningProgresses
    * const learningProgresses = await prisma.learningProgress.findMany()
    * ```
    */
  get learningProgress(): Prisma.LearningProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialConnection`: Exposes CRUD operations for the **SocialConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialConnections
    * const socialConnections = await prisma.socialConnection.findMany()
    * ```
    */
  get socialConnection(): Prisma.SocialConnectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    UserPreferences: 'UserPreferences',
    GameplaySession: 'GameplaySession',
    PerformanceMetrics: 'PerformanceMetrics',
    Analytics: 'Analytics',
    CoachingHistory: 'CoachingHistory',
    LearningProgress: 'LearningProgress',
    Achievement: 'Achievement',
    SocialConnection: 'SocialConnection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "userPreferences" | "gameplaySession" | "performanceMetrics" | "analytics" | "coachingHistory" | "learningProgress" | "achievement" | "socialConnection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      GameplaySession: {
        payload: Prisma.$GameplaySessionPayload<ExtArgs>
        fields: Prisma.GameplaySessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameplaySessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameplaySessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>
          }
          findFirst: {
            args: Prisma.GameplaySessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameplaySessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>
          }
          findMany: {
            args: Prisma.GameplaySessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>[]
          }
          create: {
            args: Prisma.GameplaySessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>
          }
          createMany: {
            args: Prisma.GameplaySessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameplaySessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>[]
          }
          delete: {
            args: Prisma.GameplaySessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>
          }
          update: {
            args: Prisma.GameplaySessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>
          }
          deleteMany: {
            args: Prisma.GameplaySessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameplaySessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameplaySessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>[]
          }
          upsert: {
            args: Prisma.GameplaySessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameplaySessionPayload>
          }
          aggregate: {
            args: Prisma.GameplaySessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameplaySession>
          }
          groupBy: {
            args: Prisma.GameplaySessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameplaySessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameplaySessionCountArgs<ExtArgs>
            result: $Utils.Optional<GameplaySessionCountAggregateOutputType> | number
          }
        }
      }
      PerformanceMetrics: {
        payload: Prisma.$PerformanceMetricsPayload<ExtArgs>
        fields: Prisma.PerformanceMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformanceMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformanceMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>
          }
          findFirst: {
            args: Prisma.PerformanceMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformanceMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>
          }
          findMany: {
            args: Prisma.PerformanceMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>[]
          }
          create: {
            args: Prisma.PerformanceMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>
          }
          createMany: {
            args: Prisma.PerformanceMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerformanceMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>[]
          }
          delete: {
            args: Prisma.PerformanceMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>
          }
          update: {
            args: Prisma.PerformanceMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>
          }
          deleteMany: {
            args: Prisma.PerformanceMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerformanceMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerformanceMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>[]
          }
          upsert: {
            args: Prisma.PerformanceMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceMetricsPayload>
          }
          aggregate: {
            args: Prisma.PerformanceMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerformanceMetrics>
          }
          groupBy: {
            args: Prisma.PerformanceMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerformanceMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformanceMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<PerformanceMetricsCountAggregateOutputType> | number
          }
        }
      }
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
      CoachingHistory: {
        payload: Prisma.$CoachingHistoryPayload<ExtArgs>
        fields: Prisma.CoachingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>
          }
          findFirst: {
            args: Prisma.CoachingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>
          }
          findMany: {
            args: Prisma.CoachingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>[]
          }
          create: {
            args: Prisma.CoachingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>
          }
          createMany: {
            args: Prisma.CoachingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachingHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>[]
          }
          delete: {
            args: Prisma.CoachingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>
          }
          update: {
            args: Prisma.CoachingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CoachingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachingHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>[]
          }
          upsert: {
            args: Prisma.CoachingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingHistoryPayload>
          }
          aggregate: {
            args: Prisma.CoachingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachingHistory>
          }
          groupBy: {
            args: Prisma.CoachingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CoachingHistoryCountAggregateOutputType> | number
          }
        }
      }
      LearningProgress: {
        payload: Prisma.$LearningProgressPayload<ExtArgs>
        fields: Prisma.LearningProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          findFirst: {
            args: Prisma.LearningProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          findMany: {
            args: Prisma.LearningProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>[]
          }
          create: {
            args: Prisma.LearningProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          createMany: {
            args: Prisma.LearningProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>[]
          }
          delete: {
            args: Prisma.LearningProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          update: {
            args: Prisma.LearningProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          deleteMany: {
            args: Prisma.LearningProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>[]
          }
          upsert: {
            args: Prisma.LearningProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          aggregate: {
            args: Prisma.LearningProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningProgress>
          }
          groupBy: {
            args: Prisma.LearningProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LearningProgressCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      SocialConnection: {
        payload: Prisma.$SocialConnectionPayload<ExtArgs>
        fields: Prisma.SocialConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>
          }
          findFirst: {
            args: Prisma.SocialConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>
          }
          findMany: {
            args: Prisma.SocialConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>[]
          }
          create: {
            args: Prisma.SocialConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>
          }
          createMany: {
            args: Prisma.SocialConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>[]
          }
          delete: {
            args: Prisma.SocialConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>
          }
          update: {
            args: Prisma.SocialConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>
          }
          deleteMany: {
            args: Prisma.SocialConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>[]
          }
          upsert: {
            args: Prisma.SocialConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialConnectionPayload>
          }
          aggregate: {
            args: Prisma.SocialConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialConnection>
          }
          groupBy: {
            args: Prisma.SocialConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<SocialConnectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    userPreferences?: UserPreferencesOmit
    gameplaySession?: GameplaySessionOmit
    performanceMetrics?: PerformanceMetricsOmit
    analytics?: AnalyticsOmit
    coachingHistory?: CoachingHistoryOmit
    learningProgress?: LearningProgressOmit
    achievement?: AchievementOmit
    socialConnection?: SocialConnectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    analytics: number
    coachingHistory: number
    learningProgress: number
    achievements: number
    socialConnections: number
    friendConnections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    analytics?: boolean | UserCountOutputTypeCountAnalyticsArgs
    coachingHistory?: boolean | UserCountOutputTypeCountCoachingHistoryArgs
    learningProgress?: boolean | UserCountOutputTypeCountLearningProgressArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
    socialConnections?: boolean | UserCountOutputTypeCountSocialConnectionsArgs
    friendConnections?: boolean | UserCountOutputTypeCountFriendConnectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameplaySessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSocialConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialConnectionWhereInput
  }


  /**
   * Count Type GameplaySessionCountOutputType
   */

  export type GameplaySessionCountOutputType = {
    analytics: number
    coachingHistory: number
    learningProgress: number
  }

  export type GameplaySessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | GameplaySessionCountOutputTypeCountAnalyticsArgs
    coachingHistory?: boolean | GameplaySessionCountOutputTypeCountCoachingHistoryArgs
    learningProgress?: boolean | GameplaySessionCountOutputTypeCountLearningProgressArgs
  }

  // Custom InputTypes
  /**
   * GameplaySessionCountOutputType without action
   */
  export type GameplaySessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySessionCountOutputType
     */
    select?: GameplaySessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameplaySessionCountOutputType without action
   */
  export type GameplaySessionCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
  }

  /**
   * GameplaySessionCountOutputType without action
   */
  export type GameplaySessionCountOutputTypeCountCoachingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingHistoryWhereInput
  }

  /**
   * GameplaySessionCountOutputType without action
   */
  export type GameplaySessionCountOutputTypeCountLearningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    emailVerified: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    emailVerified: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    emailVerified: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    emailVerified?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    emailVerified?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    emailVerified?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    passwordHash: string | null
    emailVerified: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    analytics?: boolean | User$analyticsArgs<ExtArgs>
    coachingHistory?: boolean | User$coachingHistoryArgs<ExtArgs>
    learningProgress?: boolean | User$learningProgressArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    socialConnections?: boolean | User$socialConnectionsArgs<ExtArgs>
    friendConnections?: boolean | User$friendConnectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "emailVerified" | "isActive" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    analytics?: boolean | User$analyticsArgs<ExtArgs>
    coachingHistory?: boolean | User$coachingHistoryArgs<ExtArgs>
    learningProgress?: boolean | User$learningProgressArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    socialConnections?: boolean | User$socialConnectionsArgs<ExtArgs>
    friendConnections?: boolean | User$friendConnectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      sessions: Prisma.$GameplaySessionPayload<ExtArgs>[]
      analytics: Prisma.$AnalyticsPayload<ExtArgs>[]
      coachingHistory: Prisma.$CoachingHistoryPayload<ExtArgs>[]
      learningProgress: Prisma.$LearningProgressPayload<ExtArgs>[]
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      socialConnections: Prisma.$SocialConnectionPayload<ExtArgs>[]
      friendConnections: Prisma.$SocialConnectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      passwordHash: string | null
      emailVerified: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends User$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, User$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachingHistory<T extends User$coachingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$coachingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningProgress<T extends User$learningProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$learningProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialConnections<T extends User$socialConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$socialConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendConnections<T extends User$friendConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    where?: GameplaySessionWhereInput
    orderBy?: GameplaySessionOrderByWithRelationInput | GameplaySessionOrderByWithRelationInput[]
    cursor?: GameplaySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameplaySessionScalarFieldEnum | GameplaySessionScalarFieldEnum[]
  }

  /**
   * User.analytics
   */
  export type User$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    cursor?: AnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * User.coachingHistory
   */
  export type User$coachingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    where?: CoachingHistoryWhereInput
    orderBy?: CoachingHistoryOrderByWithRelationInput | CoachingHistoryOrderByWithRelationInput[]
    cursor?: CoachingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachingHistoryScalarFieldEnum | CoachingHistoryScalarFieldEnum[]
  }

  /**
   * User.learningProgress
   */
  export type User$learningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    where?: LearningProgressWhereInput
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    cursor?: LearningProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * User.socialConnections
   */
  export type User$socialConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    where?: SocialConnectionWhereInput
    orderBy?: SocialConnectionOrderByWithRelationInput | SocialConnectionOrderByWithRelationInput[]
    cursor?: SocialConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialConnectionScalarFieldEnum | SocialConnectionScalarFieldEnum[]
  }

  /**
   * User.friendConnections
   */
  export type User$friendConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    where?: SocialConnectionWhereInput
    orderBy?: SocialConnectionOrderByWithRelationInput | SocialConnectionOrderByWithRelationInput[]
    cursor?: SocialConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialConnectionScalarFieldEnum | SocialConnectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    avatar: string | null
    gameRank: string | null
    mainRole: string | null
    skillLevel: $Enums.SkillLevel | null
    timezone: string | null
    bio: string | null
    country: string | null
    language: string | null
    publicProfile: boolean | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    avatar: string | null
    gameRank: string | null
    mainRole: string | null
    skillLevel: $Enums.SkillLevel | null
    timezone: string | null
    bio: string | null
    country: string | null
    language: string | null
    publicProfile: boolean | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    displayName: number
    avatar: number
    gameRank: number
    mainRole: number
    skillLevel: number
    timezone: number
    bio: number
    country: number
    language: number
    publicProfile: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatar?: true
    gameRank?: true
    mainRole?: true
    skillLevel?: true
    timezone?: true
    bio?: true
    country?: true
    language?: true
    publicProfile?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatar?: true
    gameRank?: true
    mainRole?: true
    skillLevel?: true
    timezone?: true
    bio?: true
    country?: true
    language?: true
    publicProfile?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatar?: true
    gameRank?: true
    mainRole?: true
    skillLevel?: true
    timezone?: true
    bio?: true
    country?: true
    language?: true
    publicProfile?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    displayName: string
    avatar: string | null
    gameRank: string
    mainRole: string
    skillLevel: $Enums.SkillLevel
    timezone: string
    bio: string | null
    country: string | null
    language: string
    publicProfile: boolean
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatar?: boolean
    gameRank?: boolean
    mainRole?: boolean
    skillLevel?: boolean
    timezone?: boolean
    bio?: boolean
    country?: boolean
    language?: boolean
    publicProfile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatar?: boolean
    gameRank?: boolean
    mainRole?: boolean
    skillLevel?: boolean
    timezone?: boolean
    bio?: boolean
    country?: boolean
    language?: boolean
    publicProfile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatar?: boolean
    gameRank?: boolean
    mainRole?: boolean
    skillLevel?: boolean
    timezone?: boolean
    bio?: boolean
    country?: boolean
    language?: boolean
    publicProfile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatar?: boolean
    gameRank?: boolean
    mainRole?: boolean
    skillLevel?: boolean
    timezone?: boolean
    bio?: boolean
    country?: boolean
    language?: boolean
    publicProfile?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "displayName" | "avatar" | "gameRank" | "mainRole" | "skillLevel" | "timezone" | "bio" | "country" | "language" | "publicProfile", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      displayName: string
      avatar: string | null
      gameRank: string
      mainRole: string
      skillLevel: $Enums.SkillLevel
      timezone: string
      bio: string | null
      country: string | null
      language: string
      publicProfile: boolean
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly displayName: FieldRef<"UserProfile", 'String'>
    readonly avatar: FieldRef<"UserProfile", 'String'>
    readonly gameRank: FieldRef<"UserProfile", 'String'>
    readonly mainRole: FieldRef<"UserProfile", 'String'>
    readonly skillLevel: FieldRef<"UserProfile", 'SkillLevel'>
    readonly timezone: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly country: FieldRef<"UserProfile", 'String'>
    readonly language: FieldRef<"UserProfile", 'String'>
    readonly publicProfile: FieldRef<"UserProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    sessionDuration: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    sessionDuration: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    coachingStyle: $Enums.CoachingStyle | null
    coachingIntensity: $Enums.Intensity | null
    notificationsEnabled: boolean | null
    emailNotifications: boolean | null
    pushNotifications: boolean | null
    profileVisibility: $Enums.Visibility | null
    shareAnalytics: boolean | null
    shareProgress: boolean | null
    allowFriendRequests: boolean | null
    showOnlineStatus: boolean | null
    learningStyle: $Enums.LearningStyle | null
    sessionDuration: number | null
    difficulty: $Enums.SkillLevel | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    coachingStyle: $Enums.CoachingStyle | null
    coachingIntensity: $Enums.Intensity | null
    notificationsEnabled: boolean | null
    emailNotifications: boolean | null
    pushNotifications: boolean | null
    profileVisibility: $Enums.Visibility | null
    shareAnalytics: boolean | null
    shareProgress: boolean | null
    allowFriendRequests: boolean | null
    showOnlineStatus: boolean | null
    learningStyle: $Enums.LearningStyle | null
    sessionDuration: number | null
    difficulty: $Enums.SkillLevel | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    coachingStyle: number
    coachingIntensity: number
    notificationsEnabled: number
    emailNotifications: number
    pushNotifications: number
    profileVisibility: number
    shareAnalytics: number
    shareProgress: number
    allowFriendRequests: number
    showOnlineStatus: number
    preferredContentTypes: number
    learningStyle: number
    sessionDuration: number
    difficulty: number
    topics: number
    avoidTopics: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    sessionDuration?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    sessionDuration?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    coachingStyle?: true
    coachingIntensity?: true
    notificationsEnabled?: true
    emailNotifications?: true
    pushNotifications?: true
    profileVisibility?: true
    shareAnalytics?: true
    shareProgress?: true
    allowFriendRequests?: true
    showOnlineStatus?: true
    learningStyle?: true
    sessionDuration?: true
    difficulty?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    coachingStyle?: true
    coachingIntensity?: true
    notificationsEnabled?: true
    emailNotifications?: true
    pushNotifications?: true
    profileVisibility?: true
    shareAnalytics?: true
    shareProgress?: true
    allowFriendRequests?: true
    showOnlineStatus?: true
    learningStyle?: true
    sessionDuration?: true
    difficulty?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    coachingStyle?: true
    coachingIntensity?: true
    notificationsEnabled?: true
    emailNotifications?: true
    pushNotifications?: true
    profileVisibility?: true
    shareAnalytics?: true
    shareProgress?: true
    allowFriendRequests?: true
    showOnlineStatus?: true
    preferredContentTypes?: true
    learningStyle?: true
    sessionDuration?: true
    difficulty?: true
    topics?: true
    avoidTopics?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    coachingStyle: $Enums.CoachingStyle
    coachingIntensity: $Enums.Intensity
    notificationsEnabled: boolean
    emailNotifications: boolean
    pushNotifications: boolean
    profileVisibility: $Enums.Visibility
    shareAnalytics: boolean
    shareProgress: boolean
    allowFriendRequests: boolean
    showOnlineStatus: boolean
    preferredContentTypes: string[]
    learningStyle: $Enums.LearningStyle
    sessionDuration: number
    difficulty: $Enums.SkillLevel
    topics: string[]
    avoidTopics: string[]
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coachingStyle?: boolean
    coachingIntensity?: boolean
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: boolean
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: boolean
    learningStyle?: boolean
    sessionDuration?: boolean
    difficulty?: boolean
    topics?: boolean
    avoidTopics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coachingStyle?: boolean
    coachingIntensity?: boolean
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: boolean
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: boolean
    learningStyle?: boolean
    sessionDuration?: boolean
    difficulty?: boolean
    topics?: boolean
    avoidTopics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coachingStyle?: boolean
    coachingIntensity?: boolean
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: boolean
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: boolean
    learningStyle?: boolean
    sessionDuration?: boolean
    difficulty?: boolean
    topics?: boolean
    avoidTopics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    coachingStyle?: boolean
    coachingIntensity?: boolean
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: boolean
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: boolean
    learningStyle?: boolean
    sessionDuration?: boolean
    difficulty?: boolean
    topics?: boolean
    avoidTopics?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "coachingStyle" | "coachingIntensity" | "notificationsEnabled" | "emailNotifications" | "pushNotifications" | "profileVisibility" | "shareAnalytics" | "shareProgress" | "allowFriendRequests" | "showOnlineStatus" | "preferredContentTypes" | "learningStyle" | "sessionDuration" | "difficulty" | "topics" | "avoidTopics", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      coachingStyle: $Enums.CoachingStyle
      coachingIntensity: $Enums.Intensity
      notificationsEnabled: boolean
      emailNotifications: boolean
      pushNotifications: boolean
      profileVisibility: $Enums.Visibility
      shareAnalytics: boolean
      shareProgress: boolean
      allowFriendRequests: boolean
      showOnlineStatus: boolean
      preferredContentTypes: string[]
      learningStyle: $Enums.LearningStyle
      sessionDuration: number
      difficulty: $Enums.SkillLevel
      topics: string[]
      avoidTopics: string[]
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly coachingStyle: FieldRef<"UserPreferences", 'CoachingStyle'>
    readonly coachingIntensity: FieldRef<"UserPreferences", 'Intensity'>
    readonly notificationsEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly emailNotifications: FieldRef<"UserPreferences", 'Boolean'>
    readonly pushNotifications: FieldRef<"UserPreferences", 'Boolean'>
    readonly profileVisibility: FieldRef<"UserPreferences", 'Visibility'>
    readonly shareAnalytics: FieldRef<"UserPreferences", 'Boolean'>
    readonly shareProgress: FieldRef<"UserPreferences", 'Boolean'>
    readonly allowFriendRequests: FieldRef<"UserPreferences", 'Boolean'>
    readonly showOnlineStatus: FieldRef<"UserPreferences", 'Boolean'>
    readonly preferredContentTypes: FieldRef<"UserPreferences", 'String[]'>
    readonly learningStyle: FieldRef<"UserPreferences", 'LearningStyle'>
    readonly sessionDuration: FieldRef<"UserPreferences", 'Int'>
    readonly difficulty: FieldRef<"UserPreferences", 'SkillLevel'>
    readonly topics: FieldRef<"UserPreferences", 'String[]'>
    readonly avoidTopics: FieldRef<"UserPreferences", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model GameplaySession
   */

  export type AggregateGameplaySession = {
    _count: GameplaySessionCountAggregateOutputType | null
    _avg: GameplaySessionAvgAggregateOutputType | null
    _sum: GameplaySessionSumAggregateOutputType | null
    _min: GameplaySessionMinAggregateOutputType | null
    _max: GameplaySessionMaxAggregateOutputType | null
  }

  export type GameplaySessionAvgAggregateOutputType = {
    duration: number | null
    gameLength: number | null
  }

  export type GameplaySessionSumAggregateOutputType = {
    duration: number | null
    gameLength: number | null
  }

  export type GameplaySessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameMode: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    status: $Enums.SessionStatus | null
    gameVersion: string | null
    server: string | null
    region: string | null
    mapName: string | null
    gameLength: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameplaySessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameMode: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    status: $Enums.SessionStatus | null
    gameVersion: string | null
    server: string | null
    region: string | null
    mapName: string | null
    gameLength: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameplaySessionCountAggregateOutputType = {
    id: number
    userId: number
    gameMode: number
    startTime: number
    endTime: number
    duration: number
    status: number
    gameVersion: number
    server: number
    region: number
    teamComposition: number
    enemyComposition: number
    mapName: number
    gameLength: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameplaySessionAvgAggregateInputType = {
    duration?: true
    gameLength?: true
  }

  export type GameplaySessionSumAggregateInputType = {
    duration?: true
    gameLength?: true
  }

  export type GameplaySessionMinAggregateInputType = {
    id?: true
    userId?: true
    gameMode?: true
    startTime?: true
    endTime?: true
    duration?: true
    status?: true
    gameVersion?: true
    server?: true
    region?: true
    mapName?: true
    gameLength?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameplaySessionMaxAggregateInputType = {
    id?: true
    userId?: true
    gameMode?: true
    startTime?: true
    endTime?: true
    duration?: true
    status?: true
    gameVersion?: true
    server?: true
    region?: true
    mapName?: true
    gameLength?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameplaySessionCountAggregateInputType = {
    id?: true
    userId?: true
    gameMode?: true
    startTime?: true
    endTime?: true
    duration?: true
    status?: true
    gameVersion?: true
    server?: true
    region?: true
    teamComposition?: true
    enemyComposition?: true
    mapName?: true
    gameLength?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameplaySessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameplaySession to aggregate.
     */
    where?: GameplaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameplaySessions to fetch.
     */
    orderBy?: GameplaySessionOrderByWithRelationInput | GameplaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameplaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameplaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameplaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameplaySessions
    **/
    _count?: true | GameplaySessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameplaySessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameplaySessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameplaySessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameplaySessionMaxAggregateInputType
  }

  export type GetGameplaySessionAggregateType<T extends GameplaySessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameplaySession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameplaySession[P]>
      : GetScalarType<T[P], AggregateGameplaySession[P]>
  }




  export type GameplaySessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameplaySessionWhereInput
    orderBy?: GameplaySessionOrderByWithAggregationInput | GameplaySessionOrderByWithAggregationInput[]
    by: GameplaySessionScalarFieldEnum[] | GameplaySessionScalarFieldEnum
    having?: GameplaySessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameplaySessionCountAggregateInputType | true
    _avg?: GameplaySessionAvgAggregateInputType
    _sum?: GameplaySessionSumAggregateInputType
    _min?: GameplaySessionMinAggregateInputType
    _max?: GameplaySessionMaxAggregateInputType
  }

  export type GameplaySessionGroupByOutputType = {
    id: string
    userId: string
    gameMode: string
    startTime: Date
    endTime: Date | null
    duration: number | null
    status: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition: string[]
    enemyComposition: string[]
    mapName: string
    gameLength: number | null
    createdAt: Date
    updatedAt: Date
    _count: GameplaySessionCountAggregateOutputType | null
    _avg: GameplaySessionAvgAggregateOutputType | null
    _sum: GameplaySessionSumAggregateOutputType | null
    _min: GameplaySessionMinAggregateOutputType | null
    _max: GameplaySessionMaxAggregateOutputType | null
  }

  type GetGameplaySessionGroupByPayload<T extends GameplaySessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameplaySessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameplaySessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameplaySessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameplaySessionGroupByOutputType[P]>
        }
      >
    >


  export type GameplaySessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameMode?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    gameVersion?: boolean
    server?: boolean
    region?: boolean
    teamComposition?: boolean
    enemyComposition?: boolean
    mapName?: boolean
    gameLength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    performanceMetrics?: boolean | GameplaySession$performanceMetricsArgs<ExtArgs>
    analytics?: boolean | GameplaySession$analyticsArgs<ExtArgs>
    coachingHistory?: boolean | GameplaySession$coachingHistoryArgs<ExtArgs>
    learningProgress?: boolean | GameplaySession$learningProgressArgs<ExtArgs>
    _count?: boolean | GameplaySessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameplaySession"]>

  export type GameplaySessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameMode?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    gameVersion?: boolean
    server?: boolean
    region?: boolean
    teamComposition?: boolean
    enemyComposition?: boolean
    mapName?: boolean
    gameLength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameplaySession"]>

  export type GameplaySessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameMode?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    gameVersion?: boolean
    server?: boolean
    region?: boolean
    teamComposition?: boolean
    enemyComposition?: boolean
    mapName?: boolean
    gameLength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameplaySession"]>

  export type GameplaySessionSelectScalar = {
    id?: boolean
    userId?: boolean
    gameMode?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    gameVersion?: boolean
    server?: boolean
    region?: boolean
    teamComposition?: boolean
    enemyComposition?: boolean
    mapName?: boolean
    gameLength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameplaySessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameMode" | "startTime" | "endTime" | "duration" | "status" | "gameVersion" | "server" | "region" | "teamComposition" | "enemyComposition" | "mapName" | "gameLength" | "createdAt" | "updatedAt", ExtArgs["result"]["gameplaySession"]>
  export type GameplaySessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    performanceMetrics?: boolean | GameplaySession$performanceMetricsArgs<ExtArgs>
    analytics?: boolean | GameplaySession$analyticsArgs<ExtArgs>
    coachingHistory?: boolean | GameplaySession$coachingHistoryArgs<ExtArgs>
    learningProgress?: boolean | GameplaySession$learningProgressArgs<ExtArgs>
    _count?: boolean | GameplaySessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameplaySessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameplaySessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameplaySessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameplaySession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      performanceMetrics: Prisma.$PerformanceMetricsPayload<ExtArgs> | null
      analytics: Prisma.$AnalyticsPayload<ExtArgs>[]
      coachingHistory: Prisma.$CoachingHistoryPayload<ExtArgs>[]
      learningProgress: Prisma.$LearningProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gameMode: string
      startTime: Date
      endTime: Date | null
      duration: number | null
      status: $Enums.SessionStatus
      gameVersion: string
      server: string
      region: string
      teamComposition: string[]
      enemyComposition: string[]
      mapName: string
      gameLength: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameplaySession"]>
    composites: {}
  }

  type GameplaySessionGetPayload<S extends boolean | null | undefined | GameplaySessionDefaultArgs> = $Result.GetResult<Prisma.$GameplaySessionPayload, S>

  type GameplaySessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameplaySessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameplaySessionCountAggregateInputType | true
    }

  export interface GameplaySessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameplaySession'], meta: { name: 'GameplaySession' } }
    /**
     * Find zero or one GameplaySession that matches the filter.
     * @param {GameplaySessionFindUniqueArgs} args - Arguments to find a GameplaySession
     * @example
     * // Get one GameplaySession
     * const gameplaySession = await prisma.gameplaySession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameplaySessionFindUniqueArgs>(args: SelectSubset<T, GameplaySessionFindUniqueArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameplaySession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameplaySessionFindUniqueOrThrowArgs} args - Arguments to find a GameplaySession
     * @example
     * // Get one GameplaySession
     * const gameplaySession = await prisma.gameplaySession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameplaySessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameplaySessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameplaySession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionFindFirstArgs} args - Arguments to find a GameplaySession
     * @example
     * // Get one GameplaySession
     * const gameplaySession = await prisma.gameplaySession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameplaySessionFindFirstArgs>(args?: SelectSubset<T, GameplaySessionFindFirstArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameplaySession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionFindFirstOrThrowArgs} args - Arguments to find a GameplaySession
     * @example
     * // Get one GameplaySession
     * const gameplaySession = await prisma.gameplaySession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameplaySessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameplaySessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameplaySessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameplaySessions
     * const gameplaySessions = await prisma.gameplaySession.findMany()
     * 
     * // Get first 10 GameplaySessions
     * const gameplaySessions = await prisma.gameplaySession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameplaySessionWithIdOnly = await prisma.gameplaySession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameplaySessionFindManyArgs>(args?: SelectSubset<T, GameplaySessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameplaySession.
     * @param {GameplaySessionCreateArgs} args - Arguments to create a GameplaySession.
     * @example
     * // Create one GameplaySession
     * const GameplaySession = await prisma.gameplaySession.create({
     *   data: {
     *     // ... data to create a GameplaySession
     *   }
     * })
     * 
     */
    create<T extends GameplaySessionCreateArgs>(args: SelectSubset<T, GameplaySessionCreateArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameplaySessions.
     * @param {GameplaySessionCreateManyArgs} args - Arguments to create many GameplaySessions.
     * @example
     * // Create many GameplaySessions
     * const gameplaySession = await prisma.gameplaySession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameplaySessionCreateManyArgs>(args?: SelectSubset<T, GameplaySessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameplaySessions and returns the data saved in the database.
     * @param {GameplaySessionCreateManyAndReturnArgs} args - Arguments to create many GameplaySessions.
     * @example
     * // Create many GameplaySessions
     * const gameplaySession = await prisma.gameplaySession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameplaySessions and only return the `id`
     * const gameplaySessionWithIdOnly = await prisma.gameplaySession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameplaySessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameplaySessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameplaySession.
     * @param {GameplaySessionDeleteArgs} args - Arguments to delete one GameplaySession.
     * @example
     * // Delete one GameplaySession
     * const GameplaySession = await prisma.gameplaySession.delete({
     *   where: {
     *     // ... filter to delete one GameplaySession
     *   }
     * })
     * 
     */
    delete<T extends GameplaySessionDeleteArgs>(args: SelectSubset<T, GameplaySessionDeleteArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameplaySession.
     * @param {GameplaySessionUpdateArgs} args - Arguments to update one GameplaySession.
     * @example
     * // Update one GameplaySession
     * const gameplaySession = await prisma.gameplaySession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameplaySessionUpdateArgs>(args: SelectSubset<T, GameplaySessionUpdateArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameplaySessions.
     * @param {GameplaySessionDeleteManyArgs} args - Arguments to filter GameplaySessions to delete.
     * @example
     * // Delete a few GameplaySessions
     * const { count } = await prisma.gameplaySession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameplaySessionDeleteManyArgs>(args?: SelectSubset<T, GameplaySessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameplaySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameplaySessions
     * const gameplaySession = await prisma.gameplaySession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameplaySessionUpdateManyArgs>(args: SelectSubset<T, GameplaySessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameplaySessions and returns the data updated in the database.
     * @param {GameplaySessionUpdateManyAndReturnArgs} args - Arguments to update many GameplaySessions.
     * @example
     * // Update many GameplaySessions
     * const gameplaySession = await prisma.gameplaySession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameplaySessions and only return the `id`
     * const gameplaySessionWithIdOnly = await prisma.gameplaySession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameplaySessionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameplaySessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameplaySession.
     * @param {GameplaySessionUpsertArgs} args - Arguments to update or create a GameplaySession.
     * @example
     * // Update or create a GameplaySession
     * const gameplaySession = await prisma.gameplaySession.upsert({
     *   create: {
     *     // ... data to create a GameplaySession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameplaySession we want to update
     *   }
     * })
     */
    upsert<T extends GameplaySessionUpsertArgs>(args: SelectSubset<T, GameplaySessionUpsertArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameplaySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionCountArgs} args - Arguments to filter GameplaySessions to count.
     * @example
     * // Count the number of GameplaySessions
     * const count = await prisma.gameplaySession.count({
     *   where: {
     *     // ... the filter for the GameplaySessions we want to count
     *   }
     * })
    **/
    count<T extends GameplaySessionCountArgs>(
      args?: Subset<T, GameplaySessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameplaySessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameplaySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameplaySessionAggregateArgs>(args: Subset<T, GameplaySessionAggregateArgs>): Prisma.PrismaPromise<GetGameplaySessionAggregateType<T>>

    /**
     * Group by GameplaySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameplaySessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameplaySessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameplaySessionGroupByArgs['orderBy'] }
        : { orderBy?: GameplaySessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameplaySessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameplaySessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameplaySession model
   */
  readonly fields: GameplaySessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameplaySession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameplaySessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performanceMetrics<T extends GameplaySession$performanceMetricsArgs<ExtArgs> = {}>(args?: Subset<T, GameplaySession$performanceMetricsArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    analytics<T extends GameplaySession$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, GameplaySession$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachingHistory<T extends GameplaySession$coachingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, GameplaySession$coachingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningProgress<T extends GameplaySession$learningProgressArgs<ExtArgs> = {}>(args?: Subset<T, GameplaySession$learningProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameplaySession model
   */
  interface GameplaySessionFieldRefs {
    readonly id: FieldRef<"GameplaySession", 'String'>
    readonly userId: FieldRef<"GameplaySession", 'String'>
    readonly gameMode: FieldRef<"GameplaySession", 'String'>
    readonly startTime: FieldRef<"GameplaySession", 'DateTime'>
    readonly endTime: FieldRef<"GameplaySession", 'DateTime'>
    readonly duration: FieldRef<"GameplaySession", 'Int'>
    readonly status: FieldRef<"GameplaySession", 'SessionStatus'>
    readonly gameVersion: FieldRef<"GameplaySession", 'String'>
    readonly server: FieldRef<"GameplaySession", 'String'>
    readonly region: FieldRef<"GameplaySession", 'String'>
    readonly teamComposition: FieldRef<"GameplaySession", 'String[]'>
    readonly enemyComposition: FieldRef<"GameplaySession", 'String[]'>
    readonly mapName: FieldRef<"GameplaySession", 'String'>
    readonly gameLength: FieldRef<"GameplaySession", 'Int'>
    readonly createdAt: FieldRef<"GameplaySession", 'DateTime'>
    readonly updatedAt: FieldRef<"GameplaySession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameplaySession findUnique
   */
  export type GameplaySessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * Filter, which GameplaySession to fetch.
     */
    where: GameplaySessionWhereUniqueInput
  }

  /**
   * GameplaySession findUniqueOrThrow
   */
  export type GameplaySessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * Filter, which GameplaySession to fetch.
     */
    where: GameplaySessionWhereUniqueInput
  }

  /**
   * GameplaySession findFirst
   */
  export type GameplaySessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * Filter, which GameplaySession to fetch.
     */
    where?: GameplaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameplaySessions to fetch.
     */
    orderBy?: GameplaySessionOrderByWithRelationInput | GameplaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameplaySessions.
     */
    cursor?: GameplaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameplaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameplaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameplaySessions.
     */
    distinct?: GameplaySessionScalarFieldEnum | GameplaySessionScalarFieldEnum[]
  }

  /**
   * GameplaySession findFirstOrThrow
   */
  export type GameplaySessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * Filter, which GameplaySession to fetch.
     */
    where?: GameplaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameplaySessions to fetch.
     */
    orderBy?: GameplaySessionOrderByWithRelationInput | GameplaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameplaySessions.
     */
    cursor?: GameplaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameplaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameplaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameplaySessions.
     */
    distinct?: GameplaySessionScalarFieldEnum | GameplaySessionScalarFieldEnum[]
  }

  /**
   * GameplaySession findMany
   */
  export type GameplaySessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * Filter, which GameplaySessions to fetch.
     */
    where?: GameplaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameplaySessions to fetch.
     */
    orderBy?: GameplaySessionOrderByWithRelationInput | GameplaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameplaySessions.
     */
    cursor?: GameplaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameplaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameplaySessions.
     */
    skip?: number
    distinct?: GameplaySessionScalarFieldEnum | GameplaySessionScalarFieldEnum[]
  }

  /**
   * GameplaySession create
   */
  export type GameplaySessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameplaySession.
     */
    data: XOR<GameplaySessionCreateInput, GameplaySessionUncheckedCreateInput>
  }

  /**
   * GameplaySession createMany
   */
  export type GameplaySessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameplaySessions.
     */
    data: GameplaySessionCreateManyInput | GameplaySessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameplaySession createManyAndReturn
   */
  export type GameplaySessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * The data used to create many GameplaySessions.
     */
    data: GameplaySessionCreateManyInput | GameplaySessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameplaySession update
   */
  export type GameplaySessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameplaySession.
     */
    data: XOR<GameplaySessionUpdateInput, GameplaySessionUncheckedUpdateInput>
    /**
     * Choose, which GameplaySession to update.
     */
    where: GameplaySessionWhereUniqueInput
  }

  /**
   * GameplaySession updateMany
   */
  export type GameplaySessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameplaySessions.
     */
    data: XOR<GameplaySessionUpdateManyMutationInput, GameplaySessionUncheckedUpdateManyInput>
    /**
     * Filter which GameplaySessions to update
     */
    where?: GameplaySessionWhereInput
    /**
     * Limit how many GameplaySessions to update.
     */
    limit?: number
  }

  /**
   * GameplaySession updateManyAndReturn
   */
  export type GameplaySessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * The data used to update GameplaySessions.
     */
    data: XOR<GameplaySessionUpdateManyMutationInput, GameplaySessionUncheckedUpdateManyInput>
    /**
     * Filter which GameplaySessions to update
     */
    where?: GameplaySessionWhereInput
    /**
     * Limit how many GameplaySessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameplaySession upsert
   */
  export type GameplaySessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameplaySession to update in case it exists.
     */
    where: GameplaySessionWhereUniqueInput
    /**
     * In case the GameplaySession found by the `where` argument doesn't exist, create a new GameplaySession with this data.
     */
    create: XOR<GameplaySessionCreateInput, GameplaySessionUncheckedCreateInput>
    /**
     * In case the GameplaySession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameplaySessionUpdateInput, GameplaySessionUncheckedUpdateInput>
  }

  /**
   * GameplaySession delete
   */
  export type GameplaySessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    /**
     * Filter which GameplaySession to delete.
     */
    where: GameplaySessionWhereUniqueInput
  }

  /**
   * GameplaySession deleteMany
   */
  export type GameplaySessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameplaySessions to delete
     */
    where?: GameplaySessionWhereInput
    /**
     * Limit how many GameplaySessions to delete.
     */
    limit?: number
  }

  /**
   * GameplaySession.performanceMetrics
   */
  export type GameplaySession$performanceMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    where?: PerformanceMetricsWhereInput
  }

  /**
   * GameplaySession.analytics
   */
  export type GameplaySession$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    cursor?: AnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * GameplaySession.coachingHistory
   */
  export type GameplaySession$coachingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    where?: CoachingHistoryWhereInput
    orderBy?: CoachingHistoryOrderByWithRelationInput | CoachingHistoryOrderByWithRelationInput[]
    cursor?: CoachingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachingHistoryScalarFieldEnum | CoachingHistoryScalarFieldEnum[]
  }

  /**
   * GameplaySession.learningProgress
   */
  export type GameplaySession$learningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    where?: LearningProgressWhereInput
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    cursor?: LearningProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * GameplaySession without action
   */
  export type GameplaySessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
  }


  /**
   * Model PerformanceMetrics
   */

  export type AggregatePerformanceMetrics = {
    _count: PerformanceMetricsCountAggregateOutputType | null
    _avg: PerformanceMetricsAvgAggregateOutputType | null
    _sum: PerformanceMetricsSumAggregateOutputType | null
    _min: PerformanceMetricsMinAggregateOutputType | null
    _max: PerformanceMetricsMaxAggregateOutputType | null
  }

  export type PerformanceMetricsAvgAggregateOutputType = {
    kills: number | null
    deaths: number | null
    assists: number | null
    kdaRatio: number | null
    killParticipation: number | null
    goldEarned: number | null
    goldSpent: number | null
    goldPerMinute: number | null
    economyEfficiency: number | null
    itemBuildScore: number | null
    farmingScore: number | null
    objectivesParticipated: number | null
    objectivesSecured: number | null
    objectivesContested: number | null
    participationRate: number | null
    successRate: number | null
    impactScore: number | null
    accuracy: number | null
    reactionTime: number | null
    decisionMaking: number | null
    positioning: number | null
    timing: number | null
    adaptation: number | null
    overallScore: number | null
    improvement: number | null
  }

  export type PerformanceMetricsSumAggregateOutputType = {
    kills: number | null
    deaths: number | null
    assists: number | null
    kdaRatio: number | null
    killParticipation: number | null
    goldEarned: number | null
    goldSpent: number | null
    goldPerMinute: number | null
    economyEfficiency: number | null
    itemBuildScore: number | null
    farmingScore: number | null
    objectivesParticipated: number | null
    objectivesSecured: number | null
    objectivesContested: number | null
    participationRate: number | null
    successRate: number | null
    impactScore: number | null
    accuracy: number | null
    reactionTime: number | null
    decisionMaking: number | null
    positioning: number | null
    timing: number | null
    adaptation: number | null
    overallScore: number | null
    improvement: number | null
  }

  export type PerformanceMetricsMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    kills: number | null
    deaths: number | null
    assists: number | null
    kdaRatio: number | null
    killParticipation: number | null
    firstBlood: boolean | null
    goldEarned: number | null
    goldSpent: number | null
    goldPerMinute: number | null
    economyEfficiency: number | null
    itemBuildScore: number | null
    farmingScore: number | null
    objectivesParticipated: number | null
    objectivesSecured: number | null
    objectivesContested: number | null
    participationRate: number | null
    successRate: number | null
    impactScore: number | null
    accuracy: number | null
    reactionTime: number | null
    decisionMaking: number | null
    positioning: number | null
    timing: number | null
    adaptation: number | null
    overallScore: number | null
    rank: string | null
    improvement: number | null
  }

  export type PerformanceMetricsMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    kills: number | null
    deaths: number | null
    assists: number | null
    kdaRatio: number | null
    killParticipation: number | null
    firstBlood: boolean | null
    goldEarned: number | null
    goldSpent: number | null
    goldPerMinute: number | null
    economyEfficiency: number | null
    itemBuildScore: number | null
    farmingScore: number | null
    objectivesParticipated: number | null
    objectivesSecured: number | null
    objectivesContested: number | null
    participationRate: number | null
    successRate: number | null
    impactScore: number | null
    accuracy: number | null
    reactionTime: number | null
    decisionMaking: number | null
    positioning: number | null
    timing: number | null
    adaptation: number | null
    overallScore: number | null
    rank: string | null
    improvement: number | null
  }

  export type PerformanceMetricsCountAggregateOutputType = {
    id: number
    sessionId: number
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood: number
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: number
    improvement: number
    _all: number
  }


  export type PerformanceMetricsAvgAggregateInputType = {
    kills?: true
    deaths?: true
    assists?: true
    kdaRatio?: true
    killParticipation?: true
    goldEarned?: true
    goldSpent?: true
    goldPerMinute?: true
    economyEfficiency?: true
    itemBuildScore?: true
    farmingScore?: true
    objectivesParticipated?: true
    objectivesSecured?: true
    objectivesContested?: true
    participationRate?: true
    successRate?: true
    impactScore?: true
    accuracy?: true
    reactionTime?: true
    decisionMaking?: true
    positioning?: true
    timing?: true
    adaptation?: true
    overallScore?: true
    improvement?: true
  }

  export type PerformanceMetricsSumAggregateInputType = {
    kills?: true
    deaths?: true
    assists?: true
    kdaRatio?: true
    killParticipation?: true
    goldEarned?: true
    goldSpent?: true
    goldPerMinute?: true
    economyEfficiency?: true
    itemBuildScore?: true
    farmingScore?: true
    objectivesParticipated?: true
    objectivesSecured?: true
    objectivesContested?: true
    participationRate?: true
    successRate?: true
    impactScore?: true
    accuracy?: true
    reactionTime?: true
    decisionMaking?: true
    positioning?: true
    timing?: true
    adaptation?: true
    overallScore?: true
    improvement?: true
  }

  export type PerformanceMetricsMinAggregateInputType = {
    id?: true
    sessionId?: true
    kills?: true
    deaths?: true
    assists?: true
    kdaRatio?: true
    killParticipation?: true
    firstBlood?: true
    goldEarned?: true
    goldSpent?: true
    goldPerMinute?: true
    economyEfficiency?: true
    itemBuildScore?: true
    farmingScore?: true
    objectivesParticipated?: true
    objectivesSecured?: true
    objectivesContested?: true
    participationRate?: true
    successRate?: true
    impactScore?: true
    accuracy?: true
    reactionTime?: true
    decisionMaking?: true
    positioning?: true
    timing?: true
    adaptation?: true
    overallScore?: true
    rank?: true
    improvement?: true
  }

  export type PerformanceMetricsMaxAggregateInputType = {
    id?: true
    sessionId?: true
    kills?: true
    deaths?: true
    assists?: true
    kdaRatio?: true
    killParticipation?: true
    firstBlood?: true
    goldEarned?: true
    goldSpent?: true
    goldPerMinute?: true
    economyEfficiency?: true
    itemBuildScore?: true
    farmingScore?: true
    objectivesParticipated?: true
    objectivesSecured?: true
    objectivesContested?: true
    participationRate?: true
    successRate?: true
    impactScore?: true
    accuracy?: true
    reactionTime?: true
    decisionMaking?: true
    positioning?: true
    timing?: true
    adaptation?: true
    overallScore?: true
    rank?: true
    improvement?: true
  }

  export type PerformanceMetricsCountAggregateInputType = {
    id?: true
    sessionId?: true
    kills?: true
    deaths?: true
    assists?: true
    kdaRatio?: true
    killParticipation?: true
    firstBlood?: true
    goldEarned?: true
    goldSpent?: true
    goldPerMinute?: true
    economyEfficiency?: true
    itemBuildScore?: true
    farmingScore?: true
    objectivesParticipated?: true
    objectivesSecured?: true
    objectivesContested?: true
    participationRate?: true
    successRate?: true
    impactScore?: true
    accuracy?: true
    reactionTime?: true
    decisionMaking?: true
    positioning?: true
    timing?: true
    adaptation?: true
    overallScore?: true
    rank?: true
    improvement?: true
    _all?: true
  }

  export type PerformanceMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceMetrics to aggregate.
     */
    where?: PerformanceMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceMetrics to fetch.
     */
    orderBy?: PerformanceMetricsOrderByWithRelationInput | PerformanceMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformanceMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerformanceMetrics
    **/
    _count?: true | PerformanceMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformanceMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformanceMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformanceMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformanceMetricsMaxAggregateInputType
  }

  export type GetPerformanceMetricsAggregateType<T extends PerformanceMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregatePerformanceMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformanceMetrics[P]>
      : GetScalarType<T[P], AggregatePerformanceMetrics[P]>
  }




  export type PerformanceMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceMetricsWhereInput
    orderBy?: PerformanceMetricsOrderByWithAggregationInput | PerformanceMetricsOrderByWithAggregationInput[]
    by: PerformanceMetricsScalarFieldEnum[] | PerformanceMetricsScalarFieldEnum
    having?: PerformanceMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformanceMetricsCountAggregateInputType | true
    _avg?: PerformanceMetricsAvgAggregateInputType
    _sum?: PerformanceMetricsSumAggregateInputType
    _min?: PerformanceMetricsMinAggregateInputType
    _max?: PerformanceMetricsMaxAggregateInputType
  }

  export type PerformanceMetricsGroupByOutputType = {
    id: string
    sessionId: string
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood: boolean
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: string
    improvement: number
    _count: PerformanceMetricsCountAggregateOutputType | null
    _avg: PerformanceMetricsAvgAggregateOutputType | null
    _sum: PerformanceMetricsSumAggregateOutputType | null
    _min: PerformanceMetricsMinAggregateOutputType | null
    _max: PerformanceMetricsMaxAggregateOutputType | null
  }

  type GetPerformanceMetricsGroupByPayload<T extends PerformanceMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformanceMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformanceMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformanceMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], PerformanceMetricsGroupByOutputType[P]>
        }
      >
    >


  export type PerformanceMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    kdaRatio?: boolean
    killParticipation?: boolean
    firstBlood?: boolean
    goldEarned?: boolean
    goldSpent?: boolean
    goldPerMinute?: boolean
    economyEfficiency?: boolean
    itemBuildScore?: boolean
    farmingScore?: boolean
    objectivesParticipated?: boolean
    objectivesSecured?: boolean
    objectivesContested?: boolean
    participationRate?: boolean
    successRate?: boolean
    impactScore?: boolean
    accuracy?: boolean
    reactionTime?: boolean
    decisionMaking?: boolean
    positioning?: boolean
    timing?: boolean
    adaptation?: boolean
    overallScore?: boolean
    rank?: boolean
    improvement?: boolean
    session?: boolean | GameplaySessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceMetrics"]>

  export type PerformanceMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    kdaRatio?: boolean
    killParticipation?: boolean
    firstBlood?: boolean
    goldEarned?: boolean
    goldSpent?: boolean
    goldPerMinute?: boolean
    economyEfficiency?: boolean
    itemBuildScore?: boolean
    farmingScore?: boolean
    objectivesParticipated?: boolean
    objectivesSecured?: boolean
    objectivesContested?: boolean
    participationRate?: boolean
    successRate?: boolean
    impactScore?: boolean
    accuracy?: boolean
    reactionTime?: boolean
    decisionMaking?: boolean
    positioning?: boolean
    timing?: boolean
    adaptation?: boolean
    overallScore?: boolean
    rank?: boolean
    improvement?: boolean
    session?: boolean | GameplaySessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceMetrics"]>

  export type PerformanceMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    kdaRatio?: boolean
    killParticipation?: boolean
    firstBlood?: boolean
    goldEarned?: boolean
    goldSpent?: boolean
    goldPerMinute?: boolean
    economyEfficiency?: boolean
    itemBuildScore?: boolean
    farmingScore?: boolean
    objectivesParticipated?: boolean
    objectivesSecured?: boolean
    objectivesContested?: boolean
    participationRate?: boolean
    successRate?: boolean
    impactScore?: boolean
    accuracy?: boolean
    reactionTime?: boolean
    decisionMaking?: boolean
    positioning?: boolean
    timing?: boolean
    adaptation?: boolean
    overallScore?: boolean
    rank?: boolean
    improvement?: boolean
    session?: boolean | GameplaySessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceMetrics"]>

  export type PerformanceMetricsSelectScalar = {
    id?: boolean
    sessionId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    kdaRatio?: boolean
    killParticipation?: boolean
    firstBlood?: boolean
    goldEarned?: boolean
    goldSpent?: boolean
    goldPerMinute?: boolean
    economyEfficiency?: boolean
    itemBuildScore?: boolean
    farmingScore?: boolean
    objectivesParticipated?: boolean
    objectivesSecured?: boolean
    objectivesContested?: boolean
    participationRate?: boolean
    successRate?: boolean
    impactScore?: boolean
    accuracy?: boolean
    reactionTime?: boolean
    decisionMaking?: boolean
    positioning?: boolean
    timing?: boolean
    adaptation?: boolean
    overallScore?: boolean
    rank?: boolean
    improvement?: boolean
  }

  export type PerformanceMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "kills" | "deaths" | "assists" | "kdaRatio" | "killParticipation" | "firstBlood" | "goldEarned" | "goldSpent" | "goldPerMinute" | "economyEfficiency" | "itemBuildScore" | "farmingScore" | "objectivesParticipated" | "objectivesSecured" | "objectivesContested" | "participationRate" | "successRate" | "impactScore" | "accuracy" | "reactionTime" | "decisionMaking" | "positioning" | "timing" | "adaptation" | "overallScore" | "rank" | "improvement", ExtArgs["result"]["performanceMetrics"]>
  export type PerformanceMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameplaySessionDefaultArgs<ExtArgs>
  }
  export type PerformanceMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameplaySessionDefaultArgs<ExtArgs>
  }
  export type PerformanceMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameplaySessionDefaultArgs<ExtArgs>
  }

  export type $PerformanceMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerformanceMetrics"
    objects: {
      session: Prisma.$GameplaySessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      kills: number
      deaths: number
      assists: number
      kdaRatio: number
      killParticipation: number
      firstBlood: boolean
      goldEarned: number
      goldSpent: number
      goldPerMinute: number
      economyEfficiency: number
      itemBuildScore: number
      farmingScore: number
      objectivesParticipated: number
      objectivesSecured: number
      objectivesContested: number
      participationRate: number
      successRate: number
      impactScore: number
      accuracy: number
      reactionTime: number
      decisionMaking: number
      positioning: number
      timing: number
      adaptation: number
      overallScore: number
      rank: string
      improvement: number
    }, ExtArgs["result"]["performanceMetrics"]>
    composites: {}
  }

  type PerformanceMetricsGetPayload<S extends boolean | null | undefined | PerformanceMetricsDefaultArgs> = $Result.GetResult<Prisma.$PerformanceMetricsPayload, S>

  type PerformanceMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerformanceMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerformanceMetricsCountAggregateInputType | true
    }

  export interface PerformanceMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerformanceMetrics'], meta: { name: 'PerformanceMetrics' } }
    /**
     * Find zero or one PerformanceMetrics that matches the filter.
     * @param {PerformanceMetricsFindUniqueArgs} args - Arguments to find a PerformanceMetrics
     * @example
     * // Get one PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceMetricsFindUniqueArgs>(args: SelectSubset<T, PerformanceMetricsFindUniqueArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PerformanceMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformanceMetricsFindUniqueOrThrowArgs} args - Arguments to find a PerformanceMetrics
     * @example
     * // Get one PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, PerformanceMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerformanceMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsFindFirstArgs} args - Arguments to find a PerformanceMetrics
     * @example
     * // Get one PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceMetricsFindFirstArgs>(args?: SelectSubset<T, PerformanceMetricsFindFirstArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerformanceMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsFindFirstOrThrowArgs} args - Arguments to find a PerformanceMetrics
     * @example
     * // Get one PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, PerformanceMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PerformanceMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.findMany()
     * 
     * // Get first 10 PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const performanceMetricsWithIdOnly = await prisma.performanceMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerformanceMetricsFindManyArgs>(args?: SelectSubset<T, PerformanceMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PerformanceMetrics.
     * @param {PerformanceMetricsCreateArgs} args - Arguments to create a PerformanceMetrics.
     * @example
     * // Create one PerformanceMetrics
     * const PerformanceMetrics = await prisma.performanceMetrics.create({
     *   data: {
     *     // ... data to create a PerformanceMetrics
     *   }
     * })
     * 
     */
    create<T extends PerformanceMetricsCreateArgs>(args: SelectSubset<T, PerformanceMetricsCreateArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PerformanceMetrics.
     * @param {PerformanceMetricsCreateManyArgs} args - Arguments to create many PerformanceMetrics.
     * @example
     * // Create many PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerformanceMetricsCreateManyArgs>(args?: SelectSubset<T, PerformanceMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerformanceMetrics and returns the data saved in the database.
     * @param {PerformanceMetricsCreateManyAndReturnArgs} args - Arguments to create many PerformanceMetrics.
     * @example
     * // Create many PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerformanceMetrics and only return the `id`
     * const performanceMetricsWithIdOnly = await prisma.performanceMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerformanceMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, PerformanceMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PerformanceMetrics.
     * @param {PerformanceMetricsDeleteArgs} args - Arguments to delete one PerformanceMetrics.
     * @example
     * // Delete one PerformanceMetrics
     * const PerformanceMetrics = await prisma.performanceMetrics.delete({
     *   where: {
     *     // ... filter to delete one PerformanceMetrics
     *   }
     * })
     * 
     */
    delete<T extends PerformanceMetricsDeleteArgs>(args: SelectSubset<T, PerformanceMetricsDeleteArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PerformanceMetrics.
     * @param {PerformanceMetricsUpdateArgs} args - Arguments to update one PerformanceMetrics.
     * @example
     * // Update one PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerformanceMetricsUpdateArgs>(args: SelectSubset<T, PerformanceMetricsUpdateArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PerformanceMetrics.
     * @param {PerformanceMetricsDeleteManyArgs} args - Arguments to filter PerformanceMetrics to delete.
     * @example
     * // Delete a few PerformanceMetrics
     * const { count } = await prisma.performanceMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerformanceMetricsDeleteManyArgs>(args?: SelectSubset<T, PerformanceMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerformanceMetricsUpdateManyArgs>(args: SelectSubset<T, PerformanceMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceMetrics and returns the data updated in the database.
     * @param {PerformanceMetricsUpdateManyAndReturnArgs} args - Arguments to update many PerformanceMetrics.
     * @example
     * // Update many PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PerformanceMetrics and only return the `id`
     * const performanceMetricsWithIdOnly = await prisma.performanceMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerformanceMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, PerformanceMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PerformanceMetrics.
     * @param {PerformanceMetricsUpsertArgs} args - Arguments to update or create a PerformanceMetrics.
     * @example
     * // Update or create a PerformanceMetrics
     * const performanceMetrics = await prisma.performanceMetrics.upsert({
     *   create: {
     *     // ... data to create a PerformanceMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerformanceMetrics we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceMetricsUpsertArgs>(args: SelectSubset<T, PerformanceMetricsUpsertArgs<ExtArgs>>): Prisma__PerformanceMetricsClient<$Result.GetResult<Prisma.$PerformanceMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PerformanceMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsCountArgs} args - Arguments to filter PerformanceMetrics to count.
     * @example
     * // Count the number of PerformanceMetrics
     * const count = await prisma.performanceMetrics.count({
     *   where: {
     *     // ... the filter for the PerformanceMetrics we want to count
     *   }
     * })
    **/
    count<T extends PerformanceMetricsCountArgs>(
      args?: Subset<T, PerformanceMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformanceMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerformanceMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerformanceMetricsAggregateArgs>(args: Subset<T, PerformanceMetricsAggregateArgs>): Prisma.PrismaPromise<GetPerformanceMetricsAggregateType<T>>

    /**
     * Group by PerformanceMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerformanceMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceMetricsGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerformanceMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerformanceMetrics model
   */
  readonly fields: PerformanceMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerformanceMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends GameplaySessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameplaySessionDefaultArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PerformanceMetrics model
   */
  interface PerformanceMetricsFieldRefs {
    readonly id: FieldRef<"PerformanceMetrics", 'String'>
    readonly sessionId: FieldRef<"PerformanceMetrics", 'String'>
    readonly kills: FieldRef<"PerformanceMetrics", 'Int'>
    readonly deaths: FieldRef<"PerformanceMetrics", 'Int'>
    readonly assists: FieldRef<"PerformanceMetrics", 'Int'>
    readonly kdaRatio: FieldRef<"PerformanceMetrics", 'Float'>
    readonly killParticipation: FieldRef<"PerformanceMetrics", 'Float'>
    readonly firstBlood: FieldRef<"PerformanceMetrics", 'Boolean'>
    readonly goldEarned: FieldRef<"PerformanceMetrics", 'Int'>
    readonly goldSpent: FieldRef<"PerformanceMetrics", 'Int'>
    readonly goldPerMinute: FieldRef<"PerformanceMetrics", 'Float'>
    readonly economyEfficiency: FieldRef<"PerformanceMetrics", 'Float'>
    readonly itemBuildScore: FieldRef<"PerformanceMetrics", 'Float'>
    readonly farmingScore: FieldRef<"PerformanceMetrics", 'Float'>
    readonly objectivesParticipated: FieldRef<"PerformanceMetrics", 'Int'>
    readonly objectivesSecured: FieldRef<"PerformanceMetrics", 'Int'>
    readonly objectivesContested: FieldRef<"PerformanceMetrics", 'Int'>
    readonly participationRate: FieldRef<"PerformanceMetrics", 'Float'>
    readonly successRate: FieldRef<"PerformanceMetrics", 'Float'>
    readonly impactScore: FieldRef<"PerformanceMetrics", 'Float'>
    readonly accuracy: FieldRef<"PerformanceMetrics", 'Float'>
    readonly reactionTime: FieldRef<"PerformanceMetrics", 'Float'>
    readonly decisionMaking: FieldRef<"PerformanceMetrics", 'Float'>
    readonly positioning: FieldRef<"PerformanceMetrics", 'Float'>
    readonly timing: FieldRef<"PerformanceMetrics", 'Float'>
    readonly adaptation: FieldRef<"PerformanceMetrics", 'Float'>
    readonly overallScore: FieldRef<"PerformanceMetrics", 'Float'>
    readonly rank: FieldRef<"PerformanceMetrics", 'String'>
    readonly improvement: FieldRef<"PerformanceMetrics", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PerformanceMetrics findUnique
   */
  export type PerformanceMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceMetrics to fetch.
     */
    where: PerformanceMetricsWhereUniqueInput
  }

  /**
   * PerformanceMetrics findUniqueOrThrow
   */
  export type PerformanceMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceMetrics to fetch.
     */
    where: PerformanceMetricsWhereUniqueInput
  }

  /**
   * PerformanceMetrics findFirst
   */
  export type PerformanceMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceMetrics to fetch.
     */
    where?: PerformanceMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceMetrics to fetch.
     */
    orderBy?: PerformanceMetricsOrderByWithRelationInput | PerformanceMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceMetrics.
     */
    cursor?: PerformanceMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceMetrics.
     */
    distinct?: PerformanceMetricsScalarFieldEnum | PerformanceMetricsScalarFieldEnum[]
  }

  /**
   * PerformanceMetrics findFirstOrThrow
   */
  export type PerformanceMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceMetrics to fetch.
     */
    where?: PerformanceMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceMetrics to fetch.
     */
    orderBy?: PerformanceMetricsOrderByWithRelationInput | PerformanceMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceMetrics.
     */
    cursor?: PerformanceMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceMetrics.
     */
    distinct?: PerformanceMetricsScalarFieldEnum | PerformanceMetricsScalarFieldEnum[]
  }

  /**
   * PerformanceMetrics findMany
   */
  export type PerformanceMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceMetrics to fetch.
     */
    where?: PerformanceMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceMetrics to fetch.
     */
    orderBy?: PerformanceMetricsOrderByWithRelationInput | PerformanceMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerformanceMetrics.
     */
    cursor?: PerformanceMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceMetrics.
     */
    skip?: number
    distinct?: PerformanceMetricsScalarFieldEnum | PerformanceMetricsScalarFieldEnum[]
  }

  /**
   * PerformanceMetrics create
   */
  export type PerformanceMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a PerformanceMetrics.
     */
    data: XOR<PerformanceMetricsCreateInput, PerformanceMetricsUncheckedCreateInput>
  }

  /**
   * PerformanceMetrics createMany
   */
  export type PerformanceMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerformanceMetrics.
     */
    data: PerformanceMetricsCreateManyInput | PerformanceMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerformanceMetrics createManyAndReturn
   */
  export type PerformanceMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many PerformanceMetrics.
     */
    data: PerformanceMetricsCreateManyInput | PerformanceMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerformanceMetrics update
   */
  export type PerformanceMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a PerformanceMetrics.
     */
    data: XOR<PerformanceMetricsUpdateInput, PerformanceMetricsUncheckedUpdateInput>
    /**
     * Choose, which PerformanceMetrics to update.
     */
    where: PerformanceMetricsWhereUniqueInput
  }

  /**
   * PerformanceMetrics updateMany
   */
  export type PerformanceMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerformanceMetrics.
     */
    data: XOR<PerformanceMetricsUpdateManyMutationInput, PerformanceMetricsUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceMetrics to update
     */
    where?: PerformanceMetricsWhereInput
    /**
     * Limit how many PerformanceMetrics to update.
     */
    limit?: number
  }

  /**
   * PerformanceMetrics updateManyAndReturn
   */
  export type PerformanceMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * The data used to update PerformanceMetrics.
     */
    data: XOR<PerformanceMetricsUpdateManyMutationInput, PerformanceMetricsUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceMetrics to update
     */
    where?: PerformanceMetricsWhereInput
    /**
     * Limit how many PerformanceMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerformanceMetrics upsert
   */
  export type PerformanceMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the PerformanceMetrics to update in case it exists.
     */
    where: PerformanceMetricsWhereUniqueInput
    /**
     * In case the PerformanceMetrics found by the `where` argument doesn't exist, create a new PerformanceMetrics with this data.
     */
    create: XOR<PerformanceMetricsCreateInput, PerformanceMetricsUncheckedCreateInput>
    /**
     * In case the PerformanceMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformanceMetricsUpdateInput, PerformanceMetricsUncheckedUpdateInput>
  }

  /**
   * PerformanceMetrics delete
   */
  export type PerformanceMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
    /**
     * Filter which PerformanceMetrics to delete.
     */
    where: PerformanceMetricsWhereUniqueInput
  }

  /**
   * PerformanceMetrics deleteMany
   */
  export type PerformanceMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceMetrics to delete
     */
    where?: PerformanceMetricsWhereInput
    /**
     * Limit how many PerformanceMetrics to delete.
     */
    limit?: number
  }

  /**
   * PerformanceMetrics without action
   */
  export type PerformanceMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceMetrics
     */
    select?: PerformanceMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceMetrics
     */
    omit?: PerformanceMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceMetricsInclude<ExtArgs> | null
  }


  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    confidence: number | null
    processingTime: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    confidence: number | null
    processingTime: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    analysisType: $Enums.AnalysisType | null
    category: $Enums.AnalyticsCategory | null
    confidence: number | null
    processingTime: number | null
    createdAt: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    analysisType: $Enums.AnalysisType | null
    category: $Enums.AnalyticsCategory | null
    confidence: number | null
    processingTime: number | null
    createdAt: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    analysisType: number
    category: number
    metrics: number
    insights: number
    recommendations: number
    confidence: number
    processingTime: number
    createdAt: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    confidence?: true
    processingTime?: true
  }

  export type AnalyticsSumAggregateInputType = {
    confidence?: true
    processingTime?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    analysisType?: true
    category?: true
    confidence?: true
    processingTime?: true
    createdAt?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    analysisType?: true
    category?: true
    confidence?: true
    processingTime?: true
    createdAt?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    analysisType?: true
    category?: true
    metrics?: true
    insights?: true
    recommendations?: true
    confidence?: true
    processingTime?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: string
    userId: string
    sessionId: string | null
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonValue
    insights: JsonValue
    recommendations: string[]
    confidence: number
    processingTime: number
    createdAt: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    analysisType?: boolean
    category?: boolean
    metrics?: boolean
    insights?: boolean
    recommendations?: boolean
    confidence?: boolean
    processingTime?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Analytics$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    analysisType?: boolean
    category?: boolean
    metrics?: boolean
    insights?: boolean
    recommendations?: boolean
    confidence?: boolean
    processingTime?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Analytics$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    analysisType?: boolean
    category?: boolean
    metrics?: boolean
    insights?: boolean
    recommendations?: boolean
    confidence?: boolean
    processingTime?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Analytics$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    analysisType?: boolean
    category?: boolean
    metrics?: boolean
    insights?: boolean
    recommendations?: boolean
    confidence?: boolean
    processingTime?: boolean
    createdAt?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "analysisType" | "category" | "metrics" | "insights" | "recommendations" | "confidence" | "processingTime" | "createdAt", ExtArgs["result"]["analytics"]>
  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Analytics$sessionArgs<ExtArgs>
  }
  export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Analytics$sessionArgs<ExtArgs>
  }
  export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Analytics$sessionArgs<ExtArgs>
  }

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$GameplaySessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string | null
      analysisType: $Enums.AnalysisType
      category: $Enums.AnalyticsCategory
      metrics: Prisma.JsonValue
      insights: Prisma.JsonValue
      recommendations: string[]
      confidence: number
      processingTime: number
      createdAt: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends Analytics$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Analytics$sessionArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'String'>
    readonly userId: FieldRef<"Analytics", 'String'>
    readonly sessionId: FieldRef<"Analytics", 'String'>
    readonly analysisType: FieldRef<"Analytics", 'AnalysisType'>
    readonly category: FieldRef<"Analytics", 'AnalyticsCategory'>
    readonly metrics: FieldRef<"Analytics", 'Json'>
    readonly insights: FieldRef<"Analytics", 'Json'>
    readonly recommendations: FieldRef<"Analytics", 'String[]'>
    readonly confidence: FieldRef<"Analytics", 'Float'>
    readonly processingTime: FieldRef<"Analytics", 'Int'>
    readonly createdAt: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics updateManyAndReturn
   */
  export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics.session
   */
  export type Analytics$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    where?: GameplaySessionWhereInput
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model CoachingHistory
   */

  export type AggregateCoachingHistory = {
    _count: CoachingHistoryCountAggregateOutputType | null
    _avg: CoachingHistoryAvgAggregateOutputType | null
    _sum: CoachingHistorySumAggregateOutputType | null
    _min: CoachingHistoryMinAggregateOutputType | null
    _max: CoachingHistoryMaxAggregateOutputType | null
  }

  export type CoachingHistoryAvgAggregateOutputType = {
    deliveryTime: number | null
    effectiveness: number | null
    feedback: number | null
  }

  export type CoachingHistorySumAggregateOutputType = {
    deliveryTime: number | null
    effectiveness: number | null
    feedback: number | null
  }

  export type CoachingHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    coachingType: $Enums.CoachingType | null
    message: string | null
    category: $Enums.CoachingCategory | null
    priority: $Enums.Priority | null
    deliveryTime: number | null
    userResponse: string | null
    effectiveness: number | null
    feedback: number | null
    createdAt: Date | null
  }

  export type CoachingHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    coachingType: $Enums.CoachingType | null
    message: string | null
    category: $Enums.CoachingCategory | null
    priority: $Enums.Priority | null
    deliveryTime: number | null
    userResponse: string | null
    effectiveness: number | null
    feedback: number | null
    createdAt: Date | null
  }

  export type CoachingHistoryCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    coachingType: number
    message: number
    category: number
    priority: number
    deliveryTime: number
    userResponse: number
    effectiveness: number
    feedback: number
    createdAt: number
    _all: number
  }


  export type CoachingHistoryAvgAggregateInputType = {
    deliveryTime?: true
    effectiveness?: true
    feedback?: true
  }

  export type CoachingHistorySumAggregateInputType = {
    deliveryTime?: true
    effectiveness?: true
    feedback?: true
  }

  export type CoachingHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    coachingType?: true
    message?: true
    category?: true
    priority?: true
    deliveryTime?: true
    userResponse?: true
    effectiveness?: true
    feedback?: true
    createdAt?: true
  }

  export type CoachingHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    coachingType?: true
    message?: true
    category?: true
    priority?: true
    deliveryTime?: true
    userResponse?: true
    effectiveness?: true
    feedback?: true
    createdAt?: true
  }

  export type CoachingHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    coachingType?: true
    message?: true
    category?: true
    priority?: true
    deliveryTime?: true
    userResponse?: true
    effectiveness?: true
    feedback?: true
    createdAt?: true
    _all?: true
  }

  export type CoachingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingHistory to aggregate.
     */
    where?: CoachingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingHistories to fetch.
     */
    orderBy?: CoachingHistoryOrderByWithRelationInput | CoachingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachingHistories
    **/
    _count?: true | CoachingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachingHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachingHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachingHistoryMaxAggregateInputType
  }

  export type GetCoachingHistoryAggregateType<T extends CoachingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachingHistory[P]>
      : GetScalarType<T[P], AggregateCoachingHistory[P]>
  }




  export type CoachingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingHistoryWhereInput
    orderBy?: CoachingHistoryOrderByWithAggregationInput | CoachingHistoryOrderByWithAggregationInput[]
    by: CoachingHistoryScalarFieldEnum[] | CoachingHistoryScalarFieldEnum
    having?: CoachingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachingHistoryCountAggregateInputType | true
    _avg?: CoachingHistoryAvgAggregateInputType
    _sum?: CoachingHistorySumAggregateInputType
    _min?: CoachingHistoryMinAggregateInputType
    _max?: CoachingHistoryMaxAggregateInputType
  }

  export type CoachingHistoryGroupByOutputType = {
    id: string
    userId: string
    sessionId: string | null
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse: string | null
    effectiveness: number | null
    feedback: number | null
    createdAt: Date
    _count: CoachingHistoryCountAggregateOutputType | null
    _avg: CoachingHistoryAvgAggregateOutputType | null
    _sum: CoachingHistorySumAggregateOutputType | null
    _min: CoachingHistoryMinAggregateOutputType | null
    _max: CoachingHistoryMaxAggregateOutputType | null
  }

  type GetCoachingHistoryGroupByPayload<T extends CoachingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CoachingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CoachingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    coachingType?: boolean
    message?: boolean
    category?: boolean
    priority?: boolean
    deliveryTime?: boolean
    userResponse?: boolean
    effectiveness?: boolean
    feedback?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | CoachingHistory$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["coachingHistory"]>

  export type CoachingHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    coachingType?: boolean
    message?: boolean
    category?: boolean
    priority?: boolean
    deliveryTime?: boolean
    userResponse?: boolean
    effectiveness?: boolean
    feedback?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | CoachingHistory$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["coachingHistory"]>

  export type CoachingHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    coachingType?: boolean
    message?: boolean
    category?: boolean
    priority?: boolean
    deliveryTime?: boolean
    userResponse?: boolean
    effectiveness?: boolean
    feedback?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | CoachingHistory$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["coachingHistory"]>

  export type CoachingHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    coachingType?: boolean
    message?: boolean
    category?: boolean
    priority?: boolean
    deliveryTime?: boolean
    userResponse?: boolean
    effectiveness?: boolean
    feedback?: boolean
    createdAt?: boolean
  }

  export type CoachingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "coachingType" | "message" | "category" | "priority" | "deliveryTime" | "userResponse" | "effectiveness" | "feedback" | "createdAt", ExtArgs["result"]["coachingHistory"]>
  export type CoachingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | CoachingHistory$sessionArgs<ExtArgs>
  }
  export type CoachingHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | CoachingHistory$sessionArgs<ExtArgs>
  }
  export type CoachingHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | CoachingHistory$sessionArgs<ExtArgs>
  }

  export type $CoachingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachingHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$GameplaySessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string | null
      coachingType: $Enums.CoachingType
      message: string
      category: $Enums.CoachingCategory
      priority: $Enums.Priority
      deliveryTime: number
      userResponse: string | null
      effectiveness: number | null
      feedback: number | null
      createdAt: Date
    }, ExtArgs["result"]["coachingHistory"]>
    composites: {}
  }

  type CoachingHistoryGetPayload<S extends boolean | null | undefined | CoachingHistoryDefaultArgs> = $Result.GetResult<Prisma.$CoachingHistoryPayload, S>

  type CoachingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachingHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachingHistoryCountAggregateInputType | true
    }

  export interface CoachingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachingHistory'], meta: { name: 'CoachingHistory' } }
    /**
     * Find zero or one CoachingHistory that matches the filter.
     * @param {CoachingHistoryFindUniqueArgs} args - Arguments to find a CoachingHistory
     * @example
     * // Get one CoachingHistory
     * const coachingHistory = await prisma.coachingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachingHistoryFindUniqueArgs>(args: SelectSubset<T, CoachingHistoryFindUniqueArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachingHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachingHistoryFindUniqueOrThrowArgs} args - Arguments to find a CoachingHistory
     * @example
     * // Get one CoachingHistory
     * const coachingHistory = await prisma.coachingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryFindFirstArgs} args - Arguments to find a CoachingHistory
     * @example
     * // Get one CoachingHistory
     * const coachingHistory = await prisma.coachingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachingHistoryFindFirstArgs>(args?: SelectSubset<T, CoachingHistoryFindFirstArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryFindFirstOrThrowArgs} args - Arguments to find a CoachingHistory
     * @example
     * // Get one CoachingHistory
     * const coachingHistory = await prisma.coachingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachingHistories
     * const coachingHistories = await prisma.coachingHistory.findMany()
     * 
     * // Get first 10 CoachingHistories
     * const coachingHistories = await prisma.coachingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachingHistoryWithIdOnly = await prisma.coachingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachingHistoryFindManyArgs>(args?: SelectSubset<T, CoachingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachingHistory.
     * @param {CoachingHistoryCreateArgs} args - Arguments to create a CoachingHistory.
     * @example
     * // Create one CoachingHistory
     * const CoachingHistory = await prisma.coachingHistory.create({
     *   data: {
     *     // ... data to create a CoachingHistory
     *   }
     * })
     * 
     */
    create<T extends CoachingHistoryCreateArgs>(args: SelectSubset<T, CoachingHistoryCreateArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachingHistories.
     * @param {CoachingHistoryCreateManyArgs} args - Arguments to create many CoachingHistories.
     * @example
     * // Create many CoachingHistories
     * const coachingHistory = await prisma.coachingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachingHistoryCreateManyArgs>(args?: SelectSubset<T, CoachingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachingHistories and returns the data saved in the database.
     * @param {CoachingHistoryCreateManyAndReturnArgs} args - Arguments to create many CoachingHistories.
     * @example
     * // Create many CoachingHistories
     * const coachingHistory = await prisma.coachingHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachingHistories and only return the `id`
     * const coachingHistoryWithIdOnly = await prisma.coachingHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachingHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachingHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachingHistory.
     * @param {CoachingHistoryDeleteArgs} args - Arguments to delete one CoachingHistory.
     * @example
     * // Delete one CoachingHistory
     * const CoachingHistory = await prisma.coachingHistory.delete({
     *   where: {
     *     // ... filter to delete one CoachingHistory
     *   }
     * })
     * 
     */
    delete<T extends CoachingHistoryDeleteArgs>(args: SelectSubset<T, CoachingHistoryDeleteArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachingHistory.
     * @param {CoachingHistoryUpdateArgs} args - Arguments to update one CoachingHistory.
     * @example
     * // Update one CoachingHistory
     * const coachingHistory = await prisma.coachingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachingHistoryUpdateArgs>(args: SelectSubset<T, CoachingHistoryUpdateArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachingHistories.
     * @param {CoachingHistoryDeleteManyArgs} args - Arguments to filter CoachingHistories to delete.
     * @example
     * // Delete a few CoachingHistories
     * const { count } = await prisma.coachingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachingHistoryDeleteManyArgs>(args?: SelectSubset<T, CoachingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachingHistories
     * const coachingHistory = await prisma.coachingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachingHistoryUpdateManyArgs>(args: SelectSubset<T, CoachingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingHistories and returns the data updated in the database.
     * @param {CoachingHistoryUpdateManyAndReturnArgs} args - Arguments to update many CoachingHistories.
     * @example
     * // Update many CoachingHistories
     * const coachingHistory = await prisma.coachingHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachingHistories and only return the `id`
     * const coachingHistoryWithIdOnly = await prisma.coachingHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachingHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachingHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachingHistory.
     * @param {CoachingHistoryUpsertArgs} args - Arguments to update or create a CoachingHistory.
     * @example
     * // Update or create a CoachingHistory
     * const coachingHistory = await prisma.coachingHistory.upsert({
     *   create: {
     *     // ... data to create a CoachingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachingHistory we want to update
     *   }
     * })
     */
    upsert<T extends CoachingHistoryUpsertArgs>(args: SelectSubset<T, CoachingHistoryUpsertArgs<ExtArgs>>): Prisma__CoachingHistoryClient<$Result.GetResult<Prisma.$CoachingHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryCountArgs} args - Arguments to filter CoachingHistories to count.
     * @example
     * // Count the number of CoachingHistories
     * const count = await prisma.coachingHistory.count({
     *   where: {
     *     // ... the filter for the CoachingHistories we want to count
     *   }
     * })
    **/
    count<T extends CoachingHistoryCountArgs>(
      args?: Subset<T, CoachingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoachingHistoryAggregateArgs>(args: Subset<T, CoachingHistoryAggregateArgs>): Prisma.PrismaPromise<GetCoachingHistoryAggregateType<T>>

    /**
     * Group by CoachingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoachingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CoachingHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachingHistory model
   */
  readonly fields: CoachingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends CoachingHistory$sessionArgs<ExtArgs> = {}>(args?: Subset<T, CoachingHistory$sessionArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoachingHistory model
   */
  interface CoachingHistoryFieldRefs {
    readonly id: FieldRef<"CoachingHistory", 'String'>
    readonly userId: FieldRef<"CoachingHistory", 'String'>
    readonly sessionId: FieldRef<"CoachingHistory", 'String'>
    readonly coachingType: FieldRef<"CoachingHistory", 'CoachingType'>
    readonly message: FieldRef<"CoachingHistory", 'String'>
    readonly category: FieldRef<"CoachingHistory", 'CoachingCategory'>
    readonly priority: FieldRef<"CoachingHistory", 'Priority'>
    readonly deliveryTime: FieldRef<"CoachingHistory", 'Int'>
    readonly userResponse: FieldRef<"CoachingHistory", 'String'>
    readonly effectiveness: FieldRef<"CoachingHistory", 'Float'>
    readonly feedback: FieldRef<"CoachingHistory", 'Int'>
    readonly createdAt: FieldRef<"CoachingHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachingHistory findUnique
   */
  export type CoachingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CoachingHistory to fetch.
     */
    where: CoachingHistoryWhereUniqueInput
  }

  /**
   * CoachingHistory findUniqueOrThrow
   */
  export type CoachingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CoachingHistory to fetch.
     */
    where: CoachingHistoryWhereUniqueInput
  }

  /**
   * CoachingHistory findFirst
   */
  export type CoachingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CoachingHistory to fetch.
     */
    where?: CoachingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingHistories to fetch.
     */
    orderBy?: CoachingHistoryOrderByWithRelationInput | CoachingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingHistories.
     */
    cursor?: CoachingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingHistories.
     */
    distinct?: CoachingHistoryScalarFieldEnum | CoachingHistoryScalarFieldEnum[]
  }

  /**
   * CoachingHistory findFirstOrThrow
   */
  export type CoachingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CoachingHistory to fetch.
     */
    where?: CoachingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingHistories to fetch.
     */
    orderBy?: CoachingHistoryOrderByWithRelationInput | CoachingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingHistories.
     */
    cursor?: CoachingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingHistories.
     */
    distinct?: CoachingHistoryScalarFieldEnum | CoachingHistoryScalarFieldEnum[]
  }

  /**
   * CoachingHistory findMany
   */
  export type CoachingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CoachingHistories to fetch.
     */
    where?: CoachingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingHistories to fetch.
     */
    orderBy?: CoachingHistoryOrderByWithRelationInput | CoachingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachingHistories.
     */
    cursor?: CoachingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingHistories.
     */
    skip?: number
    distinct?: CoachingHistoryScalarFieldEnum | CoachingHistoryScalarFieldEnum[]
  }

  /**
   * CoachingHistory create
   */
  export type CoachingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachingHistory.
     */
    data: XOR<CoachingHistoryCreateInput, CoachingHistoryUncheckedCreateInput>
  }

  /**
   * CoachingHistory createMany
   */
  export type CoachingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachingHistories.
     */
    data: CoachingHistoryCreateManyInput | CoachingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachingHistory createManyAndReturn
   */
  export type CoachingHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many CoachingHistories.
     */
    data: CoachingHistoryCreateManyInput | CoachingHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingHistory update
   */
  export type CoachingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachingHistory.
     */
    data: XOR<CoachingHistoryUpdateInput, CoachingHistoryUncheckedUpdateInput>
    /**
     * Choose, which CoachingHistory to update.
     */
    where: CoachingHistoryWhereUniqueInput
  }

  /**
   * CoachingHistory updateMany
   */
  export type CoachingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachingHistories.
     */
    data: XOR<CoachingHistoryUpdateManyMutationInput, CoachingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CoachingHistories to update
     */
    where?: CoachingHistoryWhereInput
    /**
     * Limit how many CoachingHistories to update.
     */
    limit?: number
  }

  /**
   * CoachingHistory updateManyAndReturn
   */
  export type CoachingHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * The data used to update CoachingHistories.
     */
    data: XOR<CoachingHistoryUpdateManyMutationInput, CoachingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CoachingHistories to update
     */
    where?: CoachingHistoryWhereInput
    /**
     * Limit how many CoachingHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingHistory upsert
   */
  export type CoachingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachingHistory to update in case it exists.
     */
    where: CoachingHistoryWhereUniqueInput
    /**
     * In case the CoachingHistory found by the `where` argument doesn't exist, create a new CoachingHistory with this data.
     */
    create: XOR<CoachingHistoryCreateInput, CoachingHistoryUncheckedCreateInput>
    /**
     * In case the CoachingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachingHistoryUpdateInput, CoachingHistoryUncheckedUpdateInput>
  }

  /**
   * CoachingHistory delete
   */
  export type CoachingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
    /**
     * Filter which CoachingHistory to delete.
     */
    where: CoachingHistoryWhereUniqueInput
  }

  /**
   * CoachingHistory deleteMany
   */
  export type CoachingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingHistories to delete
     */
    where?: CoachingHistoryWhereInput
    /**
     * Limit how many CoachingHistories to delete.
     */
    limit?: number
  }

  /**
   * CoachingHistory.session
   */
  export type CoachingHistory$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    where?: GameplaySessionWhereInput
  }

  /**
   * CoachingHistory without action
   */
  export type CoachingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingHistory
     */
    select?: CoachingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingHistory
     */
    omit?: CoachingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model LearningProgress
   */

  export type AggregateLearningProgress = {
    _count: LearningProgressCountAggregateOutputType | null
    _avg: LearningProgressAvgAggregateOutputType | null
    _sum: LearningProgressSumAggregateOutputType | null
    _min: LearningProgressMinAggregateOutputType | null
    _max: LearningProgressMaxAggregateOutputType | null
  }

  export type LearningProgressAvgAggregateOutputType = {
    progress: number | null
    timeSpent: number | null
    score: number | null
    attempts: number | null
  }

  export type LearningProgressSumAggregateOutputType = {
    progress: number | null
    timeSpent: number | null
    score: number | null
    attempts: number | null
  }

  export type LearningProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    pathId: string | null
    moduleId: string | null
    status: $Enums.ProgressStatus | null
    progress: number | null
    timeSpent: number | null
    score: number | null
    attempts: number | null
    lastAccessed: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    pathId: string | null
    moduleId: string | null
    status: $Enums.ProgressStatus | null
    progress: number | null
    timeSpent: number | null
    score: number | null
    attempts: number | null
    lastAccessed: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningProgressCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    pathId: number
    moduleId: number
    status: number
    progress: number
    timeSpent: number
    score: number
    attempts: number
    lastAccessed: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningProgressAvgAggregateInputType = {
    progress?: true
    timeSpent?: true
    score?: true
    attempts?: true
  }

  export type LearningProgressSumAggregateInputType = {
    progress?: true
    timeSpent?: true
    score?: true
    attempts?: true
  }

  export type LearningProgressMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    pathId?: true
    moduleId?: true
    status?: true
    progress?: true
    timeSpent?: true
    score?: true
    attempts?: true
    lastAccessed?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    pathId?: true
    moduleId?: true
    status?: true
    progress?: true
    timeSpent?: true
    score?: true
    attempts?: true
    lastAccessed?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningProgressCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    pathId?: true
    moduleId?: true
    status?: true
    progress?: true
    timeSpent?: true
    score?: true
    attempts?: true
    lastAccessed?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningProgress to aggregate.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningProgresses
    **/
    _count?: true | LearningProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningProgressMaxAggregateInputType
  }

  export type GetLearningProgressAggregateType<T extends LearningProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningProgress[P]>
      : GetScalarType<T[P], AggregateLearningProgress[P]>
  }




  export type LearningProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningProgressWhereInput
    orderBy?: LearningProgressOrderByWithAggregationInput | LearningProgressOrderByWithAggregationInput[]
    by: LearningProgressScalarFieldEnum[] | LearningProgressScalarFieldEnum
    having?: LearningProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningProgressCountAggregateInputType | true
    _avg?: LearningProgressAvgAggregateInputType
    _sum?: LearningProgressSumAggregateInputType
    _min?: LearningProgressMinAggregateInputType
    _max?: LearningProgressMaxAggregateInputType
  }

  export type LearningProgressGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    pathId: string | null
    moduleId: string | null
    status: $Enums.ProgressStatus
    progress: number
    timeSpent: number
    score: number | null
    attempts: number
    lastAccessed: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LearningProgressCountAggregateOutputType | null
    _avg: LearningProgressAvgAggregateOutputType | null
    _sum: LearningProgressSumAggregateOutputType | null
    _min: LearningProgressMinAggregateOutputType | null
    _max: LearningProgressMaxAggregateOutputType | null
  }

  type GetLearningProgressGroupByPayload<T extends LearningProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LearningProgressGroupByOutputType[P]>
        }
      >
    >


  export type LearningProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    pathId?: boolean
    moduleId?: boolean
    status?: boolean
    progress?: boolean
    timeSpent?: boolean
    score?: boolean
    attempts?: boolean
    lastAccessed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | LearningProgress$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["learningProgress"]>

  export type LearningProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    pathId?: boolean
    moduleId?: boolean
    status?: boolean
    progress?: boolean
    timeSpent?: boolean
    score?: boolean
    attempts?: boolean
    lastAccessed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | LearningProgress$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["learningProgress"]>

  export type LearningProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    pathId?: boolean
    moduleId?: boolean
    status?: boolean
    progress?: boolean
    timeSpent?: boolean
    score?: boolean
    attempts?: boolean
    lastAccessed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | LearningProgress$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["learningProgress"]>

  export type LearningProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    pathId?: boolean
    moduleId?: boolean
    status?: boolean
    progress?: boolean
    timeSpent?: boolean
    score?: boolean
    attempts?: boolean
    lastAccessed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "pathId" | "moduleId" | "status" | "progress" | "timeSpent" | "score" | "attempts" | "lastAccessed" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["learningProgress"]>
  export type LearningProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | LearningProgress$sessionArgs<ExtArgs>
  }
  export type LearningProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | LearningProgress$sessionArgs<ExtArgs>
  }
  export type LearningProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | LearningProgress$sessionArgs<ExtArgs>
  }

  export type $LearningProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$GameplaySessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      pathId: string | null
      moduleId: string | null
      status: $Enums.ProgressStatus
      progress: number
      timeSpent: number
      score: number | null
      attempts: number
      lastAccessed: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningProgress"]>
    composites: {}
  }

  type LearningProgressGetPayload<S extends boolean | null | undefined | LearningProgressDefaultArgs> = $Result.GetResult<Prisma.$LearningProgressPayload, S>

  type LearningProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningProgressCountAggregateInputType | true
    }

  export interface LearningProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningProgress'], meta: { name: 'LearningProgress' } }
    /**
     * Find zero or one LearningProgress that matches the filter.
     * @param {LearningProgressFindUniqueArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningProgressFindUniqueArgs>(args: SelectSubset<T, LearningProgressFindUniqueArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningProgressFindUniqueOrThrowArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressFindFirstArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningProgressFindFirstArgs>(args?: SelectSubset<T, LearningProgressFindFirstArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressFindFirstOrThrowArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningProgresses
     * const learningProgresses = await prisma.learningProgress.findMany()
     * 
     * // Get first 10 LearningProgresses
     * const learningProgresses = await prisma.learningProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningProgressWithIdOnly = await prisma.learningProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningProgressFindManyArgs>(args?: SelectSubset<T, LearningProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningProgress.
     * @param {LearningProgressCreateArgs} args - Arguments to create a LearningProgress.
     * @example
     * // Create one LearningProgress
     * const LearningProgress = await prisma.learningProgress.create({
     *   data: {
     *     // ... data to create a LearningProgress
     *   }
     * })
     * 
     */
    create<T extends LearningProgressCreateArgs>(args: SelectSubset<T, LearningProgressCreateArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningProgresses.
     * @param {LearningProgressCreateManyArgs} args - Arguments to create many LearningProgresses.
     * @example
     * // Create many LearningProgresses
     * const learningProgress = await prisma.learningProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningProgressCreateManyArgs>(args?: SelectSubset<T, LearningProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningProgresses and returns the data saved in the database.
     * @param {LearningProgressCreateManyAndReturnArgs} args - Arguments to create many LearningProgresses.
     * @example
     * // Create many LearningProgresses
     * const learningProgress = await prisma.learningProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningProgresses and only return the `id`
     * const learningProgressWithIdOnly = await prisma.learningProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningProgress.
     * @param {LearningProgressDeleteArgs} args - Arguments to delete one LearningProgress.
     * @example
     * // Delete one LearningProgress
     * const LearningProgress = await prisma.learningProgress.delete({
     *   where: {
     *     // ... filter to delete one LearningProgress
     *   }
     * })
     * 
     */
    delete<T extends LearningProgressDeleteArgs>(args: SelectSubset<T, LearningProgressDeleteArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningProgress.
     * @param {LearningProgressUpdateArgs} args - Arguments to update one LearningProgress.
     * @example
     * // Update one LearningProgress
     * const learningProgress = await prisma.learningProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningProgressUpdateArgs>(args: SelectSubset<T, LearningProgressUpdateArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningProgresses.
     * @param {LearningProgressDeleteManyArgs} args - Arguments to filter LearningProgresses to delete.
     * @example
     * // Delete a few LearningProgresses
     * const { count } = await prisma.learningProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningProgressDeleteManyArgs>(args?: SelectSubset<T, LearningProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningProgresses
     * const learningProgress = await prisma.learningProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningProgressUpdateManyArgs>(args: SelectSubset<T, LearningProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningProgresses and returns the data updated in the database.
     * @param {LearningProgressUpdateManyAndReturnArgs} args - Arguments to update many LearningProgresses.
     * @example
     * // Update many LearningProgresses
     * const learningProgress = await prisma.learningProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningProgresses and only return the `id`
     * const learningProgressWithIdOnly = await prisma.learningProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningProgress.
     * @param {LearningProgressUpsertArgs} args - Arguments to update or create a LearningProgress.
     * @example
     * // Update or create a LearningProgress
     * const learningProgress = await prisma.learningProgress.upsert({
     *   create: {
     *     // ... data to create a LearningProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningProgress we want to update
     *   }
     * })
     */
    upsert<T extends LearningProgressUpsertArgs>(args: SelectSubset<T, LearningProgressUpsertArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressCountArgs} args - Arguments to filter LearningProgresses to count.
     * @example
     * // Count the number of LearningProgresses
     * const count = await prisma.learningProgress.count({
     *   where: {
     *     // ... the filter for the LearningProgresses we want to count
     *   }
     * })
    **/
    count<T extends LearningProgressCountArgs>(
      args?: Subset<T, LearningProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LearningProgressAggregateArgs>(args: Subset<T, LearningProgressAggregateArgs>): Prisma.PrismaPromise<GetLearningProgressAggregateType<T>>

    /**
     * Group by LearningProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LearningProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningProgressGroupByArgs['orderBy'] }
        : { orderBy?: LearningProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LearningProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningProgress model
   */
  readonly fields: LearningProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends LearningProgress$sessionArgs<ExtArgs> = {}>(args?: Subset<T, LearningProgress$sessionArgs<ExtArgs>>): Prisma__GameplaySessionClient<$Result.GetResult<Prisma.$GameplaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LearningProgress model
   */
  interface LearningProgressFieldRefs {
    readonly id: FieldRef<"LearningProgress", 'String'>
    readonly userId: FieldRef<"LearningProgress", 'String'>
    readonly contentId: FieldRef<"LearningProgress", 'String'>
    readonly pathId: FieldRef<"LearningProgress", 'String'>
    readonly moduleId: FieldRef<"LearningProgress", 'String'>
    readonly status: FieldRef<"LearningProgress", 'ProgressStatus'>
    readonly progress: FieldRef<"LearningProgress", 'Float'>
    readonly timeSpent: FieldRef<"LearningProgress", 'Int'>
    readonly score: FieldRef<"LearningProgress", 'Float'>
    readonly attempts: FieldRef<"LearningProgress", 'Int'>
    readonly lastAccessed: FieldRef<"LearningProgress", 'DateTime'>
    readonly completedAt: FieldRef<"LearningProgress", 'DateTime'>
    readonly createdAt: FieldRef<"LearningProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningProgress findUnique
   */
  export type LearningProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress findUniqueOrThrow
   */
  export type LearningProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress findFirst
   */
  export type LearningProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningProgresses.
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningProgresses.
     */
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * LearningProgress findFirstOrThrow
   */
  export type LearningProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningProgresses.
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningProgresses.
     */
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * LearningProgress findMany
   */
  export type LearningProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgresses to fetch.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningProgresses.
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * LearningProgress create
   */
  export type LearningProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningProgress.
     */
    data: XOR<LearningProgressCreateInput, LearningProgressUncheckedCreateInput>
  }

  /**
   * LearningProgress createMany
   */
  export type LearningProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningProgresses.
     */
    data: LearningProgressCreateManyInput | LearningProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningProgress createManyAndReturn
   */
  export type LearningProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LearningProgresses.
     */
    data: LearningProgressCreateManyInput | LearningProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningProgress update
   */
  export type LearningProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningProgress.
     */
    data: XOR<LearningProgressUpdateInput, LearningProgressUncheckedUpdateInput>
    /**
     * Choose, which LearningProgress to update.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress updateMany
   */
  export type LearningProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningProgresses.
     */
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyInput>
    /**
     * Filter which LearningProgresses to update
     */
    where?: LearningProgressWhereInput
    /**
     * Limit how many LearningProgresses to update.
     */
    limit?: number
  }

  /**
   * LearningProgress updateManyAndReturn
   */
  export type LearningProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * The data used to update LearningProgresses.
     */
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyInput>
    /**
     * Filter which LearningProgresses to update
     */
    where?: LearningProgressWhereInput
    /**
     * Limit how many LearningProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningProgress upsert
   */
  export type LearningProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningProgress to update in case it exists.
     */
    where: LearningProgressWhereUniqueInput
    /**
     * In case the LearningProgress found by the `where` argument doesn't exist, create a new LearningProgress with this data.
     */
    create: XOR<LearningProgressCreateInput, LearningProgressUncheckedCreateInput>
    /**
     * In case the LearningProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningProgressUpdateInput, LearningProgressUncheckedUpdateInput>
  }

  /**
   * LearningProgress delete
   */
  export type LearningProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter which LearningProgress to delete.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress deleteMany
   */
  export type LearningProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningProgresses to delete
     */
    where?: LearningProgressWhereInput
    /**
     * Limit how many LearningProgresses to delete.
     */
    limit?: number
  }

  /**
   * LearningProgress.session
   */
  export type LearningProgress$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameplaySession
     */
    select?: GameplaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameplaySession
     */
    omit?: GameplaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameplaySessionInclude<ExtArgs> | null
    where?: GameplaySessionWhereInput
  }

  /**
   * LearningProgress without action
   */
  export type LearningProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    progress: number | null
    maxProgress: number | null
  }

  export type AchievementSumAggregateOutputType = {
    progress: number | null
    maxProgress: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    name: string | null
    description: string | null
    category: string | null
    type: $Enums.AchievementType | null
    rarity: $Enums.Rarity | null
    progress: number | null
    maxProgress: number | null
    completed: boolean | null
    unlockedAt: Date | null
    createdAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    name: string | null
    description: string | null
    category: string | null
    type: $Enums.AchievementType | null
    rarity: $Enums.Rarity | null
    progress: number | null
    maxProgress: number | null
    completed: boolean | null
    unlockedAt: Date | null
    createdAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    name: number
    description: number
    category: number
    type: number
    rarity: number
    progress: number
    maxProgress: number
    completed: number
    unlockedAt: number
    createdAt: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    progress?: true
    maxProgress?: true
  }

  export type AchievementSumAggregateInputType = {
    progress?: true
    maxProgress?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    name?: true
    description?: true
    category?: true
    type?: true
    rarity?: true
    progress?: true
    maxProgress?: true
    completed?: true
    unlockedAt?: true
    createdAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    name?: true
    description?: true
    category?: true
    type?: true
    rarity?: true
    progress?: true
    maxProgress?: true
    completed?: true
    unlockedAt?: true
    createdAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    name?: true
    description?: true
    category?: true
    type?: true
    rarity?: true
    progress?: true
    maxProgress?: true
    completed?: true
    unlockedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    userId: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress: number
    maxProgress: number
    completed: boolean
    unlockedAt: Date | null
    createdAt: Date
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    rarity?: boolean
    progress?: boolean
    maxProgress?: boolean
    completed?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    rarity?: boolean
    progress?: boolean
    maxProgress?: boolean
    completed?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    rarity?: boolean
    progress?: boolean
    maxProgress?: boolean
    completed?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    rarity?: boolean
    progress?: boolean
    maxProgress?: boolean
    completed?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievementId" | "name" | "description" | "category" | "type" | "rarity" | "progress" | "maxProgress" | "completed" | "unlockedAt" | "createdAt", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      achievementId: string
      name: string
      description: string
      category: string
      type: $Enums.AchievementType
      rarity: $Enums.Rarity
      progress: number
      maxProgress: number
      completed: boolean
      unlockedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly userId: FieldRef<"Achievement", 'String'>
    readonly achievementId: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly category: FieldRef<"Achievement", 'String'>
    readonly type: FieldRef<"Achievement", 'AchievementType'>
    readonly rarity: FieldRef<"Achievement", 'Rarity'>
    readonly progress: FieldRef<"Achievement", 'Float'>
    readonly maxProgress: FieldRef<"Achievement", 'Float'>
    readonly completed: FieldRef<"Achievement", 'Boolean'>
    readonly unlockedAt: FieldRef<"Achievement", 'DateTime'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model SocialConnection
   */

  export type AggregateSocialConnection = {
    _count: SocialConnectionCountAggregateOutputType | null
    _avg: SocialConnectionAvgAggregateOutputType | null
    _sum: SocialConnectionSumAggregateOutputType | null
    _min: SocialConnectionMinAggregateOutputType | null
    _max: SocialConnectionMaxAggregateOutputType | null
  }

  export type SocialConnectionAvgAggregateOutputType = {
    strength: number | null
  }

  export type SocialConnectionSumAggregateOutputType = {
    strength: number | null
  }

  export type SocialConnectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: $Enums.ConnectionStatus | null
    relationship: $Enums.RelationshipType | null
    strength: number | null
    createdAt: Date | null
    lastInteraction: Date | null
  }

  export type SocialConnectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: $Enums.ConnectionStatus | null
    relationship: $Enums.RelationshipType | null
    strength: number | null
    createdAt: Date | null
    lastInteraction: Date | null
  }

  export type SocialConnectionCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    status: number
    relationship: number
    strength: number
    createdAt: number
    lastInteraction: number
    sharedActivities: number
    _all: number
  }


  export type SocialConnectionAvgAggregateInputType = {
    strength?: true
  }

  export type SocialConnectionSumAggregateInputType = {
    strength?: true
  }

  export type SocialConnectionMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    relationship?: true
    strength?: true
    createdAt?: true
    lastInteraction?: true
  }

  export type SocialConnectionMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    relationship?: true
    strength?: true
    createdAt?: true
    lastInteraction?: true
  }

  export type SocialConnectionCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    relationship?: true
    strength?: true
    createdAt?: true
    lastInteraction?: true
    sharedActivities?: true
    _all?: true
  }

  export type SocialConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialConnection to aggregate.
     */
    where?: SocialConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialConnections to fetch.
     */
    orderBy?: SocialConnectionOrderByWithRelationInput | SocialConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialConnections
    **/
    _count?: true | SocialConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialConnectionMaxAggregateInputType
  }

  export type GetSocialConnectionAggregateType<T extends SocialConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialConnection[P]>
      : GetScalarType<T[P], AggregateSocialConnection[P]>
  }




  export type SocialConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialConnectionWhereInput
    orderBy?: SocialConnectionOrderByWithAggregationInput | SocialConnectionOrderByWithAggregationInput[]
    by: SocialConnectionScalarFieldEnum[] | SocialConnectionScalarFieldEnum
    having?: SocialConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialConnectionCountAggregateInputType | true
    _avg?: SocialConnectionAvgAggregateInputType
    _sum?: SocialConnectionSumAggregateInputType
    _min?: SocialConnectionMinAggregateInputType
    _max?: SocialConnectionMaxAggregateInputType
  }

  export type SocialConnectionGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    status: $Enums.ConnectionStatus
    relationship: $Enums.RelationshipType
    strength: number
    createdAt: Date
    lastInteraction: Date | null
    sharedActivities: string[]
    _count: SocialConnectionCountAggregateOutputType | null
    _avg: SocialConnectionAvgAggregateOutputType | null
    _sum: SocialConnectionSumAggregateOutputType | null
    _min: SocialConnectionMinAggregateOutputType | null
    _max: SocialConnectionMaxAggregateOutputType | null
  }

  type GetSocialConnectionGroupByPayload<T extends SocialConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], SocialConnectionGroupByOutputType[P]>
        }
      >
    >


  export type SocialConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    relationship?: boolean
    strength?: boolean
    createdAt?: boolean
    lastInteraction?: boolean
    sharedActivities?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialConnection"]>

  export type SocialConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    relationship?: boolean
    strength?: boolean
    createdAt?: boolean
    lastInteraction?: boolean
    sharedActivities?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialConnection"]>

  export type SocialConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    relationship?: boolean
    strength?: boolean
    createdAt?: boolean
    lastInteraction?: boolean
    sharedActivities?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialConnection"]>

  export type SocialConnectionSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    relationship?: boolean
    strength?: boolean
    createdAt?: boolean
    lastInteraction?: boolean
    sharedActivities?: boolean
  }

  export type SocialConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "status" | "relationship" | "strength" | "createdAt" | "lastInteraction" | "sharedActivities", ExtArgs["result"]["socialConnection"]>
  export type SocialConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SocialConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SocialConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SocialConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialConnection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      friendId: string
      status: $Enums.ConnectionStatus
      relationship: $Enums.RelationshipType
      strength: number
      createdAt: Date
      lastInteraction: Date | null
      sharedActivities: string[]
    }, ExtArgs["result"]["socialConnection"]>
    composites: {}
  }

  type SocialConnectionGetPayload<S extends boolean | null | undefined | SocialConnectionDefaultArgs> = $Result.GetResult<Prisma.$SocialConnectionPayload, S>

  type SocialConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialConnectionCountAggregateInputType | true
    }

  export interface SocialConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialConnection'], meta: { name: 'SocialConnection' } }
    /**
     * Find zero or one SocialConnection that matches the filter.
     * @param {SocialConnectionFindUniqueArgs} args - Arguments to find a SocialConnection
     * @example
     * // Get one SocialConnection
     * const socialConnection = await prisma.socialConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialConnectionFindUniqueArgs>(args: SelectSubset<T, SocialConnectionFindUniqueArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialConnectionFindUniqueOrThrowArgs} args - Arguments to find a SocialConnection
     * @example
     * // Get one SocialConnection
     * const socialConnection = await prisma.socialConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionFindFirstArgs} args - Arguments to find a SocialConnection
     * @example
     * // Get one SocialConnection
     * const socialConnection = await prisma.socialConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialConnectionFindFirstArgs>(args?: SelectSubset<T, SocialConnectionFindFirstArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionFindFirstOrThrowArgs} args - Arguments to find a SocialConnection
     * @example
     * // Get one SocialConnection
     * const socialConnection = await prisma.socialConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialConnections
     * const socialConnections = await prisma.socialConnection.findMany()
     * 
     * // Get first 10 SocialConnections
     * const socialConnections = await prisma.socialConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialConnectionWithIdOnly = await prisma.socialConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialConnectionFindManyArgs>(args?: SelectSubset<T, SocialConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialConnection.
     * @param {SocialConnectionCreateArgs} args - Arguments to create a SocialConnection.
     * @example
     * // Create one SocialConnection
     * const SocialConnection = await prisma.socialConnection.create({
     *   data: {
     *     // ... data to create a SocialConnection
     *   }
     * })
     * 
     */
    create<T extends SocialConnectionCreateArgs>(args: SelectSubset<T, SocialConnectionCreateArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialConnections.
     * @param {SocialConnectionCreateManyArgs} args - Arguments to create many SocialConnections.
     * @example
     * // Create many SocialConnections
     * const socialConnection = await prisma.socialConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialConnectionCreateManyArgs>(args?: SelectSubset<T, SocialConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialConnections and returns the data saved in the database.
     * @param {SocialConnectionCreateManyAndReturnArgs} args - Arguments to create many SocialConnections.
     * @example
     * // Create many SocialConnections
     * const socialConnection = await prisma.socialConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialConnections and only return the `id`
     * const socialConnectionWithIdOnly = await prisma.socialConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialConnection.
     * @param {SocialConnectionDeleteArgs} args - Arguments to delete one SocialConnection.
     * @example
     * // Delete one SocialConnection
     * const SocialConnection = await prisma.socialConnection.delete({
     *   where: {
     *     // ... filter to delete one SocialConnection
     *   }
     * })
     * 
     */
    delete<T extends SocialConnectionDeleteArgs>(args: SelectSubset<T, SocialConnectionDeleteArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialConnection.
     * @param {SocialConnectionUpdateArgs} args - Arguments to update one SocialConnection.
     * @example
     * // Update one SocialConnection
     * const socialConnection = await prisma.socialConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialConnectionUpdateArgs>(args: SelectSubset<T, SocialConnectionUpdateArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialConnections.
     * @param {SocialConnectionDeleteManyArgs} args - Arguments to filter SocialConnections to delete.
     * @example
     * // Delete a few SocialConnections
     * const { count } = await prisma.socialConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialConnectionDeleteManyArgs>(args?: SelectSubset<T, SocialConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialConnections
     * const socialConnection = await prisma.socialConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialConnectionUpdateManyArgs>(args: SelectSubset<T, SocialConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialConnections and returns the data updated in the database.
     * @param {SocialConnectionUpdateManyAndReturnArgs} args - Arguments to update many SocialConnections.
     * @example
     * // Update many SocialConnections
     * const socialConnection = await prisma.socialConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialConnections and only return the `id`
     * const socialConnectionWithIdOnly = await prisma.socialConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialConnection.
     * @param {SocialConnectionUpsertArgs} args - Arguments to update or create a SocialConnection.
     * @example
     * // Update or create a SocialConnection
     * const socialConnection = await prisma.socialConnection.upsert({
     *   create: {
     *     // ... data to create a SocialConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialConnection we want to update
     *   }
     * })
     */
    upsert<T extends SocialConnectionUpsertArgs>(args: SelectSubset<T, SocialConnectionUpsertArgs<ExtArgs>>): Prisma__SocialConnectionClient<$Result.GetResult<Prisma.$SocialConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionCountArgs} args - Arguments to filter SocialConnections to count.
     * @example
     * // Count the number of SocialConnections
     * const count = await prisma.socialConnection.count({
     *   where: {
     *     // ... the filter for the SocialConnections we want to count
     *   }
     * })
    **/
    count<T extends SocialConnectionCountArgs>(
      args?: Subset<T, SocialConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialConnectionAggregateArgs>(args: Subset<T, SocialConnectionAggregateArgs>): Prisma.PrismaPromise<GetSocialConnectionAggregateType<T>>

    /**
     * Group by SocialConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialConnectionGroupByArgs['orderBy'] }
        : { orderBy?: SocialConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialConnection model
   */
  readonly fields: SocialConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialConnection model
   */
  interface SocialConnectionFieldRefs {
    readonly id: FieldRef<"SocialConnection", 'String'>
    readonly userId: FieldRef<"SocialConnection", 'String'>
    readonly friendId: FieldRef<"SocialConnection", 'String'>
    readonly status: FieldRef<"SocialConnection", 'ConnectionStatus'>
    readonly relationship: FieldRef<"SocialConnection", 'RelationshipType'>
    readonly strength: FieldRef<"SocialConnection", 'Float'>
    readonly createdAt: FieldRef<"SocialConnection", 'DateTime'>
    readonly lastInteraction: FieldRef<"SocialConnection", 'DateTime'>
    readonly sharedActivities: FieldRef<"SocialConnection", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * SocialConnection findUnique
   */
  export type SocialConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * Filter, which SocialConnection to fetch.
     */
    where: SocialConnectionWhereUniqueInput
  }

  /**
   * SocialConnection findUniqueOrThrow
   */
  export type SocialConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * Filter, which SocialConnection to fetch.
     */
    where: SocialConnectionWhereUniqueInput
  }

  /**
   * SocialConnection findFirst
   */
  export type SocialConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * Filter, which SocialConnection to fetch.
     */
    where?: SocialConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialConnections to fetch.
     */
    orderBy?: SocialConnectionOrderByWithRelationInput | SocialConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialConnections.
     */
    cursor?: SocialConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialConnections.
     */
    distinct?: SocialConnectionScalarFieldEnum | SocialConnectionScalarFieldEnum[]
  }

  /**
   * SocialConnection findFirstOrThrow
   */
  export type SocialConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * Filter, which SocialConnection to fetch.
     */
    where?: SocialConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialConnections to fetch.
     */
    orderBy?: SocialConnectionOrderByWithRelationInput | SocialConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialConnections.
     */
    cursor?: SocialConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialConnections.
     */
    distinct?: SocialConnectionScalarFieldEnum | SocialConnectionScalarFieldEnum[]
  }

  /**
   * SocialConnection findMany
   */
  export type SocialConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * Filter, which SocialConnections to fetch.
     */
    where?: SocialConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialConnections to fetch.
     */
    orderBy?: SocialConnectionOrderByWithRelationInput | SocialConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialConnections.
     */
    cursor?: SocialConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialConnections.
     */
    skip?: number
    distinct?: SocialConnectionScalarFieldEnum | SocialConnectionScalarFieldEnum[]
  }

  /**
   * SocialConnection create
   */
  export type SocialConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialConnection.
     */
    data: XOR<SocialConnectionCreateInput, SocialConnectionUncheckedCreateInput>
  }

  /**
   * SocialConnection createMany
   */
  export type SocialConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialConnections.
     */
    data: SocialConnectionCreateManyInput | SocialConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialConnection createManyAndReturn
   */
  export type SocialConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many SocialConnections.
     */
    data: SocialConnectionCreateManyInput | SocialConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialConnection update
   */
  export type SocialConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialConnection.
     */
    data: XOR<SocialConnectionUpdateInput, SocialConnectionUncheckedUpdateInput>
    /**
     * Choose, which SocialConnection to update.
     */
    where: SocialConnectionWhereUniqueInput
  }

  /**
   * SocialConnection updateMany
   */
  export type SocialConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialConnections.
     */
    data: XOR<SocialConnectionUpdateManyMutationInput, SocialConnectionUncheckedUpdateManyInput>
    /**
     * Filter which SocialConnections to update
     */
    where?: SocialConnectionWhereInput
    /**
     * Limit how many SocialConnections to update.
     */
    limit?: number
  }

  /**
   * SocialConnection updateManyAndReturn
   */
  export type SocialConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * The data used to update SocialConnections.
     */
    data: XOR<SocialConnectionUpdateManyMutationInput, SocialConnectionUncheckedUpdateManyInput>
    /**
     * Filter which SocialConnections to update
     */
    where?: SocialConnectionWhereInput
    /**
     * Limit how many SocialConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialConnection upsert
   */
  export type SocialConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialConnection to update in case it exists.
     */
    where: SocialConnectionWhereUniqueInput
    /**
     * In case the SocialConnection found by the `where` argument doesn't exist, create a new SocialConnection with this data.
     */
    create: XOR<SocialConnectionCreateInput, SocialConnectionUncheckedCreateInput>
    /**
     * In case the SocialConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialConnectionUpdateInput, SocialConnectionUncheckedUpdateInput>
  }

  /**
   * SocialConnection delete
   */
  export type SocialConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
    /**
     * Filter which SocialConnection to delete.
     */
    where: SocialConnectionWhereUniqueInput
  }

  /**
   * SocialConnection deleteMany
   */
  export type SocialConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialConnections to delete
     */
    where?: SocialConnectionWhereInput
    /**
     * Limit how many SocialConnections to delete.
     */
    limit?: number
  }

  /**
   * SocialConnection without action
   */
  export type SocialConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialConnection
     */
    select?: SocialConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialConnection
     */
    omit?: SocialConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialConnectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    emailVerified: 'emailVerified',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    displayName: 'displayName',
    avatar: 'avatar',
    gameRank: 'gameRank',
    mainRole: 'mainRole',
    skillLevel: 'skillLevel',
    timezone: 'timezone',
    bio: 'bio',
    country: 'country',
    language: 'language',
    publicProfile: 'publicProfile'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    coachingStyle: 'coachingStyle',
    coachingIntensity: 'coachingIntensity',
    notificationsEnabled: 'notificationsEnabled',
    emailNotifications: 'emailNotifications',
    pushNotifications: 'pushNotifications',
    profileVisibility: 'profileVisibility',
    shareAnalytics: 'shareAnalytics',
    shareProgress: 'shareProgress',
    allowFriendRequests: 'allowFriendRequests',
    showOnlineStatus: 'showOnlineStatus',
    preferredContentTypes: 'preferredContentTypes',
    learningStyle: 'learningStyle',
    sessionDuration: 'sessionDuration',
    difficulty: 'difficulty',
    topics: 'topics',
    avoidTopics: 'avoidTopics'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const GameplaySessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameMode: 'gameMode',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    status: 'status',
    gameVersion: 'gameVersion',
    server: 'server',
    region: 'region',
    teamComposition: 'teamComposition',
    enemyComposition: 'enemyComposition',
    mapName: 'mapName',
    gameLength: 'gameLength',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameplaySessionScalarFieldEnum = (typeof GameplaySessionScalarFieldEnum)[keyof typeof GameplaySessionScalarFieldEnum]


  export const PerformanceMetricsScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    kills: 'kills',
    deaths: 'deaths',
    assists: 'assists',
    kdaRatio: 'kdaRatio',
    killParticipation: 'killParticipation',
    firstBlood: 'firstBlood',
    goldEarned: 'goldEarned',
    goldSpent: 'goldSpent',
    goldPerMinute: 'goldPerMinute',
    economyEfficiency: 'economyEfficiency',
    itemBuildScore: 'itemBuildScore',
    farmingScore: 'farmingScore',
    objectivesParticipated: 'objectivesParticipated',
    objectivesSecured: 'objectivesSecured',
    objectivesContested: 'objectivesContested',
    participationRate: 'participationRate',
    successRate: 'successRate',
    impactScore: 'impactScore',
    accuracy: 'accuracy',
    reactionTime: 'reactionTime',
    decisionMaking: 'decisionMaking',
    positioning: 'positioning',
    timing: 'timing',
    adaptation: 'adaptation',
    overallScore: 'overallScore',
    rank: 'rank',
    improvement: 'improvement'
  };

  export type PerformanceMetricsScalarFieldEnum = (typeof PerformanceMetricsScalarFieldEnum)[keyof typeof PerformanceMetricsScalarFieldEnum]


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    analysisType: 'analysisType',
    category: 'category',
    metrics: 'metrics',
    insights: 'insights',
    recommendations: 'recommendations',
    confidence: 'confidence',
    processingTime: 'processingTime',
    createdAt: 'createdAt'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const CoachingHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    coachingType: 'coachingType',
    message: 'message',
    category: 'category',
    priority: 'priority',
    deliveryTime: 'deliveryTime',
    userResponse: 'userResponse',
    effectiveness: 'effectiveness',
    feedback: 'feedback',
    createdAt: 'createdAt'
  };

  export type CoachingHistoryScalarFieldEnum = (typeof CoachingHistoryScalarFieldEnum)[keyof typeof CoachingHistoryScalarFieldEnum]


  export const LearningProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    pathId: 'pathId',
    moduleId: 'moduleId',
    status: 'status',
    progress: 'progress',
    timeSpent: 'timeSpent',
    score: 'score',
    attempts: 'attempts',
    lastAccessed: 'lastAccessed',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningProgressScalarFieldEnum = (typeof LearningProgressScalarFieldEnum)[keyof typeof LearningProgressScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    name: 'name',
    description: 'description',
    category: 'category',
    type: 'type',
    rarity: 'rarity',
    progress: 'progress',
    maxProgress: 'maxProgress',
    completed: 'completed',
    unlockedAt: 'unlockedAt',
    createdAt: 'createdAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const SocialConnectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    status: 'status',
    relationship: 'relationship',
    strength: 'strength',
    createdAt: 'createdAt',
    lastInteraction: 'lastInteraction',
    sharedActivities: 'sharedActivities'
  };

  export type SocialConnectionScalarFieldEnum = (typeof SocialConnectionScalarFieldEnum)[keyof typeof SocialConnectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SkillLevel'
   */
  export type EnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel'>
    


  /**
   * Reference to a field of type 'SkillLevel[]'
   */
  export type ListEnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel[]'>
    


  /**
   * Reference to a field of type 'CoachingStyle'
   */
  export type EnumCoachingStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingStyle'>
    


  /**
   * Reference to a field of type 'CoachingStyle[]'
   */
  export type ListEnumCoachingStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingStyle[]'>
    


  /**
   * Reference to a field of type 'Intensity'
   */
  export type EnumIntensityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intensity'>
    


  /**
   * Reference to a field of type 'Intensity[]'
   */
  export type ListEnumIntensityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intensity[]'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'LearningStyle'
   */
  export type EnumLearningStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LearningStyle'>
    


  /**
   * Reference to a field of type 'LearningStyle[]'
   */
  export type ListEnumLearningStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LearningStyle[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AnalysisType'
   */
  export type EnumAnalysisTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisType'>
    


  /**
   * Reference to a field of type 'AnalysisType[]'
   */
  export type ListEnumAnalysisTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisType[]'>
    


  /**
   * Reference to a field of type 'AnalyticsCategory'
   */
  export type EnumAnalyticsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalyticsCategory'>
    


  /**
   * Reference to a field of type 'AnalyticsCategory[]'
   */
  export type ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalyticsCategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'CoachingType'
   */
  export type EnumCoachingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingType'>
    


  /**
   * Reference to a field of type 'CoachingType[]'
   */
  export type ListEnumCoachingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingType[]'>
    


  /**
   * Reference to a field of type 'CoachingCategory'
   */
  export type EnumCoachingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingCategory'>
    


  /**
   * Reference to a field of type 'CoachingCategory[]'
   */
  export type ListEnumCoachingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingCategory[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    


  /**
   * Reference to a field of type 'ProgressStatus[]'
   */
  export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>
    


  /**
   * Reference to a field of type 'AchievementType'
   */
  export type EnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType'>
    


  /**
   * Reference to a field of type 'AchievementType[]'
   */
  export type ListEnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType[]'>
    


  /**
   * Reference to a field of type 'Rarity'
   */
  export type EnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity'>
    


  /**
   * Reference to a field of type 'Rarity[]'
   */
  export type ListEnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity[]'>
    


  /**
   * Reference to a field of type 'ConnectionStatus'
   */
  export type EnumConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionStatus'>
    


  /**
   * Reference to a field of type 'ConnectionStatus[]'
   */
  export type ListEnumConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionStatus[]'>
    


  /**
   * Reference to a field of type 'RelationshipType'
   */
  export type EnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType'>
    


  /**
   * Reference to a field of type 'RelationshipType[]'
   */
  export type ListEnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    sessions?: GameplaySessionListRelationFilter
    analytics?: AnalyticsListRelationFilter
    coachingHistory?: CoachingHistoryListRelationFilter
    learningProgress?: LearningProgressListRelationFilter
    achievements?: AchievementListRelationFilter
    socialConnections?: SocialConnectionListRelationFilter
    friendConnections?: SocialConnectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    profile?: UserProfileOrderByWithRelationInput
    preferences?: UserPreferencesOrderByWithRelationInput
    sessions?: GameplaySessionOrderByRelationAggregateInput
    analytics?: AnalyticsOrderByRelationAggregateInput
    coachingHistory?: CoachingHistoryOrderByRelationAggregateInput
    learningProgress?: LearningProgressOrderByRelationAggregateInput
    achievements?: AchievementOrderByRelationAggregateInput
    socialConnections?: SocialConnectionOrderByRelationAggregateInput
    friendConnections?: SocialConnectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    sessions?: GameplaySessionListRelationFilter
    analytics?: AnalyticsListRelationFilter
    coachingHistory?: CoachingHistoryListRelationFilter
    learningProgress?: LearningProgressListRelationFilter
    achievements?: AchievementListRelationFilter
    socialConnections?: SocialConnectionListRelationFilter
    friendConnections?: SocialConnectionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    displayName?: StringFilter<"UserProfile"> | string
    avatar?: StringNullableFilter<"UserProfile"> | string | null
    gameRank?: StringFilter<"UserProfile"> | string
    mainRole?: StringFilter<"UserProfile"> | string
    skillLevel?: EnumSkillLevelFilter<"UserProfile"> | $Enums.SkillLevel
    timezone?: StringFilter<"UserProfile"> | string
    bio?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    language?: StringFilter<"UserProfile"> | string
    publicProfile?: BoolFilter<"UserProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    gameRank?: SortOrder
    mainRole?: SortOrder
    skillLevel?: SortOrder
    timezone?: SortOrder
    bio?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    language?: SortOrder
    publicProfile?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    displayName?: StringFilter<"UserProfile"> | string
    avatar?: StringNullableFilter<"UserProfile"> | string | null
    gameRank?: StringFilter<"UserProfile"> | string
    mainRole?: StringFilter<"UserProfile"> | string
    skillLevel?: EnumSkillLevelFilter<"UserProfile"> | $Enums.SkillLevel
    timezone?: StringFilter<"UserProfile"> | string
    bio?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    language?: StringFilter<"UserProfile"> | string
    publicProfile?: BoolFilter<"UserProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    gameRank?: SortOrder
    mainRole?: SortOrder
    skillLevel?: SortOrder
    timezone?: SortOrder
    bio?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    language?: SortOrder
    publicProfile?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    displayName?: StringWithAggregatesFilter<"UserProfile"> | string
    avatar?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    gameRank?: StringWithAggregatesFilter<"UserProfile"> | string
    mainRole?: StringWithAggregatesFilter<"UserProfile"> | string
    skillLevel?: EnumSkillLevelWithAggregatesFilter<"UserProfile"> | $Enums.SkillLevel
    timezone?: StringWithAggregatesFilter<"UserProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    country?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    language?: StringWithAggregatesFilter<"UserProfile"> | string
    publicProfile?: BoolWithAggregatesFilter<"UserProfile"> | boolean
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    coachingStyle?: EnumCoachingStyleFilter<"UserPreferences"> | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFilter<"UserPreferences"> | $Enums.Intensity
    notificationsEnabled?: BoolFilter<"UserPreferences"> | boolean
    emailNotifications?: BoolFilter<"UserPreferences"> | boolean
    pushNotifications?: BoolFilter<"UserPreferences"> | boolean
    profileVisibility?: EnumVisibilityFilter<"UserPreferences"> | $Enums.Visibility
    shareAnalytics?: BoolFilter<"UserPreferences"> | boolean
    shareProgress?: BoolFilter<"UserPreferences"> | boolean
    allowFriendRequests?: BoolFilter<"UserPreferences"> | boolean
    showOnlineStatus?: BoolFilter<"UserPreferences"> | boolean
    preferredContentTypes?: StringNullableListFilter<"UserPreferences">
    learningStyle?: EnumLearningStyleFilter<"UserPreferences"> | $Enums.LearningStyle
    sessionDuration?: IntFilter<"UserPreferences"> | number
    difficulty?: EnumSkillLevelFilter<"UserPreferences"> | $Enums.SkillLevel
    topics?: StringNullableListFilter<"UserPreferences">
    avoidTopics?: StringNullableListFilter<"UserPreferences">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    coachingStyle?: SortOrder
    coachingIntensity?: SortOrder
    notificationsEnabled?: SortOrder
    emailNotifications?: SortOrder
    pushNotifications?: SortOrder
    profileVisibility?: SortOrder
    shareAnalytics?: SortOrder
    shareProgress?: SortOrder
    allowFriendRequests?: SortOrder
    showOnlineStatus?: SortOrder
    preferredContentTypes?: SortOrder
    learningStyle?: SortOrder
    sessionDuration?: SortOrder
    difficulty?: SortOrder
    topics?: SortOrder
    avoidTopics?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    coachingStyle?: EnumCoachingStyleFilter<"UserPreferences"> | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFilter<"UserPreferences"> | $Enums.Intensity
    notificationsEnabled?: BoolFilter<"UserPreferences"> | boolean
    emailNotifications?: BoolFilter<"UserPreferences"> | boolean
    pushNotifications?: BoolFilter<"UserPreferences"> | boolean
    profileVisibility?: EnumVisibilityFilter<"UserPreferences"> | $Enums.Visibility
    shareAnalytics?: BoolFilter<"UserPreferences"> | boolean
    shareProgress?: BoolFilter<"UserPreferences"> | boolean
    allowFriendRequests?: BoolFilter<"UserPreferences"> | boolean
    showOnlineStatus?: BoolFilter<"UserPreferences"> | boolean
    preferredContentTypes?: StringNullableListFilter<"UserPreferences">
    learningStyle?: EnumLearningStyleFilter<"UserPreferences"> | $Enums.LearningStyle
    sessionDuration?: IntFilter<"UserPreferences"> | number
    difficulty?: EnumSkillLevelFilter<"UserPreferences"> | $Enums.SkillLevel
    topics?: StringNullableListFilter<"UserPreferences">
    avoidTopics?: StringNullableListFilter<"UserPreferences">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    coachingStyle?: SortOrder
    coachingIntensity?: SortOrder
    notificationsEnabled?: SortOrder
    emailNotifications?: SortOrder
    pushNotifications?: SortOrder
    profileVisibility?: SortOrder
    shareAnalytics?: SortOrder
    shareProgress?: SortOrder
    allowFriendRequests?: SortOrder
    showOnlineStatus?: SortOrder
    preferredContentTypes?: SortOrder
    learningStyle?: SortOrder
    sessionDuration?: SortOrder
    difficulty?: SortOrder
    topics?: SortOrder
    avoidTopics?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    coachingStyle?: EnumCoachingStyleWithAggregatesFilter<"UserPreferences"> | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityWithAggregatesFilter<"UserPreferences"> | $Enums.Intensity
    notificationsEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    emailNotifications?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    pushNotifications?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    profileVisibility?: EnumVisibilityWithAggregatesFilter<"UserPreferences"> | $Enums.Visibility
    shareAnalytics?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    shareProgress?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    allowFriendRequests?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    showOnlineStatus?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    preferredContentTypes?: StringNullableListFilter<"UserPreferences">
    learningStyle?: EnumLearningStyleWithAggregatesFilter<"UserPreferences"> | $Enums.LearningStyle
    sessionDuration?: IntWithAggregatesFilter<"UserPreferences"> | number
    difficulty?: EnumSkillLevelWithAggregatesFilter<"UserPreferences"> | $Enums.SkillLevel
    topics?: StringNullableListFilter<"UserPreferences">
    avoidTopics?: StringNullableListFilter<"UserPreferences">
  }

  export type GameplaySessionWhereInput = {
    AND?: GameplaySessionWhereInput | GameplaySessionWhereInput[]
    OR?: GameplaySessionWhereInput[]
    NOT?: GameplaySessionWhereInput | GameplaySessionWhereInput[]
    id?: StringFilter<"GameplaySession"> | string
    userId?: StringFilter<"GameplaySession"> | string
    gameMode?: StringFilter<"GameplaySession"> | string
    startTime?: DateTimeFilter<"GameplaySession"> | Date | string
    endTime?: DateTimeNullableFilter<"GameplaySession"> | Date | string | null
    duration?: IntNullableFilter<"GameplaySession"> | number | null
    status?: EnumSessionStatusFilter<"GameplaySession"> | $Enums.SessionStatus
    gameVersion?: StringFilter<"GameplaySession"> | string
    server?: StringFilter<"GameplaySession"> | string
    region?: StringFilter<"GameplaySession"> | string
    teamComposition?: StringNullableListFilter<"GameplaySession">
    enemyComposition?: StringNullableListFilter<"GameplaySession">
    mapName?: StringFilter<"GameplaySession"> | string
    gameLength?: IntNullableFilter<"GameplaySession"> | number | null
    createdAt?: DateTimeFilter<"GameplaySession"> | Date | string
    updatedAt?: DateTimeFilter<"GameplaySession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    performanceMetrics?: XOR<PerformanceMetricsNullableScalarRelationFilter, PerformanceMetricsWhereInput> | null
    analytics?: AnalyticsListRelationFilter
    coachingHistory?: CoachingHistoryListRelationFilter
    learningProgress?: LearningProgressListRelationFilter
  }

  export type GameplaySessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    gameVersion?: SortOrder
    server?: SortOrder
    region?: SortOrder
    teamComposition?: SortOrder
    enemyComposition?: SortOrder
    mapName?: SortOrder
    gameLength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    performanceMetrics?: PerformanceMetricsOrderByWithRelationInput
    analytics?: AnalyticsOrderByRelationAggregateInput
    coachingHistory?: CoachingHistoryOrderByRelationAggregateInput
    learningProgress?: LearningProgressOrderByRelationAggregateInput
  }

  export type GameplaySessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameplaySessionWhereInput | GameplaySessionWhereInput[]
    OR?: GameplaySessionWhereInput[]
    NOT?: GameplaySessionWhereInput | GameplaySessionWhereInput[]
    userId?: StringFilter<"GameplaySession"> | string
    gameMode?: StringFilter<"GameplaySession"> | string
    startTime?: DateTimeFilter<"GameplaySession"> | Date | string
    endTime?: DateTimeNullableFilter<"GameplaySession"> | Date | string | null
    duration?: IntNullableFilter<"GameplaySession"> | number | null
    status?: EnumSessionStatusFilter<"GameplaySession"> | $Enums.SessionStatus
    gameVersion?: StringFilter<"GameplaySession"> | string
    server?: StringFilter<"GameplaySession"> | string
    region?: StringFilter<"GameplaySession"> | string
    teamComposition?: StringNullableListFilter<"GameplaySession">
    enemyComposition?: StringNullableListFilter<"GameplaySession">
    mapName?: StringFilter<"GameplaySession"> | string
    gameLength?: IntNullableFilter<"GameplaySession"> | number | null
    createdAt?: DateTimeFilter<"GameplaySession"> | Date | string
    updatedAt?: DateTimeFilter<"GameplaySession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    performanceMetrics?: XOR<PerformanceMetricsNullableScalarRelationFilter, PerformanceMetricsWhereInput> | null
    analytics?: AnalyticsListRelationFilter
    coachingHistory?: CoachingHistoryListRelationFilter
    learningProgress?: LearningProgressListRelationFilter
  }, "id">

  export type GameplaySessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    gameVersion?: SortOrder
    server?: SortOrder
    region?: SortOrder
    teamComposition?: SortOrder
    enemyComposition?: SortOrder
    mapName?: SortOrder
    gameLength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameplaySessionCountOrderByAggregateInput
    _avg?: GameplaySessionAvgOrderByAggregateInput
    _max?: GameplaySessionMaxOrderByAggregateInput
    _min?: GameplaySessionMinOrderByAggregateInput
    _sum?: GameplaySessionSumOrderByAggregateInput
  }

  export type GameplaySessionScalarWhereWithAggregatesInput = {
    AND?: GameplaySessionScalarWhereWithAggregatesInput | GameplaySessionScalarWhereWithAggregatesInput[]
    OR?: GameplaySessionScalarWhereWithAggregatesInput[]
    NOT?: GameplaySessionScalarWhereWithAggregatesInput | GameplaySessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameplaySession"> | string
    userId?: StringWithAggregatesFilter<"GameplaySession"> | string
    gameMode?: StringWithAggregatesFilter<"GameplaySession"> | string
    startTime?: DateTimeWithAggregatesFilter<"GameplaySession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"GameplaySession"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"GameplaySession"> | number | null
    status?: EnumSessionStatusWithAggregatesFilter<"GameplaySession"> | $Enums.SessionStatus
    gameVersion?: StringWithAggregatesFilter<"GameplaySession"> | string
    server?: StringWithAggregatesFilter<"GameplaySession"> | string
    region?: StringWithAggregatesFilter<"GameplaySession"> | string
    teamComposition?: StringNullableListFilter<"GameplaySession">
    enemyComposition?: StringNullableListFilter<"GameplaySession">
    mapName?: StringWithAggregatesFilter<"GameplaySession"> | string
    gameLength?: IntNullableWithAggregatesFilter<"GameplaySession"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"GameplaySession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameplaySession"> | Date | string
  }

  export type PerformanceMetricsWhereInput = {
    AND?: PerformanceMetricsWhereInput | PerformanceMetricsWhereInput[]
    OR?: PerformanceMetricsWhereInput[]
    NOT?: PerformanceMetricsWhereInput | PerformanceMetricsWhereInput[]
    id?: StringFilter<"PerformanceMetrics"> | string
    sessionId?: StringFilter<"PerformanceMetrics"> | string
    kills?: IntFilter<"PerformanceMetrics"> | number
    deaths?: IntFilter<"PerformanceMetrics"> | number
    assists?: IntFilter<"PerformanceMetrics"> | number
    kdaRatio?: FloatFilter<"PerformanceMetrics"> | number
    killParticipation?: FloatFilter<"PerformanceMetrics"> | number
    firstBlood?: BoolFilter<"PerformanceMetrics"> | boolean
    goldEarned?: IntFilter<"PerformanceMetrics"> | number
    goldSpent?: IntFilter<"PerformanceMetrics"> | number
    goldPerMinute?: FloatFilter<"PerformanceMetrics"> | number
    economyEfficiency?: FloatFilter<"PerformanceMetrics"> | number
    itemBuildScore?: FloatFilter<"PerformanceMetrics"> | number
    farmingScore?: FloatFilter<"PerformanceMetrics"> | number
    objectivesParticipated?: IntFilter<"PerformanceMetrics"> | number
    objectivesSecured?: IntFilter<"PerformanceMetrics"> | number
    objectivesContested?: IntFilter<"PerformanceMetrics"> | number
    participationRate?: FloatFilter<"PerformanceMetrics"> | number
    successRate?: FloatFilter<"PerformanceMetrics"> | number
    impactScore?: FloatFilter<"PerformanceMetrics"> | number
    accuracy?: FloatFilter<"PerformanceMetrics"> | number
    reactionTime?: FloatFilter<"PerformanceMetrics"> | number
    decisionMaking?: FloatFilter<"PerformanceMetrics"> | number
    positioning?: FloatFilter<"PerformanceMetrics"> | number
    timing?: FloatFilter<"PerformanceMetrics"> | number
    adaptation?: FloatFilter<"PerformanceMetrics"> | number
    overallScore?: FloatFilter<"PerformanceMetrics"> | number
    rank?: StringFilter<"PerformanceMetrics"> | string
    improvement?: FloatFilter<"PerformanceMetrics"> | number
    session?: XOR<GameplaySessionScalarRelationFilter, GameplaySessionWhereInput>
  }

  export type PerformanceMetricsOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    firstBlood?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    improvement?: SortOrder
    session?: GameplaySessionOrderByWithRelationInput
  }

  export type PerformanceMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: PerformanceMetricsWhereInput | PerformanceMetricsWhereInput[]
    OR?: PerformanceMetricsWhereInput[]
    NOT?: PerformanceMetricsWhereInput | PerformanceMetricsWhereInput[]
    kills?: IntFilter<"PerformanceMetrics"> | number
    deaths?: IntFilter<"PerformanceMetrics"> | number
    assists?: IntFilter<"PerformanceMetrics"> | number
    kdaRatio?: FloatFilter<"PerformanceMetrics"> | number
    killParticipation?: FloatFilter<"PerformanceMetrics"> | number
    firstBlood?: BoolFilter<"PerformanceMetrics"> | boolean
    goldEarned?: IntFilter<"PerformanceMetrics"> | number
    goldSpent?: IntFilter<"PerformanceMetrics"> | number
    goldPerMinute?: FloatFilter<"PerformanceMetrics"> | number
    economyEfficiency?: FloatFilter<"PerformanceMetrics"> | number
    itemBuildScore?: FloatFilter<"PerformanceMetrics"> | number
    farmingScore?: FloatFilter<"PerformanceMetrics"> | number
    objectivesParticipated?: IntFilter<"PerformanceMetrics"> | number
    objectivesSecured?: IntFilter<"PerformanceMetrics"> | number
    objectivesContested?: IntFilter<"PerformanceMetrics"> | number
    participationRate?: FloatFilter<"PerformanceMetrics"> | number
    successRate?: FloatFilter<"PerformanceMetrics"> | number
    impactScore?: FloatFilter<"PerformanceMetrics"> | number
    accuracy?: FloatFilter<"PerformanceMetrics"> | number
    reactionTime?: FloatFilter<"PerformanceMetrics"> | number
    decisionMaking?: FloatFilter<"PerformanceMetrics"> | number
    positioning?: FloatFilter<"PerformanceMetrics"> | number
    timing?: FloatFilter<"PerformanceMetrics"> | number
    adaptation?: FloatFilter<"PerformanceMetrics"> | number
    overallScore?: FloatFilter<"PerformanceMetrics"> | number
    rank?: StringFilter<"PerformanceMetrics"> | string
    improvement?: FloatFilter<"PerformanceMetrics"> | number
    session?: XOR<GameplaySessionScalarRelationFilter, GameplaySessionWhereInput>
  }, "id" | "sessionId">

  export type PerformanceMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    firstBlood?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    improvement?: SortOrder
    _count?: PerformanceMetricsCountOrderByAggregateInput
    _avg?: PerformanceMetricsAvgOrderByAggregateInput
    _max?: PerformanceMetricsMaxOrderByAggregateInput
    _min?: PerformanceMetricsMinOrderByAggregateInput
    _sum?: PerformanceMetricsSumOrderByAggregateInput
  }

  export type PerformanceMetricsScalarWhereWithAggregatesInput = {
    AND?: PerformanceMetricsScalarWhereWithAggregatesInput | PerformanceMetricsScalarWhereWithAggregatesInput[]
    OR?: PerformanceMetricsScalarWhereWithAggregatesInput[]
    NOT?: PerformanceMetricsScalarWhereWithAggregatesInput | PerformanceMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PerformanceMetrics"> | string
    sessionId?: StringWithAggregatesFilter<"PerformanceMetrics"> | string
    kills?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    deaths?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    assists?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    kdaRatio?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    killParticipation?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    firstBlood?: BoolWithAggregatesFilter<"PerformanceMetrics"> | boolean
    goldEarned?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    goldSpent?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    goldPerMinute?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    economyEfficiency?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    itemBuildScore?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    farmingScore?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    objectivesParticipated?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    objectivesSecured?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    objectivesContested?: IntWithAggregatesFilter<"PerformanceMetrics"> | number
    participationRate?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    successRate?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    impactScore?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    accuracy?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    reactionTime?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    decisionMaking?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    positioning?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    timing?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    adaptation?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    overallScore?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
    rank?: StringWithAggregatesFilter<"PerformanceMetrics"> | string
    improvement?: FloatWithAggregatesFilter<"PerformanceMetrics"> | number
  }

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: StringFilter<"Analytics"> | string
    userId?: StringFilter<"Analytics"> | string
    sessionId?: StringNullableFilter<"Analytics"> | string | null
    analysisType?: EnumAnalysisTypeFilter<"Analytics"> | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFilter<"Analytics"> | $Enums.AnalyticsCategory
    metrics?: JsonFilter<"Analytics">
    insights?: JsonFilter<"Analytics">
    recommendations?: StringNullableListFilter<"Analytics">
    confidence?: FloatFilter<"Analytics"> | number
    processingTime?: IntFilter<"Analytics"> | number
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<GameplaySessionNullableScalarRelationFilter, GameplaySessionWhereInput> | null
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    analysisType?: SortOrder
    category?: SortOrder
    metrics?: SortOrder
    insights?: SortOrder
    recommendations?: SortOrder
    confidence?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    session?: GameplaySessionOrderByWithRelationInput
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    userId?: StringFilter<"Analytics"> | string
    sessionId?: StringNullableFilter<"Analytics"> | string | null
    analysisType?: EnumAnalysisTypeFilter<"Analytics"> | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFilter<"Analytics"> | $Enums.AnalyticsCategory
    metrics?: JsonFilter<"Analytics">
    insights?: JsonFilter<"Analytics">
    recommendations?: StringNullableListFilter<"Analytics">
    confidence?: FloatFilter<"Analytics"> | number
    processingTime?: IntFilter<"Analytics"> | number
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<GameplaySessionNullableScalarRelationFilter, GameplaySessionWhereInput> | null
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    analysisType?: SortOrder
    category?: SortOrder
    metrics?: SortOrder
    insights?: SortOrder
    recommendations?: SortOrder
    confidence?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analytics"> | string
    userId?: StringWithAggregatesFilter<"Analytics"> | string
    sessionId?: StringNullableWithAggregatesFilter<"Analytics"> | string | null
    analysisType?: EnumAnalysisTypeWithAggregatesFilter<"Analytics"> | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryWithAggregatesFilter<"Analytics"> | $Enums.AnalyticsCategory
    metrics?: JsonWithAggregatesFilter<"Analytics">
    insights?: JsonWithAggregatesFilter<"Analytics">
    recommendations?: StringNullableListFilter<"Analytics">
    confidence?: FloatWithAggregatesFilter<"Analytics"> | number
    processingTime?: IntWithAggregatesFilter<"Analytics"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type CoachingHistoryWhereInput = {
    AND?: CoachingHistoryWhereInput | CoachingHistoryWhereInput[]
    OR?: CoachingHistoryWhereInput[]
    NOT?: CoachingHistoryWhereInput | CoachingHistoryWhereInput[]
    id?: StringFilter<"CoachingHistory"> | string
    userId?: StringFilter<"CoachingHistory"> | string
    sessionId?: StringNullableFilter<"CoachingHistory"> | string | null
    coachingType?: EnumCoachingTypeFilter<"CoachingHistory"> | $Enums.CoachingType
    message?: StringFilter<"CoachingHistory"> | string
    category?: EnumCoachingCategoryFilter<"CoachingHistory"> | $Enums.CoachingCategory
    priority?: EnumPriorityFilter<"CoachingHistory"> | $Enums.Priority
    deliveryTime?: IntFilter<"CoachingHistory"> | number
    userResponse?: StringNullableFilter<"CoachingHistory"> | string | null
    effectiveness?: FloatNullableFilter<"CoachingHistory"> | number | null
    feedback?: IntNullableFilter<"CoachingHistory"> | number | null
    createdAt?: DateTimeFilter<"CoachingHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<GameplaySessionNullableScalarRelationFilter, GameplaySessionWhereInput> | null
  }

  export type CoachingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    coachingType?: SortOrder
    message?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    deliveryTime?: SortOrder
    userResponse?: SortOrderInput | SortOrder
    effectiveness?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    session?: GameplaySessionOrderByWithRelationInput
  }

  export type CoachingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoachingHistoryWhereInput | CoachingHistoryWhereInput[]
    OR?: CoachingHistoryWhereInput[]
    NOT?: CoachingHistoryWhereInput | CoachingHistoryWhereInput[]
    userId?: StringFilter<"CoachingHistory"> | string
    sessionId?: StringNullableFilter<"CoachingHistory"> | string | null
    coachingType?: EnumCoachingTypeFilter<"CoachingHistory"> | $Enums.CoachingType
    message?: StringFilter<"CoachingHistory"> | string
    category?: EnumCoachingCategoryFilter<"CoachingHistory"> | $Enums.CoachingCategory
    priority?: EnumPriorityFilter<"CoachingHistory"> | $Enums.Priority
    deliveryTime?: IntFilter<"CoachingHistory"> | number
    userResponse?: StringNullableFilter<"CoachingHistory"> | string | null
    effectiveness?: FloatNullableFilter<"CoachingHistory"> | number | null
    feedback?: IntNullableFilter<"CoachingHistory"> | number | null
    createdAt?: DateTimeFilter<"CoachingHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<GameplaySessionNullableScalarRelationFilter, GameplaySessionWhereInput> | null
  }, "id">

  export type CoachingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    coachingType?: SortOrder
    message?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    deliveryTime?: SortOrder
    userResponse?: SortOrderInput | SortOrder
    effectiveness?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CoachingHistoryCountOrderByAggregateInput
    _avg?: CoachingHistoryAvgOrderByAggregateInput
    _max?: CoachingHistoryMaxOrderByAggregateInput
    _min?: CoachingHistoryMinOrderByAggregateInput
    _sum?: CoachingHistorySumOrderByAggregateInput
  }

  export type CoachingHistoryScalarWhereWithAggregatesInput = {
    AND?: CoachingHistoryScalarWhereWithAggregatesInput | CoachingHistoryScalarWhereWithAggregatesInput[]
    OR?: CoachingHistoryScalarWhereWithAggregatesInput[]
    NOT?: CoachingHistoryScalarWhereWithAggregatesInput | CoachingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachingHistory"> | string
    userId?: StringWithAggregatesFilter<"CoachingHistory"> | string
    sessionId?: StringNullableWithAggregatesFilter<"CoachingHistory"> | string | null
    coachingType?: EnumCoachingTypeWithAggregatesFilter<"CoachingHistory"> | $Enums.CoachingType
    message?: StringWithAggregatesFilter<"CoachingHistory"> | string
    category?: EnumCoachingCategoryWithAggregatesFilter<"CoachingHistory"> | $Enums.CoachingCategory
    priority?: EnumPriorityWithAggregatesFilter<"CoachingHistory"> | $Enums.Priority
    deliveryTime?: IntWithAggregatesFilter<"CoachingHistory"> | number
    userResponse?: StringNullableWithAggregatesFilter<"CoachingHistory"> | string | null
    effectiveness?: FloatNullableWithAggregatesFilter<"CoachingHistory"> | number | null
    feedback?: IntNullableWithAggregatesFilter<"CoachingHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CoachingHistory"> | Date | string
  }

  export type LearningProgressWhereInput = {
    AND?: LearningProgressWhereInput | LearningProgressWhereInput[]
    OR?: LearningProgressWhereInput[]
    NOT?: LearningProgressWhereInput | LearningProgressWhereInput[]
    id?: StringFilter<"LearningProgress"> | string
    userId?: StringFilter<"LearningProgress"> | string
    contentId?: StringFilter<"LearningProgress"> | string
    pathId?: StringNullableFilter<"LearningProgress"> | string | null
    moduleId?: StringNullableFilter<"LearningProgress"> | string | null
    status?: EnumProgressStatusFilter<"LearningProgress"> | $Enums.ProgressStatus
    progress?: FloatFilter<"LearningProgress"> | number
    timeSpent?: IntFilter<"LearningProgress"> | number
    score?: FloatNullableFilter<"LearningProgress"> | number | null
    attempts?: IntFilter<"LearningProgress"> | number
    lastAccessed?: DateTimeFilter<"LearningProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"LearningProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LearningProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<GameplaySessionNullableScalarRelationFilter, GameplaySessionWhereInput> | null
  }

  export type LearningProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    pathId?: SortOrderInput | SortOrder
    moduleId?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastAccessed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    session?: GameplaySessionOrderByWithRelationInput
  }

  export type LearningProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningProgressWhereInput | LearningProgressWhereInput[]
    OR?: LearningProgressWhereInput[]
    NOT?: LearningProgressWhereInput | LearningProgressWhereInput[]
    userId?: StringFilter<"LearningProgress"> | string
    contentId?: StringFilter<"LearningProgress"> | string
    pathId?: StringNullableFilter<"LearningProgress"> | string | null
    moduleId?: StringNullableFilter<"LearningProgress"> | string | null
    status?: EnumProgressStatusFilter<"LearningProgress"> | $Enums.ProgressStatus
    progress?: FloatFilter<"LearningProgress"> | number
    timeSpent?: IntFilter<"LearningProgress"> | number
    score?: FloatNullableFilter<"LearningProgress"> | number | null
    attempts?: IntFilter<"LearningProgress"> | number
    lastAccessed?: DateTimeFilter<"LearningProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"LearningProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LearningProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<GameplaySessionNullableScalarRelationFilter, GameplaySessionWhereInput> | null
  }, "id">

  export type LearningProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    pathId?: SortOrderInput | SortOrder
    moduleId?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastAccessed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningProgressCountOrderByAggregateInput
    _avg?: LearningProgressAvgOrderByAggregateInput
    _max?: LearningProgressMaxOrderByAggregateInput
    _min?: LearningProgressMinOrderByAggregateInput
    _sum?: LearningProgressSumOrderByAggregateInput
  }

  export type LearningProgressScalarWhereWithAggregatesInput = {
    AND?: LearningProgressScalarWhereWithAggregatesInput | LearningProgressScalarWhereWithAggregatesInput[]
    OR?: LearningProgressScalarWhereWithAggregatesInput[]
    NOT?: LearningProgressScalarWhereWithAggregatesInput | LearningProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningProgress"> | string
    userId?: StringWithAggregatesFilter<"LearningProgress"> | string
    contentId?: StringWithAggregatesFilter<"LearningProgress"> | string
    pathId?: StringNullableWithAggregatesFilter<"LearningProgress"> | string | null
    moduleId?: StringNullableWithAggregatesFilter<"LearningProgress"> | string | null
    status?: EnumProgressStatusWithAggregatesFilter<"LearningProgress"> | $Enums.ProgressStatus
    progress?: FloatWithAggregatesFilter<"LearningProgress"> | number
    timeSpent?: IntWithAggregatesFilter<"LearningProgress"> | number
    score?: FloatNullableWithAggregatesFilter<"LearningProgress"> | number | null
    attempts?: IntWithAggregatesFilter<"LearningProgress"> | number
    lastAccessed?: DateTimeWithAggregatesFilter<"LearningProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"LearningProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningProgress"> | Date | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    userId?: StringFilter<"Achievement"> | string
    achievementId?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    category?: StringFilter<"Achievement"> | string
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    rarity?: EnumRarityFilter<"Achievement"> | $Enums.Rarity
    progress?: FloatFilter<"Achievement"> | number
    maxProgress?: FloatFilter<"Achievement"> | number
    completed?: BoolFilter<"Achievement"> | boolean
    unlockedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    progress?: SortOrder
    maxProgress?: SortOrder
    completed?: SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_achievementId?: AchievementUserIdAchievementIdCompoundUniqueInput
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    userId?: StringFilter<"Achievement"> | string
    achievementId?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    category?: StringFilter<"Achievement"> | string
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    rarity?: EnumRarityFilter<"Achievement"> | $Enums.Rarity
    progress?: FloatFilter<"Achievement"> | number
    maxProgress?: FloatFilter<"Achievement"> | number
    completed?: BoolFilter<"Achievement"> | boolean
    unlockedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_achievementId">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    progress?: SortOrder
    maxProgress?: SortOrder
    completed?: SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    userId?: StringWithAggregatesFilter<"Achievement"> | string
    achievementId?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    category?: StringWithAggregatesFilter<"Achievement"> | string
    type?: EnumAchievementTypeWithAggregatesFilter<"Achievement"> | $Enums.AchievementType
    rarity?: EnumRarityWithAggregatesFilter<"Achievement"> | $Enums.Rarity
    progress?: FloatWithAggregatesFilter<"Achievement"> | number
    maxProgress?: FloatWithAggregatesFilter<"Achievement"> | number
    completed?: BoolWithAggregatesFilter<"Achievement"> | boolean
    unlockedAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type SocialConnectionWhereInput = {
    AND?: SocialConnectionWhereInput | SocialConnectionWhereInput[]
    OR?: SocialConnectionWhereInput[]
    NOT?: SocialConnectionWhereInput | SocialConnectionWhereInput[]
    id?: StringFilter<"SocialConnection"> | string
    userId?: StringFilter<"SocialConnection"> | string
    friendId?: StringFilter<"SocialConnection"> | string
    status?: EnumConnectionStatusFilter<"SocialConnection"> | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFilter<"SocialConnection"> | $Enums.RelationshipType
    strength?: FloatFilter<"SocialConnection"> | number
    createdAt?: DateTimeFilter<"SocialConnection"> | Date | string
    lastInteraction?: DateTimeNullableFilter<"SocialConnection"> | Date | string | null
    sharedActivities?: StringNullableListFilter<"SocialConnection">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SocialConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    relationship?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    lastInteraction?: SortOrderInput | SortOrder
    sharedActivities?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type SocialConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_friendId?: SocialConnectionUserIdFriendIdCompoundUniqueInput
    AND?: SocialConnectionWhereInput | SocialConnectionWhereInput[]
    OR?: SocialConnectionWhereInput[]
    NOT?: SocialConnectionWhereInput | SocialConnectionWhereInput[]
    userId?: StringFilter<"SocialConnection"> | string
    friendId?: StringFilter<"SocialConnection"> | string
    status?: EnumConnectionStatusFilter<"SocialConnection"> | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFilter<"SocialConnection"> | $Enums.RelationshipType
    strength?: FloatFilter<"SocialConnection"> | number
    createdAt?: DateTimeFilter<"SocialConnection"> | Date | string
    lastInteraction?: DateTimeNullableFilter<"SocialConnection"> | Date | string | null
    sharedActivities?: StringNullableListFilter<"SocialConnection">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_friendId">

  export type SocialConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    relationship?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    lastInteraction?: SortOrderInput | SortOrder
    sharedActivities?: SortOrder
    _count?: SocialConnectionCountOrderByAggregateInput
    _avg?: SocialConnectionAvgOrderByAggregateInput
    _max?: SocialConnectionMaxOrderByAggregateInput
    _min?: SocialConnectionMinOrderByAggregateInput
    _sum?: SocialConnectionSumOrderByAggregateInput
  }

  export type SocialConnectionScalarWhereWithAggregatesInput = {
    AND?: SocialConnectionScalarWhereWithAggregatesInput | SocialConnectionScalarWhereWithAggregatesInput[]
    OR?: SocialConnectionScalarWhereWithAggregatesInput[]
    NOT?: SocialConnectionScalarWhereWithAggregatesInput | SocialConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialConnection"> | string
    userId?: StringWithAggregatesFilter<"SocialConnection"> | string
    friendId?: StringWithAggregatesFilter<"SocialConnection"> | string
    status?: EnumConnectionStatusWithAggregatesFilter<"SocialConnection"> | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeWithAggregatesFilter<"SocialConnection"> | $Enums.RelationshipType
    strength?: FloatWithAggregatesFilter<"SocialConnection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SocialConnection"> | Date | string
    lastInteraction?: DateTimeNullableWithAggregatesFilter<"SocialConnection"> | Date | string | null
    sharedActivities?: StringNullableListFilter<"SocialConnection">
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileCreateInput = {
    id?: string
    displayName: string
    avatar?: string | null
    gameRank: string
    mainRole: string
    skillLevel?: $Enums.SkillLevel
    timezone?: string
    bio?: string | null
    country?: string | null
    language?: string
    publicProfile?: boolean
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    displayName: string
    avatar?: string | null
    gameRank: string
    mainRole: string
    skillLevel?: $Enums.SkillLevel
    timezone?: string
    bio?: string | null
    country?: string | null
    language?: string
    publicProfile?: boolean
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gameRank?: StringFieldUpdateOperationsInput | string
    mainRole?: StringFieldUpdateOperationsInput | string
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gameRank?: StringFieldUpdateOperationsInput | string
    mainRole?: StringFieldUpdateOperationsInput | string
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    displayName: string
    avatar?: string | null
    gameRank: string
    mainRole: string
    skillLevel?: $Enums.SkillLevel
    timezone?: string
    bio?: string | null
    country?: string | null
    language?: string
    publicProfile?: boolean
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gameRank?: StringFieldUpdateOperationsInput | string
    mainRole?: StringFieldUpdateOperationsInput | string
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gameRank?: StringFieldUpdateOperationsInput | string
    mainRole?: StringFieldUpdateOperationsInput | string
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesCreateInput = {
    id?: string
    coachingStyle?: $Enums.CoachingStyle
    coachingIntensity?: $Enums.Intensity
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: $Enums.Visibility
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: UserPreferencesCreatepreferredContentTypesInput | string[]
    learningStyle?: $Enums.LearningStyle
    sessionDuration?: number
    difficulty?: $Enums.SkillLevel
    topics?: UserPreferencesCreatetopicsInput | string[]
    avoidTopics?: UserPreferencesCreateavoidTopicsInput | string[]
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    coachingStyle?: $Enums.CoachingStyle
    coachingIntensity?: $Enums.Intensity
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: $Enums.Visibility
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: UserPreferencesCreatepreferredContentTypesInput | string[]
    learningStyle?: $Enums.LearningStyle
    sessionDuration?: number
    difficulty?: $Enums.SkillLevel
    topics?: UserPreferencesCreatetopicsInput | string[]
    avoidTopics?: UserPreferencesCreateavoidTopicsInput | string[]
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingStyle?: EnumCoachingStyleFieldUpdateOperationsInput | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFieldUpdateOperationsInput | $Enums.Intensity
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    profileVisibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    shareAnalytics?: BoolFieldUpdateOperationsInput | boolean
    shareProgress?: BoolFieldUpdateOperationsInput | boolean
    allowFriendRequests?: BoolFieldUpdateOperationsInput | boolean
    showOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    preferredContentTypes?: UserPreferencesUpdatepreferredContentTypesInput | string[]
    learningStyle?: EnumLearningStyleFieldUpdateOperationsInput | $Enums.LearningStyle
    sessionDuration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    topics?: UserPreferencesUpdatetopicsInput | string[]
    avoidTopics?: UserPreferencesUpdateavoidTopicsInput | string[]
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachingStyle?: EnumCoachingStyleFieldUpdateOperationsInput | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFieldUpdateOperationsInput | $Enums.Intensity
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    profileVisibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    shareAnalytics?: BoolFieldUpdateOperationsInput | boolean
    shareProgress?: BoolFieldUpdateOperationsInput | boolean
    allowFriendRequests?: BoolFieldUpdateOperationsInput | boolean
    showOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    preferredContentTypes?: UserPreferencesUpdatepreferredContentTypesInput | string[]
    learningStyle?: EnumLearningStyleFieldUpdateOperationsInput | $Enums.LearningStyle
    sessionDuration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    topics?: UserPreferencesUpdatetopicsInput | string[]
    avoidTopics?: UserPreferencesUpdateavoidTopicsInput | string[]
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    coachingStyle?: $Enums.CoachingStyle
    coachingIntensity?: $Enums.Intensity
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: $Enums.Visibility
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: UserPreferencesCreatepreferredContentTypesInput | string[]
    learningStyle?: $Enums.LearningStyle
    sessionDuration?: number
    difficulty?: $Enums.SkillLevel
    topics?: UserPreferencesCreatetopicsInput | string[]
    avoidTopics?: UserPreferencesCreateavoidTopicsInput | string[]
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingStyle?: EnumCoachingStyleFieldUpdateOperationsInput | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFieldUpdateOperationsInput | $Enums.Intensity
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    profileVisibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    shareAnalytics?: BoolFieldUpdateOperationsInput | boolean
    shareProgress?: BoolFieldUpdateOperationsInput | boolean
    allowFriendRequests?: BoolFieldUpdateOperationsInput | boolean
    showOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    preferredContentTypes?: UserPreferencesUpdatepreferredContentTypesInput | string[]
    learningStyle?: EnumLearningStyleFieldUpdateOperationsInput | $Enums.LearningStyle
    sessionDuration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    topics?: UserPreferencesUpdatetopicsInput | string[]
    avoidTopics?: UserPreferencesUpdateavoidTopicsInput | string[]
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachingStyle?: EnumCoachingStyleFieldUpdateOperationsInput | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFieldUpdateOperationsInput | $Enums.Intensity
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    profileVisibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    shareAnalytics?: BoolFieldUpdateOperationsInput | boolean
    shareProgress?: BoolFieldUpdateOperationsInput | boolean
    allowFriendRequests?: BoolFieldUpdateOperationsInput | boolean
    showOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    preferredContentTypes?: UserPreferencesUpdatepreferredContentTypesInput | string[]
    learningStyle?: EnumLearningStyleFieldUpdateOperationsInput | $Enums.LearningStyle
    sessionDuration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    topics?: UserPreferencesUpdatetopicsInput | string[]
    avoidTopics?: UserPreferencesUpdateavoidTopicsInput | string[]
  }

  export type GameplaySessionCreateInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    performanceMetrics?: PerformanceMetricsCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUncheckedCreateInput = {
    id?: string
    userId: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    performanceMetrics?: PerformanceMetricsUncheckedCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    performanceMetrics?: PerformanceMetricsUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performanceMetrics?: PerformanceMetricsUncheckedUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionCreateManyInput = {
    id?: string
    userId: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameplaySessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameplaySessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceMetricsCreateInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood?: boolean
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: string
    improvement: number
    session: GameplaySessionCreateNestedOneWithoutPerformanceMetricsInput
  }

  export type PerformanceMetricsUncheckedCreateInput = {
    id?: string
    sessionId: string
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood?: boolean
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: string
    improvement: number
  }

  export type PerformanceMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    kdaRatio?: FloatFieldUpdateOperationsInput | number
    killParticipation?: FloatFieldUpdateOperationsInput | number
    firstBlood?: BoolFieldUpdateOperationsInput | boolean
    goldEarned?: IntFieldUpdateOperationsInput | number
    goldSpent?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: FloatFieldUpdateOperationsInput | number
    economyEfficiency?: FloatFieldUpdateOperationsInput | number
    itemBuildScore?: FloatFieldUpdateOperationsInput | number
    farmingScore?: FloatFieldUpdateOperationsInput | number
    objectivesParticipated?: IntFieldUpdateOperationsInput | number
    objectivesSecured?: IntFieldUpdateOperationsInput | number
    objectivesContested?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    reactionTime?: FloatFieldUpdateOperationsInput | number
    decisionMaking?: FloatFieldUpdateOperationsInput | number
    positioning?: FloatFieldUpdateOperationsInput | number
    timing?: FloatFieldUpdateOperationsInput | number
    adaptation?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: StringFieldUpdateOperationsInput | string
    improvement?: FloatFieldUpdateOperationsInput | number
    session?: GameplaySessionUpdateOneRequiredWithoutPerformanceMetricsNestedInput
  }

  export type PerformanceMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    kdaRatio?: FloatFieldUpdateOperationsInput | number
    killParticipation?: FloatFieldUpdateOperationsInput | number
    firstBlood?: BoolFieldUpdateOperationsInput | boolean
    goldEarned?: IntFieldUpdateOperationsInput | number
    goldSpent?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: FloatFieldUpdateOperationsInput | number
    economyEfficiency?: FloatFieldUpdateOperationsInput | number
    itemBuildScore?: FloatFieldUpdateOperationsInput | number
    farmingScore?: FloatFieldUpdateOperationsInput | number
    objectivesParticipated?: IntFieldUpdateOperationsInput | number
    objectivesSecured?: IntFieldUpdateOperationsInput | number
    objectivesContested?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    reactionTime?: FloatFieldUpdateOperationsInput | number
    decisionMaking?: FloatFieldUpdateOperationsInput | number
    positioning?: FloatFieldUpdateOperationsInput | number
    timing?: FloatFieldUpdateOperationsInput | number
    adaptation?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: StringFieldUpdateOperationsInput | string
    improvement?: FloatFieldUpdateOperationsInput | number
  }

  export type PerformanceMetricsCreateManyInput = {
    id?: string
    sessionId: string
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood?: boolean
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: string
    improvement: number
  }

  export type PerformanceMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    kdaRatio?: FloatFieldUpdateOperationsInput | number
    killParticipation?: FloatFieldUpdateOperationsInput | number
    firstBlood?: BoolFieldUpdateOperationsInput | boolean
    goldEarned?: IntFieldUpdateOperationsInput | number
    goldSpent?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: FloatFieldUpdateOperationsInput | number
    economyEfficiency?: FloatFieldUpdateOperationsInput | number
    itemBuildScore?: FloatFieldUpdateOperationsInput | number
    farmingScore?: FloatFieldUpdateOperationsInput | number
    objectivesParticipated?: IntFieldUpdateOperationsInput | number
    objectivesSecured?: IntFieldUpdateOperationsInput | number
    objectivesContested?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    reactionTime?: FloatFieldUpdateOperationsInput | number
    decisionMaking?: FloatFieldUpdateOperationsInput | number
    positioning?: FloatFieldUpdateOperationsInput | number
    timing?: FloatFieldUpdateOperationsInput | number
    adaptation?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: StringFieldUpdateOperationsInput | string
    improvement?: FloatFieldUpdateOperationsInput | number
  }

  export type PerformanceMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    kdaRatio?: FloatFieldUpdateOperationsInput | number
    killParticipation?: FloatFieldUpdateOperationsInput | number
    firstBlood?: BoolFieldUpdateOperationsInput | boolean
    goldEarned?: IntFieldUpdateOperationsInput | number
    goldSpent?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: FloatFieldUpdateOperationsInput | number
    economyEfficiency?: FloatFieldUpdateOperationsInput | number
    itemBuildScore?: FloatFieldUpdateOperationsInput | number
    farmingScore?: FloatFieldUpdateOperationsInput | number
    objectivesParticipated?: IntFieldUpdateOperationsInput | number
    objectivesSecured?: IntFieldUpdateOperationsInput | number
    objectivesContested?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    reactionTime?: FloatFieldUpdateOperationsInput | number
    decisionMaking?: FloatFieldUpdateOperationsInput | number
    positioning?: FloatFieldUpdateOperationsInput | number
    timing?: FloatFieldUpdateOperationsInput | number
    adaptation?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: StringFieldUpdateOperationsInput | string
    improvement?: FloatFieldUpdateOperationsInput | number
  }

  export type AnalyticsCreateInput = {
    id?: string
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnalyticsInput
    session?: GameplaySessionCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId?: string | null
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
  }

  export type AnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnalyticsNestedInput
    session?: GameplaySessionUpdateOneWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id?: string
    userId: string
    sessionId?: string | null
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryCreateInput = {
    id?: string
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCoachingHistoryInput
    session?: GameplaySessionCreateNestedOneWithoutCoachingHistoryInput
  }

  export type CoachingHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId?: string | null
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
  }

  export type CoachingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachingHistoryNestedInput
    session?: GameplaySessionUpdateOneWithoutCoachingHistoryNestedInput
  }

  export type CoachingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryCreateManyInput = {
    id?: string
    userId: string
    sessionId?: string | null
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
  }

  export type CoachingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressCreateInput = {
    id?: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningProgressInput
    session?: GameplaySessionCreateNestedOneWithoutLearningProgressInput
  }

  export type LearningProgressUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningProgressNestedInput
    session?: GameplaySessionUpdateOneWithoutLearningProgressNestedInput
  }

  export type LearningProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateInput = {
    id?: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress?: number
    maxProgress?: number
    completed?: boolean
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    userId: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress?: number
    maxProgress?: number
    completed?: boolean
    unlockedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateManyInput = {
    id?: string
    userId: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress?: number
    maxProgress?: number
    completed?: boolean
    unlockedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialConnectionCreateInput = {
    id?: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
    user: UserCreateNestedOneWithoutSocialConnectionsInput
    friend: UserCreateNestedOneWithoutFriendConnectionsInput
  }

  export type SocialConnectionUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
  }

  export type SocialConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
    user?: UserUpdateOneRequiredWithoutSocialConnectionsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendConnectionsNestedInput
  }

  export type SocialConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type SocialConnectionCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
  }

  export type SocialConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type SocialConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type GameplaySessionListRelationFilter = {
    every?: GameplaySessionWhereInput
    some?: GameplaySessionWhereInput
    none?: GameplaySessionWhereInput
  }

  export type AnalyticsListRelationFilter = {
    every?: AnalyticsWhereInput
    some?: AnalyticsWhereInput
    none?: AnalyticsWhereInput
  }

  export type CoachingHistoryListRelationFilter = {
    every?: CoachingHistoryWhereInput
    some?: CoachingHistoryWhereInput
    none?: CoachingHistoryWhereInput
  }

  export type LearningProgressListRelationFilter = {
    every?: LearningProgressWhereInput
    some?: LearningProgressWhereInput
    none?: LearningProgressWhereInput
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type SocialConnectionListRelationFilter = {
    every?: SocialConnectionWhereInput
    some?: SocialConnectionWhereInput
    none?: SocialConnectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameplaySessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    gameRank?: SortOrder
    mainRole?: SortOrder
    skillLevel?: SortOrder
    timezone?: SortOrder
    bio?: SortOrder
    country?: SortOrder
    language?: SortOrder
    publicProfile?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    gameRank?: SortOrder
    mainRole?: SortOrder
    skillLevel?: SortOrder
    timezone?: SortOrder
    bio?: SortOrder
    country?: SortOrder
    language?: SortOrder
    publicProfile?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    gameRank?: SortOrder
    mainRole?: SortOrder
    skillLevel?: SortOrder
    timezone?: SortOrder
    bio?: SortOrder
    country?: SortOrder
    language?: SortOrder
    publicProfile?: SortOrder
  }

  export type EnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type EnumCoachingStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingStyle | EnumCoachingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingStyleFilter<$PrismaModel> | $Enums.CoachingStyle
  }

  export type EnumIntensityFilter<$PrismaModel = never> = {
    equals?: $Enums.Intensity | EnumIntensityFieldRefInput<$PrismaModel>
    in?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityFilter<$PrismaModel> | $Enums.Intensity
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumLearningStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningStyle | EnumLearningStyleFieldRefInput<$PrismaModel>
    in?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningStyleFilter<$PrismaModel> | $Enums.LearningStyle
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coachingStyle?: SortOrder
    coachingIntensity?: SortOrder
    notificationsEnabled?: SortOrder
    emailNotifications?: SortOrder
    pushNotifications?: SortOrder
    profileVisibility?: SortOrder
    shareAnalytics?: SortOrder
    shareProgress?: SortOrder
    allowFriendRequests?: SortOrder
    showOnlineStatus?: SortOrder
    preferredContentTypes?: SortOrder
    learningStyle?: SortOrder
    sessionDuration?: SortOrder
    difficulty?: SortOrder
    topics?: SortOrder
    avoidTopics?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    sessionDuration?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coachingStyle?: SortOrder
    coachingIntensity?: SortOrder
    notificationsEnabled?: SortOrder
    emailNotifications?: SortOrder
    pushNotifications?: SortOrder
    profileVisibility?: SortOrder
    shareAnalytics?: SortOrder
    shareProgress?: SortOrder
    allowFriendRequests?: SortOrder
    showOnlineStatus?: SortOrder
    learningStyle?: SortOrder
    sessionDuration?: SortOrder
    difficulty?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coachingStyle?: SortOrder
    coachingIntensity?: SortOrder
    notificationsEnabled?: SortOrder
    emailNotifications?: SortOrder
    pushNotifications?: SortOrder
    profileVisibility?: SortOrder
    shareAnalytics?: SortOrder
    shareProgress?: SortOrder
    allowFriendRequests?: SortOrder
    showOnlineStatus?: SortOrder
    learningStyle?: SortOrder
    sessionDuration?: SortOrder
    difficulty?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    sessionDuration?: SortOrder
  }

  export type EnumCoachingStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingStyle | EnumCoachingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingStyleWithAggregatesFilter<$PrismaModel> | $Enums.CoachingStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingStyleFilter<$PrismaModel>
    _max?: NestedEnumCoachingStyleFilter<$PrismaModel>
  }

  export type EnumIntensityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intensity | EnumIntensityFieldRefInput<$PrismaModel>
    in?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityWithAggregatesFilter<$PrismaModel> | $Enums.Intensity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntensityFilter<$PrismaModel>
    _max?: NestedEnumIntensityFilter<$PrismaModel>
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type EnumLearningStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningStyle | EnumLearningStyleFieldRefInput<$PrismaModel>
    in?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningStyleWithAggregatesFilter<$PrismaModel> | $Enums.LearningStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLearningStyleFilter<$PrismaModel>
    _max?: NestedEnumLearningStyleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type PerformanceMetricsNullableScalarRelationFilter = {
    is?: PerformanceMetricsWhereInput | null
    isNot?: PerformanceMetricsWhereInput | null
  }

  export type GameplaySessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    gameVersion?: SortOrder
    server?: SortOrder
    region?: SortOrder
    teamComposition?: SortOrder
    enemyComposition?: SortOrder
    mapName?: SortOrder
    gameLength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameplaySessionAvgOrderByAggregateInput = {
    duration?: SortOrder
    gameLength?: SortOrder
  }

  export type GameplaySessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    gameVersion?: SortOrder
    server?: SortOrder
    region?: SortOrder
    mapName?: SortOrder
    gameLength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameplaySessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameMode?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    gameVersion?: SortOrder
    server?: SortOrder
    region?: SortOrder
    mapName?: SortOrder
    gameLength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameplaySessionSumOrderByAggregateInput = {
    duration?: SortOrder
    gameLength?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GameplaySessionScalarRelationFilter = {
    is?: GameplaySessionWhereInput
    isNot?: GameplaySessionWhereInput
  }

  export type PerformanceMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    firstBlood?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    improvement?: SortOrder
  }

  export type PerformanceMetricsAvgOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    improvement?: SortOrder
  }

  export type PerformanceMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    firstBlood?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    improvement?: SortOrder
  }

  export type PerformanceMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    firstBlood?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    improvement?: SortOrder
  }

  export type PerformanceMetricsSumOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    kdaRatio?: SortOrder
    killParticipation?: SortOrder
    goldEarned?: SortOrder
    goldSpent?: SortOrder
    goldPerMinute?: SortOrder
    economyEfficiency?: SortOrder
    itemBuildScore?: SortOrder
    farmingScore?: SortOrder
    objectivesParticipated?: SortOrder
    objectivesSecured?: SortOrder
    objectivesContested?: SortOrder
    participationRate?: SortOrder
    successRate?: SortOrder
    impactScore?: SortOrder
    accuracy?: SortOrder
    reactionTime?: SortOrder
    decisionMaking?: SortOrder
    positioning?: SortOrder
    timing?: SortOrder
    adaptation?: SortOrder
    overallScore?: SortOrder
    improvement?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAnalysisTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisType | EnumAnalysisTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisTypeFilter<$PrismaModel> | $Enums.AnalysisType
  }

  export type EnumAnalyticsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsCategory | EnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsCategoryFilter<$PrismaModel> | $Enums.AnalyticsCategory
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GameplaySessionNullableScalarRelationFilter = {
    is?: GameplaySessionWhereInput | null
    isNot?: GameplaySessionWhereInput | null
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    analysisType?: SortOrder
    category?: SortOrder
    metrics?: SortOrder
    insights?: SortOrder
    recommendations?: SortOrder
    confidence?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    confidence?: SortOrder
    processingTime?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    analysisType?: SortOrder
    category?: SortOrder
    confidence?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    analysisType?: SortOrder
    category?: SortOrder
    confidence?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    confidence?: SortOrder
    processingTime?: SortOrder
  }

  export type EnumAnalysisTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisType | EnumAnalysisTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisTypeFilter<$PrismaModel>
    _max?: NestedEnumAnalysisTypeFilter<$PrismaModel>
  }

  export type EnumAnalyticsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsCategory | EnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AnalyticsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalyticsCategoryFilter<$PrismaModel>
    _max?: NestedEnumAnalyticsCategoryFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumCoachingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingType | EnumCoachingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingTypeFilter<$PrismaModel> | $Enums.CoachingType
  }

  export type EnumCoachingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingCategory | EnumCoachingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingCategoryFilter<$PrismaModel> | $Enums.CoachingCategory
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CoachingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    coachingType?: SortOrder
    message?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    deliveryTime?: SortOrder
    userResponse?: SortOrder
    effectiveness?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingHistoryAvgOrderByAggregateInput = {
    deliveryTime?: SortOrder
    effectiveness?: SortOrder
    feedback?: SortOrder
  }

  export type CoachingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    coachingType?: SortOrder
    message?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    deliveryTime?: SortOrder
    userResponse?: SortOrder
    effectiveness?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    coachingType?: SortOrder
    message?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    deliveryTime?: SortOrder
    userResponse?: SortOrder
    effectiveness?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingHistorySumOrderByAggregateInput = {
    deliveryTime?: SortOrder
    effectiveness?: SortOrder
    feedback?: SortOrder
  }

  export type EnumCoachingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingType | EnumCoachingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoachingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingTypeFilter<$PrismaModel>
    _max?: NestedEnumCoachingTypeFilter<$PrismaModel>
  }

  export type EnumCoachingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingCategory | EnumCoachingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CoachingCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingCategoryFilter<$PrismaModel>
    _max?: NestedEnumCoachingCategoryFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type LearningProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    pathId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
    attempts?: SortOrder
    lastAccessed?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningProgressAvgOrderByAggregateInput = {
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
    attempts?: SortOrder
  }

  export type LearningProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    pathId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
    attempts?: SortOrder
    lastAccessed?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    pathId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
    attempts?: SortOrder
    lastAccessed?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningProgressSumOrderByAggregateInput = {
    progress?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
    attempts?: SortOrder
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type EnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
  }

  export type EnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type AchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: string
    achievementId: string
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    progress?: SortOrder
    maxProgress?: SortOrder
    completed?: SortOrder
    unlockedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    progress?: SortOrder
    maxProgress?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    progress?: SortOrder
    maxProgress?: SortOrder
    completed?: SortOrder
    unlockedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    progress?: SortOrder
    maxProgress?: SortOrder
    completed?: SortOrder
    unlockedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    progress?: SortOrder
    maxProgress?: SortOrder
  }

  export type EnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
  }

  export type EnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type EnumConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusFilter<$PrismaModel> | $Enums.ConnectionStatus
  }

  export type EnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type SocialConnectionUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type SocialConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    relationship?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    lastInteraction?: SortOrder
    sharedActivities?: SortOrder
  }

  export type SocialConnectionAvgOrderByAggregateInput = {
    strength?: SortOrder
  }

  export type SocialConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    relationship?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    lastInteraction?: SortOrder
  }

  export type SocialConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    relationship?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    lastInteraction?: SortOrder
  }

  export type SocialConnectionSumOrderByAggregateInput = {
    strength?: SortOrder
  }

  export type EnumConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectionStatusFilter<$PrismaModel>
  }

  export type EnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type GameplaySessionCreateNestedManyWithoutUserInput = {
    create?: XOR<GameplaySessionCreateWithoutUserInput, GameplaySessionUncheckedCreateWithoutUserInput> | GameplaySessionCreateWithoutUserInput[] | GameplaySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutUserInput | GameplaySessionCreateOrConnectWithoutUserInput[]
    createMany?: GameplaySessionCreateManyUserInputEnvelope
    connect?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
  }

  export type AnalyticsCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type CoachingHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingHistoryCreateWithoutUserInput, CoachingHistoryUncheckedCreateWithoutUserInput> | CoachingHistoryCreateWithoutUserInput[] | CoachingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutUserInput | CoachingHistoryCreateOrConnectWithoutUserInput[]
    createMany?: CoachingHistoryCreateManyUserInputEnvelope
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
  }

  export type LearningProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type AchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type SocialConnectionCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialConnectionCreateWithoutUserInput, SocialConnectionUncheckedCreateWithoutUserInput> | SocialConnectionCreateWithoutUserInput[] | SocialConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutUserInput | SocialConnectionCreateOrConnectWithoutUserInput[]
    createMany?: SocialConnectionCreateManyUserInputEnvelope
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
  }

  export type SocialConnectionCreateNestedManyWithoutFriendInput = {
    create?: XOR<SocialConnectionCreateWithoutFriendInput, SocialConnectionUncheckedCreateWithoutFriendInput> | SocialConnectionCreateWithoutFriendInput[] | SocialConnectionUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutFriendInput | SocialConnectionCreateOrConnectWithoutFriendInput[]
    createMany?: SocialConnectionCreateManyFriendInputEnvelope
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type GameplaySessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameplaySessionCreateWithoutUserInput, GameplaySessionUncheckedCreateWithoutUserInput> | GameplaySessionCreateWithoutUserInput[] | GameplaySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutUserInput | GameplaySessionCreateOrConnectWithoutUserInput[]
    createMany?: GameplaySessionCreateManyUserInputEnvelope
    connect?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
  }

  export type AnalyticsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type CoachingHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingHistoryCreateWithoutUserInput, CoachingHistoryUncheckedCreateWithoutUserInput> | CoachingHistoryCreateWithoutUserInput[] | CoachingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutUserInput | CoachingHistoryCreateOrConnectWithoutUserInput[]
    createMany?: CoachingHistoryCreateManyUserInputEnvelope
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
  }

  export type LearningProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type SocialConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialConnectionCreateWithoutUserInput, SocialConnectionUncheckedCreateWithoutUserInput> | SocialConnectionCreateWithoutUserInput[] | SocialConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutUserInput | SocialConnectionCreateOrConnectWithoutUserInput[]
    createMany?: SocialConnectionCreateManyUserInputEnvelope
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
  }

  export type SocialConnectionUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<SocialConnectionCreateWithoutFriendInput, SocialConnectionUncheckedCreateWithoutFriendInput> | SocialConnectionCreateWithoutFriendInput[] | SocialConnectionUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutFriendInput | SocialConnectionCreateOrConnectWithoutFriendInput[]
    createMany?: SocialConnectionCreateManyFriendInputEnvelope
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type GameplaySessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameplaySessionCreateWithoutUserInput, GameplaySessionUncheckedCreateWithoutUserInput> | GameplaySessionCreateWithoutUserInput[] | GameplaySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutUserInput | GameplaySessionCreateOrConnectWithoutUserInput[]
    upsert?: GameplaySessionUpsertWithWhereUniqueWithoutUserInput | GameplaySessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameplaySessionCreateManyUserInputEnvelope
    set?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    disconnect?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    delete?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    connect?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    update?: GameplaySessionUpdateWithWhereUniqueWithoutUserInput | GameplaySessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameplaySessionUpdateManyWithWhereWithoutUserInput | GameplaySessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameplaySessionScalarWhereInput | GameplaySessionScalarWhereInput[]
  }

  export type AnalyticsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutUserInput | AnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutUserInput | AnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutUserInput | AnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type CoachingHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingHistoryCreateWithoutUserInput, CoachingHistoryUncheckedCreateWithoutUserInput> | CoachingHistoryCreateWithoutUserInput[] | CoachingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutUserInput | CoachingHistoryCreateOrConnectWithoutUserInput[]
    upsert?: CoachingHistoryUpsertWithWhereUniqueWithoutUserInput | CoachingHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingHistoryCreateManyUserInputEnvelope
    set?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    disconnect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    delete?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    update?: CoachingHistoryUpdateWithWhereUniqueWithoutUserInput | CoachingHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingHistoryUpdateManyWithWhereWithoutUserInput | CoachingHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingHistoryScalarWhereInput | CoachingHistoryScalarWhereInput[]
  }

  export type LearningProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutUserInput | LearningProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutUserInput | LearningProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutUserInput | LearningProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type AchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutUserInput | AchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutUserInput | AchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutUserInput | AchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type SocialConnectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialConnectionCreateWithoutUserInput, SocialConnectionUncheckedCreateWithoutUserInput> | SocialConnectionCreateWithoutUserInput[] | SocialConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutUserInput | SocialConnectionCreateOrConnectWithoutUserInput[]
    upsert?: SocialConnectionUpsertWithWhereUniqueWithoutUserInput | SocialConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialConnectionCreateManyUserInputEnvelope
    set?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    disconnect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    delete?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    update?: SocialConnectionUpdateWithWhereUniqueWithoutUserInput | SocialConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialConnectionUpdateManyWithWhereWithoutUserInput | SocialConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialConnectionScalarWhereInput | SocialConnectionScalarWhereInput[]
  }

  export type SocialConnectionUpdateManyWithoutFriendNestedInput = {
    create?: XOR<SocialConnectionCreateWithoutFriendInput, SocialConnectionUncheckedCreateWithoutFriendInput> | SocialConnectionCreateWithoutFriendInput[] | SocialConnectionUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutFriendInput | SocialConnectionCreateOrConnectWithoutFriendInput[]
    upsert?: SocialConnectionUpsertWithWhereUniqueWithoutFriendInput | SocialConnectionUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: SocialConnectionCreateManyFriendInputEnvelope
    set?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    disconnect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    delete?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    update?: SocialConnectionUpdateWithWhereUniqueWithoutFriendInput | SocialConnectionUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: SocialConnectionUpdateManyWithWhereWithoutFriendInput | SocialConnectionUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: SocialConnectionScalarWhereInput | SocialConnectionScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type GameplaySessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameplaySessionCreateWithoutUserInput, GameplaySessionUncheckedCreateWithoutUserInput> | GameplaySessionCreateWithoutUserInput[] | GameplaySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutUserInput | GameplaySessionCreateOrConnectWithoutUserInput[]
    upsert?: GameplaySessionUpsertWithWhereUniqueWithoutUserInput | GameplaySessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameplaySessionCreateManyUserInputEnvelope
    set?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    disconnect?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    delete?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    connect?: GameplaySessionWhereUniqueInput | GameplaySessionWhereUniqueInput[]
    update?: GameplaySessionUpdateWithWhereUniqueWithoutUserInput | GameplaySessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameplaySessionUpdateManyWithWhereWithoutUserInput | GameplaySessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameplaySessionScalarWhereInput | GameplaySessionScalarWhereInput[]
  }

  export type AnalyticsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutUserInput | AnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutUserInput | AnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutUserInput | AnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingHistoryCreateWithoutUserInput, CoachingHistoryUncheckedCreateWithoutUserInput> | CoachingHistoryCreateWithoutUserInput[] | CoachingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutUserInput | CoachingHistoryCreateOrConnectWithoutUserInput[]
    upsert?: CoachingHistoryUpsertWithWhereUniqueWithoutUserInput | CoachingHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingHistoryCreateManyUserInputEnvelope
    set?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    disconnect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    delete?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    update?: CoachingHistoryUpdateWithWhereUniqueWithoutUserInput | CoachingHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingHistoryUpdateManyWithWhereWithoutUserInput | CoachingHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingHistoryScalarWhereInput | CoachingHistoryScalarWhereInput[]
  }

  export type LearningProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutUserInput | LearningProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutUserInput | LearningProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutUserInput | LearningProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutUserInput | AchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutUserInput | AchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutUserInput | AchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type SocialConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialConnectionCreateWithoutUserInput, SocialConnectionUncheckedCreateWithoutUserInput> | SocialConnectionCreateWithoutUserInput[] | SocialConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutUserInput | SocialConnectionCreateOrConnectWithoutUserInput[]
    upsert?: SocialConnectionUpsertWithWhereUniqueWithoutUserInput | SocialConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialConnectionCreateManyUserInputEnvelope
    set?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    disconnect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    delete?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    update?: SocialConnectionUpdateWithWhereUniqueWithoutUserInput | SocialConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialConnectionUpdateManyWithWhereWithoutUserInput | SocialConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialConnectionScalarWhereInput | SocialConnectionScalarWhereInput[]
  }

  export type SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<SocialConnectionCreateWithoutFriendInput, SocialConnectionUncheckedCreateWithoutFriendInput> | SocialConnectionCreateWithoutFriendInput[] | SocialConnectionUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialConnectionCreateOrConnectWithoutFriendInput | SocialConnectionCreateOrConnectWithoutFriendInput[]
    upsert?: SocialConnectionUpsertWithWhereUniqueWithoutFriendInput | SocialConnectionUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: SocialConnectionCreateManyFriendInputEnvelope
    set?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    disconnect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    delete?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    connect?: SocialConnectionWhereUniqueInput | SocialConnectionWhereUniqueInput[]
    update?: SocialConnectionUpdateWithWhereUniqueWithoutFriendInput | SocialConnectionUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: SocialConnectionUpdateManyWithWhereWithoutFriendInput | SocialConnectionUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: SocialConnectionScalarWhereInput | SocialConnectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSkillLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillLevel
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserPreferencesCreatepreferredContentTypesInput = {
    set: string[]
  }

  export type UserPreferencesCreatetopicsInput = {
    set: string[]
  }

  export type UserPreferencesCreateavoidTopicsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCoachingStyleFieldUpdateOperationsInput = {
    set?: $Enums.CoachingStyle
  }

  export type EnumIntensityFieldUpdateOperationsInput = {
    set?: $Enums.Intensity
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type UserPreferencesUpdatepreferredContentTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumLearningStyleFieldUpdateOperationsInput = {
    set?: $Enums.LearningStyle
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPreferencesUpdatetopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdateavoidTopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type GameplaySessionCreateteamCompositionInput = {
    set: string[]
  }

  export type GameplaySessionCreateenemyCompositionInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type PerformanceMetricsCreateNestedOneWithoutSessionInput = {
    create?: XOR<PerformanceMetricsCreateWithoutSessionInput, PerformanceMetricsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: PerformanceMetricsCreateOrConnectWithoutSessionInput
    connect?: PerformanceMetricsWhereUniqueInput
  }

  export type AnalyticsCreateNestedManyWithoutSessionInput = {
    create?: XOR<AnalyticsCreateWithoutSessionInput, AnalyticsUncheckedCreateWithoutSessionInput> | AnalyticsCreateWithoutSessionInput[] | AnalyticsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutSessionInput | AnalyticsCreateOrConnectWithoutSessionInput[]
    createMany?: AnalyticsCreateManySessionInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type CoachingHistoryCreateNestedManyWithoutSessionInput = {
    create?: XOR<CoachingHistoryCreateWithoutSessionInput, CoachingHistoryUncheckedCreateWithoutSessionInput> | CoachingHistoryCreateWithoutSessionInput[] | CoachingHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutSessionInput | CoachingHistoryCreateOrConnectWithoutSessionInput[]
    createMany?: CoachingHistoryCreateManySessionInputEnvelope
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
  }

  export type LearningProgressCreateNestedManyWithoutSessionInput = {
    create?: XOR<LearningProgressCreateWithoutSessionInput, LearningProgressUncheckedCreateWithoutSessionInput> | LearningProgressCreateWithoutSessionInput[] | LearningProgressUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutSessionInput | LearningProgressCreateOrConnectWithoutSessionInput[]
    createMany?: LearningProgressCreateManySessionInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type PerformanceMetricsUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<PerformanceMetricsCreateWithoutSessionInput, PerformanceMetricsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: PerformanceMetricsCreateOrConnectWithoutSessionInput
    connect?: PerformanceMetricsWhereUniqueInput
  }

  export type AnalyticsUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AnalyticsCreateWithoutSessionInput, AnalyticsUncheckedCreateWithoutSessionInput> | AnalyticsCreateWithoutSessionInput[] | AnalyticsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutSessionInput | AnalyticsCreateOrConnectWithoutSessionInput[]
    createMany?: AnalyticsCreateManySessionInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type CoachingHistoryUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<CoachingHistoryCreateWithoutSessionInput, CoachingHistoryUncheckedCreateWithoutSessionInput> | CoachingHistoryCreateWithoutSessionInput[] | CoachingHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutSessionInput | CoachingHistoryCreateOrConnectWithoutSessionInput[]
    createMany?: CoachingHistoryCreateManySessionInputEnvelope
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
  }

  export type LearningProgressUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<LearningProgressCreateWithoutSessionInput, LearningProgressUncheckedCreateWithoutSessionInput> | LearningProgressCreateWithoutSessionInput[] | LearningProgressUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutSessionInput | LearningProgressCreateOrConnectWithoutSessionInput[]
    createMany?: LearningProgressCreateManySessionInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type GameplaySessionUpdateteamCompositionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GameplaySessionUpdateenemyCompositionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PerformanceMetricsUpdateOneWithoutSessionNestedInput = {
    create?: XOR<PerformanceMetricsCreateWithoutSessionInput, PerformanceMetricsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: PerformanceMetricsCreateOrConnectWithoutSessionInput
    upsert?: PerformanceMetricsUpsertWithoutSessionInput
    disconnect?: PerformanceMetricsWhereInput | boolean
    delete?: PerformanceMetricsWhereInput | boolean
    connect?: PerformanceMetricsWhereUniqueInput
    update?: XOR<XOR<PerformanceMetricsUpdateToOneWithWhereWithoutSessionInput, PerformanceMetricsUpdateWithoutSessionInput>, PerformanceMetricsUncheckedUpdateWithoutSessionInput>
  }

  export type AnalyticsUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AnalyticsCreateWithoutSessionInput, AnalyticsUncheckedCreateWithoutSessionInput> | AnalyticsCreateWithoutSessionInput[] | AnalyticsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutSessionInput | AnalyticsCreateOrConnectWithoutSessionInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutSessionInput | AnalyticsUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AnalyticsCreateManySessionInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutSessionInput | AnalyticsUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutSessionInput | AnalyticsUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type CoachingHistoryUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CoachingHistoryCreateWithoutSessionInput, CoachingHistoryUncheckedCreateWithoutSessionInput> | CoachingHistoryCreateWithoutSessionInput[] | CoachingHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutSessionInput | CoachingHistoryCreateOrConnectWithoutSessionInput[]
    upsert?: CoachingHistoryUpsertWithWhereUniqueWithoutSessionInput | CoachingHistoryUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CoachingHistoryCreateManySessionInputEnvelope
    set?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    disconnect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    delete?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    update?: CoachingHistoryUpdateWithWhereUniqueWithoutSessionInput | CoachingHistoryUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CoachingHistoryUpdateManyWithWhereWithoutSessionInput | CoachingHistoryUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CoachingHistoryScalarWhereInput | CoachingHistoryScalarWhereInput[]
  }

  export type LearningProgressUpdateManyWithoutSessionNestedInput = {
    create?: XOR<LearningProgressCreateWithoutSessionInput, LearningProgressUncheckedCreateWithoutSessionInput> | LearningProgressCreateWithoutSessionInput[] | LearningProgressUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutSessionInput | LearningProgressCreateOrConnectWithoutSessionInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutSessionInput | LearningProgressUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: LearningProgressCreateManySessionInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutSessionInput | LearningProgressUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutSessionInput | LearningProgressUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type PerformanceMetricsUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<PerformanceMetricsCreateWithoutSessionInput, PerformanceMetricsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: PerformanceMetricsCreateOrConnectWithoutSessionInput
    upsert?: PerformanceMetricsUpsertWithoutSessionInput
    disconnect?: PerformanceMetricsWhereInput | boolean
    delete?: PerformanceMetricsWhereInput | boolean
    connect?: PerformanceMetricsWhereUniqueInput
    update?: XOR<XOR<PerformanceMetricsUpdateToOneWithWhereWithoutSessionInput, PerformanceMetricsUpdateWithoutSessionInput>, PerformanceMetricsUncheckedUpdateWithoutSessionInput>
  }

  export type AnalyticsUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AnalyticsCreateWithoutSessionInput, AnalyticsUncheckedCreateWithoutSessionInput> | AnalyticsCreateWithoutSessionInput[] | AnalyticsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutSessionInput | AnalyticsCreateOrConnectWithoutSessionInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutSessionInput | AnalyticsUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AnalyticsCreateManySessionInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutSessionInput | AnalyticsUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutSessionInput | AnalyticsUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type CoachingHistoryUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CoachingHistoryCreateWithoutSessionInput, CoachingHistoryUncheckedCreateWithoutSessionInput> | CoachingHistoryCreateWithoutSessionInput[] | CoachingHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CoachingHistoryCreateOrConnectWithoutSessionInput | CoachingHistoryCreateOrConnectWithoutSessionInput[]
    upsert?: CoachingHistoryUpsertWithWhereUniqueWithoutSessionInput | CoachingHistoryUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CoachingHistoryCreateManySessionInputEnvelope
    set?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    disconnect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    delete?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    connect?: CoachingHistoryWhereUniqueInput | CoachingHistoryWhereUniqueInput[]
    update?: CoachingHistoryUpdateWithWhereUniqueWithoutSessionInput | CoachingHistoryUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CoachingHistoryUpdateManyWithWhereWithoutSessionInput | CoachingHistoryUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CoachingHistoryScalarWhereInput | CoachingHistoryScalarWhereInput[]
  }

  export type LearningProgressUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<LearningProgressCreateWithoutSessionInput, LearningProgressUncheckedCreateWithoutSessionInput> | LearningProgressCreateWithoutSessionInput[] | LearningProgressUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutSessionInput | LearningProgressCreateOrConnectWithoutSessionInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutSessionInput | LearningProgressUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: LearningProgressCreateManySessionInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutSessionInput | LearningProgressUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutSessionInput | LearningProgressUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type GameplaySessionCreateNestedOneWithoutPerformanceMetricsInput = {
    create?: XOR<GameplaySessionCreateWithoutPerformanceMetricsInput, GameplaySessionUncheckedCreateWithoutPerformanceMetricsInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutPerformanceMetricsInput
    connect?: GameplaySessionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameplaySessionUpdateOneRequiredWithoutPerformanceMetricsNestedInput = {
    create?: XOR<GameplaySessionCreateWithoutPerformanceMetricsInput, GameplaySessionUncheckedCreateWithoutPerformanceMetricsInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutPerformanceMetricsInput
    upsert?: GameplaySessionUpsertWithoutPerformanceMetricsInput
    connect?: GameplaySessionWhereUniqueInput
    update?: XOR<XOR<GameplaySessionUpdateToOneWithWhereWithoutPerformanceMetricsInput, GameplaySessionUpdateWithoutPerformanceMetricsInput>, GameplaySessionUncheckedUpdateWithoutPerformanceMetricsInput>
  }

  export type AnalyticsCreaterecommendationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsInput
    connect?: UserWhereUniqueInput
  }

  export type GameplaySessionCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<GameplaySessionCreateWithoutAnalyticsInput, GameplaySessionUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutAnalyticsInput
    connect?: GameplaySessionWhereUniqueInput
  }

  export type EnumAnalysisTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisType
  }

  export type EnumAnalyticsCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AnalyticsCategory
  }

  export type AnalyticsUpdaterecommendationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsInput
    upsert?: UserUpsertWithoutAnalyticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalyticsInput, UserUpdateWithoutAnalyticsInput>, UserUncheckedUpdateWithoutAnalyticsInput>
  }

  export type GameplaySessionUpdateOneWithoutAnalyticsNestedInput = {
    create?: XOR<GameplaySessionCreateWithoutAnalyticsInput, GameplaySessionUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutAnalyticsInput
    upsert?: GameplaySessionUpsertWithoutAnalyticsInput
    disconnect?: GameplaySessionWhereInput | boolean
    delete?: GameplaySessionWhereInput | boolean
    connect?: GameplaySessionWhereUniqueInput
    update?: XOR<XOR<GameplaySessionUpdateToOneWithWhereWithoutAnalyticsInput, GameplaySessionUpdateWithoutAnalyticsInput>, GameplaySessionUncheckedUpdateWithoutAnalyticsInput>
  }

  export type UserCreateNestedOneWithoutCoachingHistoryInput = {
    create?: XOR<UserCreateWithoutCoachingHistoryInput, UserUncheckedCreateWithoutCoachingHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type GameplaySessionCreateNestedOneWithoutCoachingHistoryInput = {
    create?: XOR<GameplaySessionCreateWithoutCoachingHistoryInput, GameplaySessionUncheckedCreateWithoutCoachingHistoryInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutCoachingHistoryInput
    connect?: GameplaySessionWhereUniqueInput
  }

  export type EnumCoachingTypeFieldUpdateOperationsInput = {
    set?: $Enums.CoachingType
  }

  export type EnumCoachingCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CoachingCategory
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCoachingHistoryNestedInput = {
    create?: XOR<UserCreateWithoutCoachingHistoryInput, UserUncheckedCreateWithoutCoachingHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingHistoryInput
    upsert?: UserUpsertWithoutCoachingHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachingHistoryInput, UserUpdateWithoutCoachingHistoryInput>, UserUncheckedUpdateWithoutCoachingHistoryInput>
  }

  export type GameplaySessionUpdateOneWithoutCoachingHistoryNestedInput = {
    create?: XOR<GameplaySessionCreateWithoutCoachingHistoryInput, GameplaySessionUncheckedCreateWithoutCoachingHistoryInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutCoachingHistoryInput
    upsert?: GameplaySessionUpsertWithoutCoachingHistoryInput
    disconnect?: GameplaySessionWhereInput | boolean
    delete?: GameplaySessionWhereInput | boolean
    connect?: GameplaySessionWhereUniqueInput
    update?: XOR<XOR<GameplaySessionUpdateToOneWithWhereWithoutCoachingHistoryInput, GameplaySessionUpdateWithoutCoachingHistoryInput>, GameplaySessionUncheckedUpdateWithoutCoachingHistoryInput>
  }

  export type UserCreateNestedOneWithoutLearningProgressInput = {
    create?: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningProgressInput
    connect?: UserWhereUniqueInput
  }

  export type GameplaySessionCreateNestedOneWithoutLearningProgressInput = {
    create?: XOR<GameplaySessionCreateWithoutLearningProgressInput, GameplaySessionUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutLearningProgressInput
    connect?: GameplaySessionWhereUniqueInput
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type UserUpdateOneRequiredWithoutLearningProgressNestedInput = {
    create?: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningProgressInput
    upsert?: UserUpsertWithoutLearningProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningProgressInput, UserUpdateWithoutLearningProgressInput>, UserUncheckedUpdateWithoutLearningProgressInput>
  }

  export type GameplaySessionUpdateOneWithoutLearningProgressNestedInput = {
    create?: XOR<GameplaySessionCreateWithoutLearningProgressInput, GameplaySessionUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: GameplaySessionCreateOrConnectWithoutLearningProgressInput
    upsert?: GameplaySessionUpsertWithoutLearningProgressInput
    disconnect?: GameplaySessionWhereInput | boolean
    delete?: GameplaySessionWhereInput | boolean
    connect?: GameplaySessionWhereUniqueInput
    update?: XOR<XOR<GameplaySessionUpdateToOneWithWhereWithoutLearningProgressInput, GameplaySessionUpdateWithoutLearningProgressInput>, GameplaySessionUncheckedUpdateWithoutLearningProgressInput>
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAchievementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AchievementType
  }

  export type EnumRarityFieldUpdateOperationsInput = {
    set?: $Enums.Rarity
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type SocialConnectionCreatesharedActivitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSocialConnectionsInput = {
    create?: XOR<UserCreateWithoutSocialConnectionsInput, UserUncheckedCreateWithoutSocialConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendConnectionsInput = {
    create?: XOR<UserCreateWithoutFriendConnectionsInput, UserUncheckedCreateWithoutFriendConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConnectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConnectionStatus
  }

  export type EnumRelationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipType
  }

  export type SocialConnectionUpdatesharedActivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSocialConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutSocialConnectionsInput, UserUncheckedCreateWithoutSocialConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialConnectionsInput
    upsert?: UserUpsertWithoutSocialConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSocialConnectionsInput, UserUpdateWithoutSocialConnectionsInput>, UserUncheckedUpdateWithoutSocialConnectionsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutFriendConnectionsInput, UserUncheckedCreateWithoutFriendConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendConnectionsInput
    upsert?: UserUpsertWithoutFriendConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendConnectionsInput, UserUpdateWithoutFriendConnectionsInput>, UserUncheckedUpdateWithoutFriendConnectionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type NestedEnumCoachingStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingStyle | EnumCoachingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingStyleFilter<$PrismaModel> | $Enums.CoachingStyle
  }

  export type NestedEnumIntensityFilter<$PrismaModel = never> = {
    equals?: $Enums.Intensity | EnumIntensityFieldRefInput<$PrismaModel>
    in?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityFilter<$PrismaModel> | $Enums.Intensity
  }

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedEnumLearningStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningStyle | EnumLearningStyleFieldRefInput<$PrismaModel>
    in?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningStyleFilter<$PrismaModel> | $Enums.LearningStyle
  }

  export type NestedEnumCoachingStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingStyle | EnumCoachingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingStyle[] | ListEnumCoachingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingStyleWithAggregatesFilter<$PrismaModel> | $Enums.CoachingStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingStyleFilter<$PrismaModel>
    _max?: NestedEnumCoachingStyleFilter<$PrismaModel>
  }

  export type NestedEnumIntensityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intensity | EnumIntensityFieldRefInput<$PrismaModel>
    in?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intensity[] | ListEnumIntensityFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityWithAggregatesFilter<$PrismaModel> | $Enums.Intensity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntensityFilter<$PrismaModel>
    _max?: NestedEnumIntensityFilter<$PrismaModel>
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type NestedEnumLearningStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningStyle | EnumLearningStyleFieldRefInput<$PrismaModel>
    in?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningStyle[] | ListEnumLearningStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningStyleWithAggregatesFilter<$PrismaModel> | $Enums.LearningStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLearningStyleFilter<$PrismaModel>
    _max?: NestedEnumLearningStyleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAnalysisTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisType | EnumAnalysisTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisTypeFilter<$PrismaModel> | $Enums.AnalysisType
  }

  export type NestedEnumAnalyticsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsCategory | EnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsCategoryFilter<$PrismaModel> | $Enums.AnalyticsCategory
  }

  export type NestedEnumAnalysisTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisType | EnumAnalysisTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisType[] | ListEnumAnalysisTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisTypeFilter<$PrismaModel>
    _max?: NestedEnumAnalysisTypeFilter<$PrismaModel>
  }

  export type NestedEnumAnalyticsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsCategory | EnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsCategory[] | ListEnumAnalyticsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AnalyticsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalyticsCategoryFilter<$PrismaModel>
    _max?: NestedEnumAnalyticsCategoryFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCoachingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingType | EnumCoachingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingTypeFilter<$PrismaModel> | $Enums.CoachingType
  }

  export type NestedEnumCoachingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingCategory | EnumCoachingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingCategoryFilter<$PrismaModel> | $Enums.CoachingCategory
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumCoachingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingType | EnumCoachingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingType[] | ListEnumCoachingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoachingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingTypeFilter<$PrismaModel>
    _max?: NestedEnumCoachingTypeFilter<$PrismaModel>
  }

  export type NestedEnumCoachingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingCategory | EnumCoachingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingCategory[] | ListEnumCoachingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CoachingCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingCategoryFilter<$PrismaModel>
    _max?: NestedEnumCoachingCategoryFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type NestedEnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
  }

  export type NestedEnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
  }

  export type NestedEnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type NestedEnumConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusFilter<$PrismaModel> | $Enums.ConnectionStatus
  }

  export type NestedEnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectionStatusFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    displayName: string
    avatar?: string | null
    gameRank: string
    mainRole: string
    skillLevel?: $Enums.SkillLevel
    timezone?: string
    bio?: string | null
    country?: string | null
    language?: string
    publicProfile?: boolean
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    displayName: string
    avatar?: string | null
    gameRank: string
    mainRole: string
    skillLevel?: $Enums.SkillLevel
    timezone?: string
    bio?: string | null
    country?: string | null
    language?: string
    publicProfile?: boolean
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    coachingStyle?: $Enums.CoachingStyle
    coachingIntensity?: $Enums.Intensity
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: $Enums.Visibility
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: UserPreferencesCreatepreferredContentTypesInput | string[]
    learningStyle?: $Enums.LearningStyle
    sessionDuration?: number
    difficulty?: $Enums.SkillLevel
    topics?: UserPreferencesCreatetopicsInput | string[]
    avoidTopics?: UserPreferencesCreateavoidTopicsInput | string[]
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    coachingStyle?: $Enums.CoachingStyle
    coachingIntensity?: $Enums.Intensity
    notificationsEnabled?: boolean
    emailNotifications?: boolean
    pushNotifications?: boolean
    profileVisibility?: $Enums.Visibility
    shareAnalytics?: boolean
    shareProgress?: boolean
    allowFriendRequests?: boolean
    showOnlineStatus?: boolean
    preferredContentTypes?: UserPreferencesCreatepreferredContentTypesInput | string[]
    learningStyle?: $Enums.LearningStyle
    sessionDuration?: number
    difficulty?: $Enums.SkillLevel
    topics?: UserPreferencesCreatetopicsInput | string[]
    avoidTopics?: UserPreferencesCreateavoidTopicsInput | string[]
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type GameplaySessionCreateWithoutUserInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    performanceMetrics?: PerformanceMetricsCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUncheckedCreateWithoutUserInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    performanceMetrics?: PerformanceMetricsUncheckedCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionCreateOrConnectWithoutUserInput = {
    where: GameplaySessionWhereUniqueInput
    create: XOR<GameplaySessionCreateWithoutUserInput, GameplaySessionUncheckedCreateWithoutUserInput>
  }

  export type GameplaySessionCreateManyUserInputEnvelope = {
    data: GameplaySessionCreateManyUserInput | GameplaySessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsCreateWithoutUserInput = {
    id?: string
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
    session?: GameplaySessionCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId?: string | null
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsCreateManyUserInputEnvelope = {
    data: AnalyticsCreateManyUserInput | AnalyticsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoachingHistoryCreateWithoutUserInput = {
    id?: string
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
    session?: GameplaySessionCreateNestedOneWithoutCoachingHistoryInput
  }

  export type CoachingHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId?: string | null
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
  }

  export type CoachingHistoryCreateOrConnectWithoutUserInput = {
    where: CoachingHistoryWhereUniqueInput
    create: XOR<CoachingHistoryCreateWithoutUserInput, CoachingHistoryUncheckedCreateWithoutUserInput>
  }

  export type CoachingHistoryCreateManyUserInputEnvelope = {
    data: CoachingHistoryCreateManyUserInput | CoachingHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningProgressCreateWithoutUserInput = {
    id?: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: GameplaySessionCreateNestedOneWithoutLearningProgressInput
  }

  export type LearningProgressUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressCreateOrConnectWithoutUserInput = {
    where: LearningProgressWhereUniqueInput
    create: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput>
  }

  export type LearningProgressCreateManyUserInputEnvelope = {
    data: LearningProgressCreateManyUserInput | LearningProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AchievementCreateWithoutUserInput = {
    id?: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress?: number
    maxProgress?: number
    completed?: boolean
    unlockedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutUserInput = {
    id?: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress?: number
    maxProgress?: number
    completed?: boolean
    unlockedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutUserInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput>
  }

  export type AchievementCreateManyUserInputEnvelope = {
    data: AchievementCreateManyUserInput | AchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialConnectionCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
    friend: UserCreateNestedOneWithoutFriendConnectionsInput
  }

  export type SocialConnectionUncheckedCreateWithoutUserInput = {
    id?: string
    friendId: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
  }

  export type SocialConnectionCreateOrConnectWithoutUserInput = {
    where: SocialConnectionWhereUniqueInput
    create: XOR<SocialConnectionCreateWithoutUserInput, SocialConnectionUncheckedCreateWithoutUserInput>
  }

  export type SocialConnectionCreateManyUserInputEnvelope = {
    data: SocialConnectionCreateManyUserInput | SocialConnectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialConnectionCreateWithoutFriendInput = {
    id?: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
    user: UserCreateNestedOneWithoutSocialConnectionsInput
  }

  export type SocialConnectionUncheckedCreateWithoutFriendInput = {
    id?: string
    userId: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
  }

  export type SocialConnectionCreateOrConnectWithoutFriendInput = {
    where: SocialConnectionWhereUniqueInput
    create: XOR<SocialConnectionCreateWithoutFriendInput, SocialConnectionUncheckedCreateWithoutFriendInput>
  }

  export type SocialConnectionCreateManyFriendInputEnvelope = {
    data: SocialConnectionCreateManyFriendInput | SocialConnectionCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gameRank?: StringFieldUpdateOperationsInput | string
    mainRole?: StringFieldUpdateOperationsInput | string
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gameRank?: StringFieldUpdateOperationsInput | string
    mainRole?: StringFieldUpdateOperationsInput | string
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingStyle?: EnumCoachingStyleFieldUpdateOperationsInput | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFieldUpdateOperationsInput | $Enums.Intensity
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    profileVisibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    shareAnalytics?: BoolFieldUpdateOperationsInput | boolean
    shareProgress?: BoolFieldUpdateOperationsInput | boolean
    allowFriendRequests?: BoolFieldUpdateOperationsInput | boolean
    showOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    preferredContentTypes?: UserPreferencesUpdatepreferredContentTypesInput | string[]
    learningStyle?: EnumLearningStyleFieldUpdateOperationsInput | $Enums.LearningStyle
    sessionDuration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    topics?: UserPreferencesUpdatetopicsInput | string[]
    avoidTopics?: UserPreferencesUpdateavoidTopicsInput | string[]
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingStyle?: EnumCoachingStyleFieldUpdateOperationsInput | $Enums.CoachingStyle
    coachingIntensity?: EnumIntensityFieldUpdateOperationsInput | $Enums.Intensity
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    profileVisibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    shareAnalytics?: BoolFieldUpdateOperationsInput | boolean
    shareProgress?: BoolFieldUpdateOperationsInput | boolean
    allowFriendRequests?: BoolFieldUpdateOperationsInput | boolean
    showOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    preferredContentTypes?: UserPreferencesUpdatepreferredContentTypesInput | string[]
    learningStyle?: EnumLearningStyleFieldUpdateOperationsInput | $Enums.LearningStyle
    sessionDuration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    topics?: UserPreferencesUpdatetopicsInput | string[]
    avoidTopics?: UserPreferencesUpdateavoidTopicsInput | string[]
  }

  export type GameplaySessionUpsertWithWhereUniqueWithoutUserInput = {
    where: GameplaySessionWhereUniqueInput
    update: XOR<GameplaySessionUpdateWithoutUserInput, GameplaySessionUncheckedUpdateWithoutUserInput>
    create: XOR<GameplaySessionCreateWithoutUserInput, GameplaySessionUncheckedCreateWithoutUserInput>
  }

  export type GameplaySessionUpdateWithWhereUniqueWithoutUserInput = {
    where: GameplaySessionWhereUniqueInput
    data: XOR<GameplaySessionUpdateWithoutUserInput, GameplaySessionUncheckedUpdateWithoutUserInput>
  }

  export type GameplaySessionUpdateManyWithWhereWithoutUserInput = {
    where: GameplaySessionScalarWhereInput
    data: XOR<GameplaySessionUpdateManyMutationInput, GameplaySessionUncheckedUpdateManyWithoutUserInput>
  }

  export type GameplaySessionScalarWhereInput = {
    AND?: GameplaySessionScalarWhereInput | GameplaySessionScalarWhereInput[]
    OR?: GameplaySessionScalarWhereInput[]
    NOT?: GameplaySessionScalarWhereInput | GameplaySessionScalarWhereInput[]
    id?: StringFilter<"GameplaySession"> | string
    userId?: StringFilter<"GameplaySession"> | string
    gameMode?: StringFilter<"GameplaySession"> | string
    startTime?: DateTimeFilter<"GameplaySession"> | Date | string
    endTime?: DateTimeNullableFilter<"GameplaySession"> | Date | string | null
    duration?: IntNullableFilter<"GameplaySession"> | number | null
    status?: EnumSessionStatusFilter<"GameplaySession"> | $Enums.SessionStatus
    gameVersion?: StringFilter<"GameplaySession"> | string
    server?: StringFilter<"GameplaySession"> | string
    region?: StringFilter<"GameplaySession"> | string
    teamComposition?: StringNullableListFilter<"GameplaySession">
    enemyComposition?: StringNullableListFilter<"GameplaySession">
    mapName?: StringFilter<"GameplaySession"> | string
    gameLength?: IntNullableFilter<"GameplaySession"> | number | null
    createdAt?: DateTimeFilter<"GameplaySession"> | Date | string
    updatedAt?: DateTimeFilter<"GameplaySession"> | Date | string
  }

  export type AnalyticsUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    update: XOR<AnalyticsUpdateWithoutUserInput, AnalyticsUncheckedUpdateWithoutUserInput>
    create: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    data: XOR<AnalyticsUpdateWithoutUserInput, AnalyticsUncheckedUpdateWithoutUserInput>
  }

  export type AnalyticsUpdateManyWithWhereWithoutUserInput = {
    where: AnalyticsScalarWhereInput
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalyticsScalarWhereInput = {
    AND?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    OR?: AnalyticsScalarWhereInput[]
    NOT?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    id?: StringFilter<"Analytics"> | string
    userId?: StringFilter<"Analytics"> | string
    sessionId?: StringNullableFilter<"Analytics"> | string | null
    analysisType?: EnumAnalysisTypeFilter<"Analytics"> | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFilter<"Analytics"> | $Enums.AnalyticsCategory
    metrics?: JsonFilter<"Analytics">
    insights?: JsonFilter<"Analytics">
    recommendations?: StringNullableListFilter<"Analytics">
    confidence?: FloatFilter<"Analytics"> | number
    processingTime?: IntFilter<"Analytics"> | number
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
  }

  export type CoachingHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CoachingHistoryWhereUniqueInput
    update: XOR<CoachingHistoryUpdateWithoutUserInput, CoachingHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<CoachingHistoryCreateWithoutUserInput, CoachingHistoryUncheckedCreateWithoutUserInput>
  }

  export type CoachingHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CoachingHistoryWhereUniqueInput
    data: XOR<CoachingHistoryUpdateWithoutUserInput, CoachingHistoryUncheckedUpdateWithoutUserInput>
  }

  export type CoachingHistoryUpdateManyWithWhereWithoutUserInput = {
    where: CoachingHistoryScalarWhereInput
    data: XOR<CoachingHistoryUpdateManyMutationInput, CoachingHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CoachingHistoryScalarWhereInput = {
    AND?: CoachingHistoryScalarWhereInput | CoachingHistoryScalarWhereInput[]
    OR?: CoachingHistoryScalarWhereInput[]
    NOT?: CoachingHistoryScalarWhereInput | CoachingHistoryScalarWhereInput[]
    id?: StringFilter<"CoachingHistory"> | string
    userId?: StringFilter<"CoachingHistory"> | string
    sessionId?: StringNullableFilter<"CoachingHistory"> | string | null
    coachingType?: EnumCoachingTypeFilter<"CoachingHistory"> | $Enums.CoachingType
    message?: StringFilter<"CoachingHistory"> | string
    category?: EnumCoachingCategoryFilter<"CoachingHistory"> | $Enums.CoachingCategory
    priority?: EnumPriorityFilter<"CoachingHistory"> | $Enums.Priority
    deliveryTime?: IntFilter<"CoachingHistory"> | number
    userResponse?: StringNullableFilter<"CoachingHistory"> | string | null
    effectiveness?: FloatNullableFilter<"CoachingHistory"> | number | null
    feedback?: IntNullableFilter<"CoachingHistory"> | number | null
    createdAt?: DateTimeFilter<"CoachingHistory"> | Date | string
  }

  export type LearningProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningProgressWhereUniqueInput
    update: XOR<LearningProgressUpdateWithoutUserInput, LearningProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput>
  }

  export type LearningProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningProgressWhereUniqueInput
    data: XOR<LearningProgressUpdateWithoutUserInput, LearningProgressUncheckedUpdateWithoutUserInput>
  }

  export type LearningProgressUpdateManyWithWhereWithoutUserInput = {
    where: LearningProgressScalarWhereInput
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningProgressScalarWhereInput = {
    AND?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
    OR?: LearningProgressScalarWhereInput[]
    NOT?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
    id?: StringFilter<"LearningProgress"> | string
    userId?: StringFilter<"LearningProgress"> | string
    contentId?: StringFilter<"LearningProgress"> | string
    pathId?: StringNullableFilter<"LearningProgress"> | string | null
    moduleId?: StringNullableFilter<"LearningProgress"> | string | null
    status?: EnumProgressStatusFilter<"LearningProgress"> | $Enums.ProgressStatus
    progress?: FloatFilter<"LearningProgress"> | number
    timeSpent?: IntFilter<"LearningProgress"> | number
    score?: FloatNullableFilter<"LearningProgress"> | number | null
    attempts?: IntFilter<"LearningProgress"> | number
    lastAccessed?: DateTimeFilter<"LearningProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"LearningProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LearningProgress"> | Date | string
  }

  export type AchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutUserInput, AchievementUncheckedUpdateWithoutUserInput>
    create: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutUserInput, AchievementUncheckedUpdateWithoutUserInput>
  }

  export type AchievementUpdateManyWithWhereWithoutUserInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: StringFilter<"Achievement"> | string
    userId?: StringFilter<"Achievement"> | string
    achievementId?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    category?: StringFilter<"Achievement"> | string
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    rarity?: EnumRarityFilter<"Achievement"> | $Enums.Rarity
    progress?: FloatFilter<"Achievement"> | number
    maxProgress?: FloatFilter<"Achievement"> | number
    completed?: BoolFilter<"Achievement"> | boolean
    unlockedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
  }

  export type SocialConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialConnectionWhereUniqueInput
    update: XOR<SocialConnectionUpdateWithoutUserInput, SocialConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<SocialConnectionCreateWithoutUserInput, SocialConnectionUncheckedCreateWithoutUserInput>
  }

  export type SocialConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialConnectionWhereUniqueInput
    data: XOR<SocialConnectionUpdateWithoutUserInput, SocialConnectionUncheckedUpdateWithoutUserInput>
  }

  export type SocialConnectionUpdateManyWithWhereWithoutUserInput = {
    where: SocialConnectionScalarWhereInput
    data: XOR<SocialConnectionUpdateManyMutationInput, SocialConnectionUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialConnectionScalarWhereInput = {
    AND?: SocialConnectionScalarWhereInput | SocialConnectionScalarWhereInput[]
    OR?: SocialConnectionScalarWhereInput[]
    NOT?: SocialConnectionScalarWhereInput | SocialConnectionScalarWhereInput[]
    id?: StringFilter<"SocialConnection"> | string
    userId?: StringFilter<"SocialConnection"> | string
    friendId?: StringFilter<"SocialConnection"> | string
    status?: EnumConnectionStatusFilter<"SocialConnection"> | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFilter<"SocialConnection"> | $Enums.RelationshipType
    strength?: FloatFilter<"SocialConnection"> | number
    createdAt?: DateTimeFilter<"SocialConnection"> | Date | string
    lastInteraction?: DateTimeNullableFilter<"SocialConnection"> | Date | string | null
    sharedActivities?: StringNullableListFilter<"SocialConnection">
  }

  export type SocialConnectionUpsertWithWhereUniqueWithoutFriendInput = {
    where: SocialConnectionWhereUniqueInput
    update: XOR<SocialConnectionUpdateWithoutFriendInput, SocialConnectionUncheckedUpdateWithoutFriendInput>
    create: XOR<SocialConnectionCreateWithoutFriendInput, SocialConnectionUncheckedCreateWithoutFriendInput>
  }

  export type SocialConnectionUpdateWithWhereUniqueWithoutFriendInput = {
    where: SocialConnectionWhereUniqueInput
    data: XOR<SocialConnectionUpdateWithoutFriendInput, SocialConnectionUncheckedUpdateWithoutFriendInput>
  }

  export type SocialConnectionUpdateManyWithWhereWithoutFriendInput = {
    where: SocialConnectionScalarWhereInput
    data: XOR<SocialConnectionUpdateManyMutationInput, SocialConnectionUncheckedUpdateManyWithoutFriendInput>
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type PerformanceMetricsCreateWithoutSessionInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood?: boolean
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: string
    improvement: number
  }

  export type PerformanceMetricsUncheckedCreateWithoutSessionInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    kdaRatio: number
    killParticipation: number
    firstBlood?: boolean
    goldEarned: number
    goldSpent: number
    goldPerMinute: number
    economyEfficiency: number
    itemBuildScore: number
    farmingScore: number
    objectivesParticipated: number
    objectivesSecured: number
    objectivesContested: number
    participationRate: number
    successRate: number
    impactScore: number
    accuracy: number
    reactionTime: number
    decisionMaking: number
    positioning: number
    timing: number
    adaptation: number
    overallScore: number
    rank: string
    improvement: number
  }

  export type PerformanceMetricsCreateOrConnectWithoutSessionInput = {
    where: PerformanceMetricsWhereUniqueInput
    create: XOR<PerformanceMetricsCreateWithoutSessionInput, PerformanceMetricsUncheckedCreateWithoutSessionInput>
  }

  export type AnalyticsCreateWithoutSessionInput = {
    id?: string
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutSessionInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutSessionInput, AnalyticsUncheckedCreateWithoutSessionInput>
  }

  export type AnalyticsCreateManySessionInputEnvelope = {
    data: AnalyticsCreateManySessionInput | AnalyticsCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type CoachingHistoryCreateWithoutSessionInput = {
    id?: string
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCoachingHistoryInput
  }

  export type CoachingHistoryUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
  }

  export type CoachingHistoryCreateOrConnectWithoutSessionInput = {
    where: CoachingHistoryWhereUniqueInput
    create: XOR<CoachingHistoryCreateWithoutSessionInput, CoachingHistoryUncheckedCreateWithoutSessionInput>
  }

  export type CoachingHistoryCreateManySessionInputEnvelope = {
    data: CoachingHistoryCreateManySessionInput | CoachingHistoryCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type LearningProgressCreateWithoutSessionInput = {
    id?: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningProgressInput
  }

  export type LearningProgressUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressCreateOrConnectWithoutSessionInput = {
    where: LearningProgressWhereUniqueInput
    create: XOR<LearningProgressCreateWithoutSessionInput, LearningProgressUncheckedCreateWithoutSessionInput>
  }

  export type LearningProgressCreateManySessionInputEnvelope = {
    data: LearningProgressCreateManySessionInput | LearningProgressCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type PerformanceMetricsUpsertWithoutSessionInput = {
    update: XOR<PerformanceMetricsUpdateWithoutSessionInput, PerformanceMetricsUncheckedUpdateWithoutSessionInput>
    create: XOR<PerformanceMetricsCreateWithoutSessionInput, PerformanceMetricsUncheckedCreateWithoutSessionInput>
    where?: PerformanceMetricsWhereInput
  }

  export type PerformanceMetricsUpdateToOneWithWhereWithoutSessionInput = {
    where?: PerformanceMetricsWhereInput
    data: XOR<PerformanceMetricsUpdateWithoutSessionInput, PerformanceMetricsUncheckedUpdateWithoutSessionInput>
  }

  export type PerformanceMetricsUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    kdaRatio?: FloatFieldUpdateOperationsInput | number
    killParticipation?: FloatFieldUpdateOperationsInput | number
    firstBlood?: BoolFieldUpdateOperationsInput | boolean
    goldEarned?: IntFieldUpdateOperationsInput | number
    goldSpent?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: FloatFieldUpdateOperationsInput | number
    economyEfficiency?: FloatFieldUpdateOperationsInput | number
    itemBuildScore?: FloatFieldUpdateOperationsInput | number
    farmingScore?: FloatFieldUpdateOperationsInput | number
    objectivesParticipated?: IntFieldUpdateOperationsInput | number
    objectivesSecured?: IntFieldUpdateOperationsInput | number
    objectivesContested?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    reactionTime?: FloatFieldUpdateOperationsInput | number
    decisionMaking?: FloatFieldUpdateOperationsInput | number
    positioning?: FloatFieldUpdateOperationsInput | number
    timing?: FloatFieldUpdateOperationsInput | number
    adaptation?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: StringFieldUpdateOperationsInput | string
    improvement?: FloatFieldUpdateOperationsInput | number
  }

  export type PerformanceMetricsUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    kdaRatio?: FloatFieldUpdateOperationsInput | number
    killParticipation?: FloatFieldUpdateOperationsInput | number
    firstBlood?: BoolFieldUpdateOperationsInput | boolean
    goldEarned?: IntFieldUpdateOperationsInput | number
    goldSpent?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: FloatFieldUpdateOperationsInput | number
    economyEfficiency?: FloatFieldUpdateOperationsInput | number
    itemBuildScore?: FloatFieldUpdateOperationsInput | number
    farmingScore?: FloatFieldUpdateOperationsInput | number
    objectivesParticipated?: IntFieldUpdateOperationsInput | number
    objectivesSecured?: IntFieldUpdateOperationsInput | number
    objectivesContested?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    reactionTime?: FloatFieldUpdateOperationsInput | number
    decisionMaking?: FloatFieldUpdateOperationsInput | number
    positioning?: FloatFieldUpdateOperationsInput | number
    timing?: FloatFieldUpdateOperationsInput | number
    adaptation?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: StringFieldUpdateOperationsInput | string
    improvement?: FloatFieldUpdateOperationsInput | number
  }

  export type AnalyticsUpsertWithWhereUniqueWithoutSessionInput = {
    where: AnalyticsWhereUniqueInput
    update: XOR<AnalyticsUpdateWithoutSessionInput, AnalyticsUncheckedUpdateWithoutSessionInput>
    create: XOR<AnalyticsCreateWithoutSessionInput, AnalyticsUncheckedCreateWithoutSessionInput>
  }

  export type AnalyticsUpdateWithWhereUniqueWithoutSessionInput = {
    where: AnalyticsWhereUniqueInput
    data: XOR<AnalyticsUpdateWithoutSessionInput, AnalyticsUncheckedUpdateWithoutSessionInput>
  }

  export type AnalyticsUpdateManyWithWhereWithoutSessionInput = {
    where: AnalyticsScalarWhereInput
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutSessionInput>
  }

  export type CoachingHistoryUpsertWithWhereUniqueWithoutSessionInput = {
    where: CoachingHistoryWhereUniqueInput
    update: XOR<CoachingHistoryUpdateWithoutSessionInput, CoachingHistoryUncheckedUpdateWithoutSessionInput>
    create: XOR<CoachingHistoryCreateWithoutSessionInput, CoachingHistoryUncheckedCreateWithoutSessionInput>
  }

  export type CoachingHistoryUpdateWithWhereUniqueWithoutSessionInput = {
    where: CoachingHistoryWhereUniqueInput
    data: XOR<CoachingHistoryUpdateWithoutSessionInput, CoachingHistoryUncheckedUpdateWithoutSessionInput>
  }

  export type CoachingHistoryUpdateManyWithWhereWithoutSessionInput = {
    where: CoachingHistoryScalarWhereInput
    data: XOR<CoachingHistoryUpdateManyMutationInput, CoachingHistoryUncheckedUpdateManyWithoutSessionInput>
  }

  export type LearningProgressUpsertWithWhereUniqueWithoutSessionInput = {
    where: LearningProgressWhereUniqueInput
    update: XOR<LearningProgressUpdateWithoutSessionInput, LearningProgressUncheckedUpdateWithoutSessionInput>
    create: XOR<LearningProgressCreateWithoutSessionInput, LearningProgressUncheckedCreateWithoutSessionInput>
  }

  export type LearningProgressUpdateWithWhereUniqueWithoutSessionInput = {
    where: LearningProgressWhereUniqueInput
    data: XOR<LearningProgressUpdateWithoutSessionInput, LearningProgressUncheckedUpdateWithoutSessionInput>
  }

  export type LearningProgressUpdateManyWithWhereWithoutSessionInput = {
    where: LearningProgressScalarWhereInput
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyWithoutSessionInput>
  }

  export type GameplaySessionCreateWithoutPerformanceMetricsInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    analytics?: AnalyticsCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUncheckedCreateWithoutPerformanceMetricsInput = {
    id?: string
    userId: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionCreateOrConnectWithoutPerformanceMetricsInput = {
    where: GameplaySessionWhereUniqueInput
    create: XOR<GameplaySessionCreateWithoutPerformanceMetricsInput, GameplaySessionUncheckedCreateWithoutPerformanceMetricsInput>
  }

  export type GameplaySessionUpsertWithoutPerformanceMetricsInput = {
    update: XOR<GameplaySessionUpdateWithoutPerformanceMetricsInput, GameplaySessionUncheckedUpdateWithoutPerformanceMetricsInput>
    create: XOR<GameplaySessionCreateWithoutPerformanceMetricsInput, GameplaySessionUncheckedCreateWithoutPerformanceMetricsInput>
    where?: GameplaySessionWhereInput
  }

  export type GameplaySessionUpdateToOneWithWhereWithoutPerformanceMetricsInput = {
    where?: GameplaySessionWhereInput
    data: XOR<GameplaySessionUpdateWithoutPerformanceMetricsInput, GameplaySessionUncheckedUpdateWithoutPerformanceMetricsInput>
  }

  export type GameplaySessionUpdateWithoutPerformanceMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    analytics?: AnalyticsUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateWithoutPerformanceMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: AnalyticsUncheckedUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserCreateWithoutAnalyticsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutAnalyticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
  }

  export type GameplaySessionCreateWithoutAnalyticsInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    performanceMetrics?: PerformanceMetricsCreateNestedOneWithoutSessionInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    userId: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    performanceMetrics?: PerformanceMetricsUncheckedCreateNestedOneWithoutSessionInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionCreateOrConnectWithoutAnalyticsInput = {
    where: GameplaySessionWhereUniqueInput
    create: XOR<GameplaySessionCreateWithoutAnalyticsInput, GameplaySessionUncheckedCreateWithoutAnalyticsInput>
  }

  export type UserUpsertWithoutAnalyticsInput = {
    update: XOR<UserUpdateWithoutAnalyticsInput, UserUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalyticsInput, UserUncheckedUpdateWithoutAnalyticsInput>
  }

  export type UserUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type GameplaySessionUpsertWithoutAnalyticsInput = {
    update: XOR<GameplaySessionUpdateWithoutAnalyticsInput, GameplaySessionUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<GameplaySessionCreateWithoutAnalyticsInput, GameplaySessionUncheckedCreateWithoutAnalyticsInput>
    where?: GameplaySessionWhereInput
  }

  export type GameplaySessionUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: GameplaySessionWhereInput
    data: XOR<GameplaySessionUpdateWithoutAnalyticsInput, GameplaySessionUncheckedUpdateWithoutAnalyticsInput>
  }

  export type GameplaySessionUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    performanceMetrics?: PerformanceMetricsUpdateOneWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performanceMetrics?: PerformanceMetricsUncheckedUpdateOneWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserCreateWithoutCoachingHistoryInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutCoachingHistoryInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutCoachingHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachingHistoryInput, UserUncheckedCreateWithoutCoachingHistoryInput>
  }

  export type GameplaySessionCreateWithoutCoachingHistoryInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    performanceMetrics?: PerformanceMetricsCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUncheckedCreateWithoutCoachingHistoryInput = {
    id?: string
    userId: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    performanceMetrics?: PerformanceMetricsUncheckedCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutSessionInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionCreateOrConnectWithoutCoachingHistoryInput = {
    where: GameplaySessionWhereUniqueInput
    create: XOR<GameplaySessionCreateWithoutCoachingHistoryInput, GameplaySessionUncheckedCreateWithoutCoachingHistoryInput>
  }

  export type UserUpsertWithoutCoachingHistoryInput = {
    update: XOR<UserUpdateWithoutCoachingHistoryInput, UserUncheckedUpdateWithoutCoachingHistoryInput>
    create: XOR<UserCreateWithoutCoachingHistoryInput, UserUncheckedCreateWithoutCoachingHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachingHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachingHistoryInput, UserUncheckedUpdateWithoutCoachingHistoryInput>
  }

  export type UserUpdateWithoutCoachingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type GameplaySessionUpsertWithoutCoachingHistoryInput = {
    update: XOR<GameplaySessionUpdateWithoutCoachingHistoryInput, GameplaySessionUncheckedUpdateWithoutCoachingHistoryInput>
    create: XOR<GameplaySessionCreateWithoutCoachingHistoryInput, GameplaySessionUncheckedCreateWithoutCoachingHistoryInput>
    where?: GameplaySessionWhereInput
  }

  export type GameplaySessionUpdateToOneWithWhereWithoutCoachingHistoryInput = {
    where?: GameplaySessionWhereInput
    data: XOR<GameplaySessionUpdateWithoutCoachingHistoryInput, GameplaySessionUncheckedUpdateWithoutCoachingHistoryInput>
  }

  export type GameplaySessionUpdateWithoutCoachingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    performanceMetrics?: PerformanceMetricsUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateWithoutCoachingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performanceMetrics?: PerformanceMetricsUncheckedUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserCreateWithoutLearningProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutLearningProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutLearningProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
  }

  export type GameplaySessionCreateWithoutLearningProgressInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    performanceMetrics?: PerformanceMetricsCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionUncheckedCreateWithoutLearningProgressInput = {
    id?: string
    userId: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    performanceMetrics?: PerformanceMetricsUncheckedCreateNestedOneWithoutSessionInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutSessionInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameplaySessionCreateOrConnectWithoutLearningProgressInput = {
    where: GameplaySessionWhereUniqueInput
    create: XOR<GameplaySessionCreateWithoutLearningProgressInput, GameplaySessionUncheckedCreateWithoutLearningProgressInput>
  }

  export type UserUpsertWithoutLearningProgressInput = {
    update: XOR<UserUpdateWithoutLearningProgressInput, UserUncheckedUpdateWithoutLearningProgressInput>
    create: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningProgressInput, UserUncheckedUpdateWithoutLearningProgressInput>
  }

  export type UserUpdateWithoutLearningProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type GameplaySessionUpsertWithoutLearningProgressInput = {
    update: XOR<GameplaySessionUpdateWithoutLearningProgressInput, GameplaySessionUncheckedUpdateWithoutLearningProgressInput>
    create: XOR<GameplaySessionCreateWithoutLearningProgressInput, GameplaySessionUncheckedCreateWithoutLearningProgressInput>
    where?: GameplaySessionWhereInput
  }

  export type GameplaySessionUpdateToOneWithWhereWithoutLearningProgressInput = {
    where?: GameplaySessionWhereInput
    data: XOR<GameplaySessionUpdateWithoutLearningProgressInput, GameplaySessionUncheckedUpdateWithoutLearningProgressInput>
  }

  export type GameplaySessionUpdateWithoutLearningProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    performanceMetrics?: PerformanceMetricsUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateWithoutLearningProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performanceMetrics?: PerformanceMetricsUncheckedUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserCreateWithoutAchievementsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutSocialConnectionsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutSocialConnectionsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    friendConnections?: SocialConnectionUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutSocialConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocialConnectionsInput, UserUncheckedCreateWithoutSocialConnectionsInput>
  }

  export type UserCreateWithoutFriendConnectionsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendConnectionsInput = {
    id?: string
    email: string
    username: string
    passwordHash?: string | null
    emailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    sessions?: GameplaySessionUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
    coachingHistory?: CoachingHistoryUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    socialConnections?: SocialConnectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendConnectionsInput, UserUncheckedCreateWithoutFriendConnectionsInput>
  }

  export type UserUpsertWithoutSocialConnectionsInput = {
    update: XOR<UserUpdateWithoutSocialConnectionsInput, UserUncheckedUpdateWithoutSocialConnectionsInput>
    create: XOR<UserCreateWithoutSocialConnectionsInput, UserUncheckedCreateWithoutSocialConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSocialConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSocialConnectionsInput, UserUncheckedUpdateWithoutSocialConnectionsInput>
  }

  export type UserUpdateWithoutSocialConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutSocialConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    friendConnections?: SocialConnectionUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUpsertWithoutFriendConnectionsInput = {
    update: XOR<UserUpdateWithoutFriendConnectionsInput, UserUncheckedUpdateWithoutFriendConnectionsInput>
    create: XOR<UserCreateWithoutFriendConnectionsInput, UserUncheckedCreateWithoutFriendConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendConnectionsInput, UserUncheckedUpdateWithoutFriendConnectionsInput>
  }

  export type UserUpdateWithoutFriendConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sessions?: GameplaySessionUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    socialConnections?: SocialConnectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameplaySessionCreateManyUserInput = {
    id?: string
    gameMode: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    gameVersion: string
    server: string
    region: string
    teamComposition?: GameplaySessionCreateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionCreateenemyCompositionInput | string[]
    mapName: string
    gameLength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsCreateManyUserInput = {
    id?: string
    sessionId?: string | null
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
  }

  export type CoachingHistoryCreateManyUserInput = {
    id?: string
    sessionId?: string | null
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
  }

  export type LearningProgressCreateManyUserInput = {
    id?: string
    contentId: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateManyUserInput = {
    id?: string
    achievementId: string
    name: string
    description: string
    category: string
    type: $Enums.AchievementType
    rarity: $Enums.Rarity
    progress?: number
    maxProgress?: number
    completed?: boolean
    unlockedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SocialConnectionCreateManyUserInput = {
    id?: string
    friendId: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
  }

  export type SocialConnectionCreateManyFriendInput = {
    id?: string
    userId: string
    status?: $Enums.ConnectionStatus
    relationship?: $Enums.RelationshipType
    strength?: number
    createdAt?: Date | string
    lastInteraction?: Date | string | null
    sharedActivities?: SocialConnectionCreatesharedActivitiesInput | string[]
  }

  export type GameplaySessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performanceMetrics?: PerformanceMetricsUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performanceMetrics?: PerformanceMetricsUncheckedUpdateOneWithoutSessionNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutSessionNestedInput
    coachingHistory?: CoachingHistoryUncheckedUpdateManyWithoutSessionNestedInput
    learningProgress?: LearningProgressUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameplaySessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    gameVersion?: StringFieldUpdateOperationsInput | string
    server?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    teamComposition?: GameplaySessionUpdateteamCompositionInput | string[]
    enemyComposition?: GameplaySessionUpdateenemyCompositionInput | string[]
    mapName?: StringFieldUpdateOperationsInput | string
    gameLength?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GameplaySessionUpdateOneWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GameplaySessionUpdateOneWithoutCoachingHistoryNestedInput
  }

  export type CoachingHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GameplaySessionUpdateOneWithoutLearningProgressNestedInput
  }

  export type LearningProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    progress?: FloatFieldUpdateOperationsInput | number
    maxProgress?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
    friend?: UserUpdateOneRequiredWithoutFriendConnectionsNestedInput
  }

  export type SocialConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type SocialConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type SocialConnectionUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
    user?: UserUpdateOneRequiredWithoutSocialConnectionsNestedInput
  }

  export type SocialConnectionUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type SocialConnectionUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    strength?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedActivities?: SocialConnectionUpdatesharedActivitiesInput | string[]
  }

  export type AnalyticsCreateManySessionInput = {
    id?: string
    userId: string
    analysisType: $Enums.AnalysisType
    category: $Enums.AnalyticsCategory
    metrics: JsonNullValueInput | InputJsonValue
    insights: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsCreaterecommendationsInput | string[]
    confidence: number
    processingTime: number
    createdAt?: Date | string
  }

  export type CoachingHistoryCreateManySessionInput = {
    id?: string
    userId: string
    coachingType: $Enums.CoachingType
    message: string
    category: $Enums.CoachingCategory
    priority: $Enums.Priority
    deliveryTime: number
    userResponse?: string | null
    effectiveness?: number | null
    feedback?: number | null
    createdAt?: Date | string
  }

  export type LearningProgressCreateManySessionInput = {
    id?: string
    userId: string
    pathId?: string | null
    moduleId?: string | null
    status?: $Enums.ProgressStatus
    progress?: number
    timeSpent?: number
    score?: number | null
    attempts?: number
    lastAccessed?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    analysisType?: EnumAnalysisTypeFieldUpdateOperationsInput | $Enums.AnalysisType
    category?: EnumAnalyticsCategoryFieldUpdateOperationsInput | $Enums.AnalyticsCategory
    metrics?: JsonNullValueInput | InputJsonValue
    insights?: JsonNullValueInput | InputJsonValue
    recommendations?: AnalyticsUpdaterecommendationsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    processingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachingHistoryNestedInput
  }

  export type CoachingHistoryUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingHistoryUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coachingType?: EnumCoachingTypeFieldUpdateOperationsInput | $Enums.CoachingType
    message?: StringFieldUpdateOperationsInput | string
    category?: EnumCoachingCategoryFieldUpdateOperationsInput | $Enums.CoachingCategory
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryTime?: IntFieldUpdateOperationsInput | number
    userResponse?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningProgressNestedInput
  }

  export type LearningProgressUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pathId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progress?: FloatFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
