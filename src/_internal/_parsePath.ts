import * as R from 'remeda';

/**
 * 'a.b[0].c' 形式の文字列をPropertyKey[]に変換
 */
export default function _parsePath(
  path: string | PropertyKey[],
): PropertyKey[] {
  return Array.isArray(path) ? path : R.stringToPath(path);
}
