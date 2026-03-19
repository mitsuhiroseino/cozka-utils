import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * √5比 (≈ 2.236)
 * 黄金比と関連が深く対称性や均整の取れたデザインに活用される比率
 *
 * - ギリシャ建築の柱の配置
 * -
 */
const RATIO = Math.sqrt(5);

export type ApplySqrt5RatioOptions = ApplyRatioOptions;

/**
 * valueに対して√5比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applySqrt5Ratio(
  value: number,
  options?: ApplySqrt5RatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
