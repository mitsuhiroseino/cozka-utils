import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * √2比 (≈ 1.414)
 * 建築・デザインの基礎となる幾何学的な比率
 *
 * - A4サイズの用紙比率
 */
const RATIO = Math.sqrt(2);

export type ApplySqrt2RatioOptions = ApplyRatioOptions;

/**
 * valueに対して√2比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applySqrt2Ratio(
  value: number,
  options?: ApplySqrt2RatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
