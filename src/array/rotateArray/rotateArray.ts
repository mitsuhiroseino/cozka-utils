import isEmpty from 'src/type/isEmptyValue';
import { RotateArrayOptions } from './types';

/**
 * 配列の前方の要素を削除し末尾に追加する
 * @param data 対象の配列
 * @param options オプション
 * @returns
 */
const rotateArray = <I>(data: I[], options?: RotateArrayOptions) =>
  _rotateArray(data, options);
rotateArray.dataLast =
  (options?: RotateArrayOptions) =>
  <I>(data: I[]) =>
    _rotateArray(data, options);
export default rotateArray;

function _rotateArray<I>(data: I[], options: RotateArrayOptions = {}): I[] {
  const { count = 1, inplace } = options;
  let offset;
  if (isEmpty(data) || count === 0 || (offset = count % data.length) === 0) {
    return inplace ? data : [];
  }

  if (inplace) {
    const head = data.splice(0, offset);
    data.push(...head);
    return data;
  } else {
    const head = data.slice(0, offset);
    const tail = data.slice(offset);
    return [...head, ...tail];
  }
}
