import type { ComparisonStrategy } from './types';

/**
 * 比較演算子
 */
export const ComparisonOperator = {
  EQ: '===',
  NE: '!==',
  GT: '>',
  LT: '<',
  GE: '>=',
  LE: '<=',
  /** 緩い比較 (==) */
  LOOSE_EQ: '==',
  /** 緩い否定 (!=) */
  LOOSE_NE: '!=',
  /** 範囲内 (閉区間 [min, max]) */
  BETWEEN: 'between',
  /** 配列に含まれるか */
  IN: 'in',
  /** 部分一致 (String.includes) */
  LIKE: 'like',
} as const;

/**
 * 比較演算子
 */
export type ComparisonOperator =
  (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

const { EQ, NE, GT, LT, GE, LE, LOOSE_EQ, LOOSE_NE, BETWEEN, IN, LIKE } =
  ComparisonOperator;

/**
 * 全比較関数
 */
export const ComparisonStrategies = {
  [EQ]: (left, right) => left === right,
  [NE]: (left, right) => left !== right,
  [GT]: (left, right) => left > right,
  [LT]: (left, right) => left < right,
  [GE]: (left, right) => left >= right,
  [LE]: (left, right) => left <= right,
  // eslint-disable-next-line eqeqeq
  [LOOSE_EQ]: (left, right) => left == right,
  // eslint-disable-next-line eqeqeq
  [LOOSE_NE]: (left, right) => left != right,
  [BETWEEN]: (value, range: [any, any]) =>
    Array.isArray(range) && value >= range[0] && value <= range[1],
  [IN]: (value, list: any[]) => list.includes(value),
  [LIKE]: (value: string, pattern: string) => value.includes(pattern),
} as const satisfies Record<ComparisonOperator, ComparisonStrategy>;

/**
 * 全比較関数
 */
export type ComparisonStrategies = typeof ComparisonStrategies;
