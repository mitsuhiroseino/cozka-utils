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
  if (ratio === 1) {
    return value;
  } else {
    if (initialValue == null) {
      // 新しい値のみ
      const length = value.length;
      const currentLength = Math.floor(length * ratio);
      return value.substring(0, currentLength);
    } else {
      // 古い値の削除 & 新しい値
      const initialLength = initialValue.length;
      const length = value.length;
      const initialRatio = initialLength / (initialLength + length);
      const ratio = 1 - initialRatio;

      if (initialRatio > ratio) {
        // 古い値の削除
        const currentLength =
          initialLength - Math.floor(initialLength * (ratio / initialRatio));
        return initialValue.substring(0, currentLength);
      } else {
        // 新しい値
        const currentLength = Math.floor(
          length * ((ratio - initialRatio) / ratio),
        );
        return value.substring(0, currentLength);
      }
    }
  }
}
