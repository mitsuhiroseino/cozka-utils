/**
 * 同じ要素が配列に存在しない場合のみ要素を追加する。\
 * 要素数が100個くらいまでの小さな配列向け。
 * @param array
 * @param items
 */
export default function pushUniqueLite<T>(array: T[], items: T[]): T[] {
  if (array) {
    for (const item of items) {
      if (!array.includes(item)) {
        array.push(item);
      }
    }
  }
  return array;
}
