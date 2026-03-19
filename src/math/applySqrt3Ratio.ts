import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * √3比 (≈ 1.732)
 * 建築・デザインの基礎となる幾何学的な比率
 *
 * - 正三角形の高さ比率（モジュール建築に活用）
 */
const RATIO = Math.sqrt(3);

export type ApplySqrt3RatioOptions = ApplyRatioOptions;

/**
 * valueに対して√3比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applySqrt3Ratio(
  value: number,
  options?: ApplySqrt3RatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
