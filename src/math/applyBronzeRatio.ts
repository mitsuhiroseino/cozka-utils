import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * 青銅比 (≈ 3.303)
 * 縦長、横長のデザインに利用される比率
 *
 * - ゴシック建築の尖塔
 */
const RATIO = (3 + Math.sqrt(13)) / 2;

export type ApplyBronzeRatioOptions = ApplyRatioOptions;

/**
 * valueに対して青銅比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applyBronzeRatio(
  value: number,
  options?: ApplyBronzeRatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
