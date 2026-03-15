/**
 * 値がnullまたはundefinedであるかを判定する。
 * @param value 判定する値
 * @returns 値がnullまたはundefinedである場合はtrue、それ以外の場合はfalse
 */
export default function isNullish(value: unknown): value is null | undefined {
  return value == null;
}
