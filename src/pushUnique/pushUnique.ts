/**
 * 同じ要素が配列に存在しない場合のみ要素を追加する。\
 * 要素数が少ない場合は`pushUniqueLite`を使った方が高速な場合がある。
 * @param data
 * @param items
 */
const pushUnique = <T>(data: T[], items: T[]) => _pushUnique(data, items);
pushUnique.dataLast =
  <T>(items: T[]) =>
  (data: T[]) =>
    _pushUnique(data, items);
export default pushUnique;

function _pushUnique<T>(data: T[], items: T[]): T[] {
  if (data) {
    const existingSet = new Set(data);

    for (const item of items) {
      if (existingSet.has(item)) {
        continue;
      }
      existingSet.add(item);
      data.push(item);
    }
  }

  return data;
}
