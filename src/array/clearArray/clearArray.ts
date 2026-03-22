/**
 * 配列の要素を全て削除する。
 * @param data
 * @returns 削除された全要素
 */
export default function clearArray<T>(data: T[]): T[] {
  if (!Array.isArray(data)) {
    return [];
  }
  // 全要素を削除し、削除された要素の配列を返す
  return data.splice(0);
}
