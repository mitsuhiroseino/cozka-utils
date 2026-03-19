import { InterpolateStringOptions } from './types';

/**
 * 基準値と目標値の間を、指定された割合で補間した長さの文字列を算出する。
 * (線形補間: start + (end - start) * ratio)
 *
 * @param value 目標値（1.0のときの値）
 * @param ratio 適用する割合（0.0 〜 1.0）
 * @param options オプション
 * @returns 算出された長さの文字列
 */
export default function interpolateString(
  value: string,
  ratio: number,
  options: InterpolateStringOptions = {},
): string {
  const { initialValue } = options;

  // 境界値のガード
  if (ratio <= 0) {
    return initialValue;
  } else if (ratio >= 1) {
    return value;
  }

  if (!initialValue) {
    // 単純なタイピングエフェクト（'' → value）
    const currentLength = Math.floor(value.length * ratio);
    return value.substring(0, currentLength);
  }

  // 古い値がある場合：前半(0.5まで)で消し、後半(0.5から)で出す
  if (ratio < 0.5) {
    // 0.0 -> 0.5 の間で initialValue を 100% -> 0% にする
    const localRatio = ratio * 2;
    const currentLength = Math.floor(initialValue.length * (1 - localRatio));
    return initialValue.substring(0, currentLength);
  } else {
    // 0.5 -> 1.0 の間で value を 0% -> 100% にする
    const localRatio = (ratio - 0.5) * 2;
    const currentLength = Math.floor(value.length * localRatio);
    return value.substring(0, currentLength);
  }
}
