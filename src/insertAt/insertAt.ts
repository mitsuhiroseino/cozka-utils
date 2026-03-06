import { InsertAtOptions } from './types';

/**
 * 配列の指定の位置に要素を追加する。
 * @param array 配列
 * @param index 追加先のインデックス
 * @param items 追加する要素
 */
export default function insertAt<T>(
  array: T[],
  index: number,
  items: T[],
  options: InsertAtOptions = {},
): T[] {
  if (array) {
    index = Math.max(0, Math.min(index, array.length));
    if (options.inplace) {
      array.splice(index, 0, ...items);
    } else {
      array = [...array];
      array.splice(index, 0, ...items);
    }
  }
  return array;
}
