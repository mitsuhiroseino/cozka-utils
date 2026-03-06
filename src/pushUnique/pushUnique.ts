/**
 * 同じ要素が配列に存在しない場合のみ要素を追加する。\
 * 要素数が少ない場合は`pushUniqueLite`を使った方が高速な場合がある。
 * @param array
 * @param items
 */
export default function pushUnique<T>(array: T[], items: T[]): T[] {
  if (array) {
    const existingSet = new Set(array);

    for (const item of items) {
      if (existingSet.has(item)) {
        continue;
      }
      existingSet.add(item);
      array.push(item);
    }
  }

  return array;
}
