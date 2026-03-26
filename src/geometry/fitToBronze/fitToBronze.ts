import fitToRatio, { FitToRatioOptions } from '../fitToRatio';

/**
 * 青銅比 (≈ 3.303)
 */
const RATIO = (3 + Math.sqrt(13)) / 2;

export type FitToBronzeOptions = FitToRatioOptions;

/**
 * valueに対して青銅比になる値を返す\
 *
 * 青銅比 (≈ 3.303)\
 * 縦長、横長のデザインに利用される比率
 *
 * - ゴシック建築の尖塔
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToBronze(
  value: number,
  options?: FitToBronzeOptions,
) {
  return fitToRatio(value, RATIO, options);
}
