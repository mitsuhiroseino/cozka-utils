/**
 * 同じ要素が配列に存在しない場合のみ要素を追加する。\
 * 要素数が100個くらいまでの小さな配列向け。
 * @param array
 * @param items
 */
const pushUniqueLite = <T>(data: T[], items: T[]) =>
  _pushUniqueLite(data, items);
pushUniqueLite.dataLast =
  <T>(items: T[]) =>
  (data: T[]) =>
    _pushUniqueLite(data, items);
export default pushUniqueLite;

function _pushUniqueLite<T>(data: T[], items: T[]): T[] {
  if (data) {
    for (const item of items) {
      if (!data.includes(item)) {
        data.push(item);
      }
    }
  }
  return data;
}
