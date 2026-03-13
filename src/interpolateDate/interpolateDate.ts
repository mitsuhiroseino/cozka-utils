import { InterpolateDateOptions } from './types';

/**
 * 基準値と目標値の間を、指定された割合で補間した日時を算出する。
 * (線形補間: start + (end - start) * ratio)
 *
 * @param value 目標値（1.0のときの値）
 * @param ratio 適用する割合（0.0 〜 1.0）
 * @param options オプション
 * @returns 算出された日時
 */
export default function interpolateDate(
  value: Date,
  ratio: number,
  options: InterpolateDateOptions = {},
): Date {
  const { baseValue = new Date() } = options,
    base = baseValue.getTime(),
    diff = value.getTime() - base,
    currentDiff = diff * ratio;
  return new Date(base + currentDiff);
}
