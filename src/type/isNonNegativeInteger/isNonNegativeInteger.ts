/**
 * 0以上の整数（非負整数）であることを判定する
 * @param value 判定する値
 * @returns 0、1、2... のいずれかであれば true
 */
export default function isNonNegativeInteger(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) >= 0;
}
