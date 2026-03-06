/**
 * 'a.b.0' 形式の文字列、または PropertyKey[] を正規化された配列に変換
 */
export default function _parsePath(
  path: string | PropertyKey[],
): PropertyKey[] {
  if (Array.isArray(path)) {
    return path;
  }

  return path.split('.').map((s) => (/^\d+$/.test(s) ? Number(s) : s));
}
