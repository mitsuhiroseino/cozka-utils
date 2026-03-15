import { InsertAtOptions } from './types';

/**
 * 配列の指定の位置に要素を追加する。
 * @param data 配列
 * @param index 追加先のインデックス
 * @param items 追加する要素
 */
const insertAt = <T>(
  data: T[],
  index: number,
  items: T[],
  options?: InsertAtOptions,
): T[] => _insertAt(data, index, items, options);
insertAt.dataLast =
  (index: number, items: any[], options?: InsertAtOptions) =>
  <T>(data: T[]) =>
    _insertAt(data, index, items, options);
export default insertAt;

function _insertAt<T>(
  data: T[],
  index: number,
  items: T[],
  options: InsertAtOptions = {},
): T[] {
  if (data) {
    index = Math.max(0, Math.min(index, data.length));
    if (options.inplace) {
      data.splice(index, 0, ...items);
    } else {
      data = [...data];
      data.splice(index, 0, ...items);
    }
  }
  return data;
}
