import { PushAllOptions } from './types';

/**
 * 配列の全ての要素を別の配列に追加する。
 * 追加先配列がない場合は新しい配列を返す。
 * @param data 追加先配列
 * @param source 追加する要素を持つ配列
 * @returns 要素を追加した配列
 */
const pushAll = <T>(data: T[], source: T[], options?: PushAllOptions) =>
  _pushAll(data, source, options);
pushAll.dataLast =
  <T>(source: T[], options?: PushAllOptions) =>
  (data: T[]) =>
    _pushAll(data, source, options);
export default pushAll;

function _pushAll<T>(
  data: T[],
  source: T[],
  options: PushAllOptions = {},
): T[] {
  if (data && source) {
    if (options.inplace) {
      data.push(...source);
      return data;
    } else {
      return [...data, ...source];
    }
  }
  return data;
}
