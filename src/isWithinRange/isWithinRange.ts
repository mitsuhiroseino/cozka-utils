/**
 * 値が範囲内に収まっているかを判定する（境界を含む）
 * @param value 判定する値
 * @param min 最小値
 * @param max 最大値
 * @returns 範囲内であれば true
 */
export default function isWithinRange(
  value: number,
  min: number,
  max: number,
): boolean {
  return value >= min && value <= max;
}
