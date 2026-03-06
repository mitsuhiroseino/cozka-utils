/**
 * 値がnullまたはundefinedでないことを確認する。
 * @param value チェックする値
 * @returns 値がnullまたはundefinedでない場合はtrue、それ以外の場合はfalse
 */
export default function isPresent<T>(value: T | null | undefined): value is T {
  return value != null;
}
