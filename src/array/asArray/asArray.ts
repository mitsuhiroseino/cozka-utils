import { AsArrayOptions } from './types';

/**
 * 対象を配列として見なして変換する。
 * 文字列以外のIterableなオブジェクトは展開し、それ以外は配列で包む。
 */
const asArray = <T>(data: any, options: AsArrayOptions = {}): T[] =>
  _asArray(data, options);
asArray.dataLast =
  (options: AsArrayOptions = {}) =>
  <T>(data: any): T[] =>
    _asArray(data, options);
export default asArray;

function _asArray<T>(data: any, options: AsArrayOptions = {}): T[] {
  if (data == null) {
    return [];
  } else if (Array.isArray(data)) {
    return options.raw ? data : [...data];
  } else if (typeof data === 'string') {
    return [data as unknown as T];
  } else if (Symbol.iterator in Object(data)) {
    return Array.from(data as Iterable<T>);
  }

  return [data as T];
}
