/**
 * 値がundefinedであるかを判定する。
 * @param value 判定する値
 * @returns 値がundefinedである場合はtrue、それ以外の場合はfalse
 */
export default function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}
