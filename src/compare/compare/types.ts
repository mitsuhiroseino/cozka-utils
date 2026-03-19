import { ComparisonOperator, ComparisonStrategies } from './constants';

/**
 * 比較関数
 */
export type ComparisonStrategy<L extends any = any, R extends any = L> = (
  left: L,
  right: R,
) => boolean;

/**
 * 左の値の型
 */
export type LeftType = {
  [O in ComparisonOperator]: Parameters<ComparisonStrategies[O]>[0];
};

/**
 * 右の値の型
 */
export type RightType = {
  [O in ComparisonOperator]: Parameters<ComparisonStrategies[O]>[1];
};
