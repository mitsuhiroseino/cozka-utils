import { ComparisonOperator, ComparisonStrategies } from './constants';
import { LeftType, RightType } from './types';

/**
 * 2つの値を指定された演算子で比較します。
 * @param left - 比較する左辺の値
 * @param operator - 演算子 (COMPARISON_OPERATORS の値)
 * @param right - 比較する右辺の値（between/inの場合は配列）
 */
export default function compare<O extends ComparisonOperator>(
  left: LeftType[O],
  operator: O,
  right: RightType[O],
): boolean {
  const strategy = ComparisonStrategies[operator];
  if (!strategy) {
    throw new Error(`[compare] Unsupported operator: ${operator}`);
  }

  return strategy(left, right);
}
