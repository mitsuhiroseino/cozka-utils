/**
 * オブジェクトの列挙可能なプロパティ（キー）の数を返す
 * @param obj 対象のオブジェクト
 * @returns キーの数。オブジェクトでない場合は 0 を返す
 */
export default function countKeys(obj: unknown): number {
  if (obj === null || typeof obj !== 'object') {
    return 0;
  }
  return Object.keys(obj).length;
}
