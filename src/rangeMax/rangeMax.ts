import isWithinRange from '../isWithinRange';

/**
 * 値が範囲外の場合は最大値を返す
 * @param value 値
 * @param min 最小値
 * @param max 最大値
 * @returns 最小値から最大値の間の値
 */
export default function rangeMax(value: number, min: number, max: number) {
  return isWithinRange(value, min, max) ? value : max;
}
