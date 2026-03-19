import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * 調和比 (≈ 1.333)
 * 音楽や画面比率などでよく見られる比率
 *
 * - 昔のテレビ
 * - 音楽のコード進行
 */
const RATIO = 4 / 3;

export type ApplyHarmonicRatioOptions = ApplyRatioOptions;

/**
 * valueに対して調和比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applyHarmonicRatio(
  value: number,
  options?: ApplyHarmonicRatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
