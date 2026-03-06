import isEmpty from 'src/isEmptyValue';
import { RotateArrayOptions } from './types';

/**
 * 配列の前方の要素を削除し末尾に追加する
 * @param array 対象の配列
 * @param options オプション
 * @returns
 */
export default function rotateArray<T>(
  array: T[],
  options: RotateArrayOptions = {},
): T[] {
  const { count = 1, inplace } = options;
  let offset;
  if (isEmpty(array) || count === 0 || (offset = count % array.length) === 0) {
    return inplace ? array : [];
  }

  if (inplace) {
    const head = array.splice(0, offset);
    array.push(...head);
    return array;
  } else {
    const head = array.slice(0, offset);
    const tail = array.slice(offset);
    return [...head, ...tail];
  }
}
