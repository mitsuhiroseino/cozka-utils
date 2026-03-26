import fitToRatio from '../fitToRatio';
import { FitToHarmonicOptions } from './types';

/**
 * 調和比 (≈ 1.333)
 */
const RATIO = 4 / 3;

/**
 * valueに対して調和比になる値を返す\
 *
 * 調和比 (≈ 1.333)\
 * 音楽や画面比率などでよく見られる比率
 *
 * - 昔のテレビ
 * - 音楽のコード進行
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToHarmonic(
  value: number,
  options?: FitToHarmonicOptions,
) {
  return fitToRatio(value, RATIO, options);
}
