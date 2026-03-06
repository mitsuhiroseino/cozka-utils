/**
 * 配列の要素を全て削除する。
 * @param array
 */
export default function clearArray<T>(array: T[]): T[] {
  if (array) {
    array.length = 0;
  }
  return array;
}
