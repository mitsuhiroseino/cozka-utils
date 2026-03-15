import { KIND_TYPE } from './constants';
import { KindType } from './types';

/**
 * typeofの拡張。\
 * typeof value === 'object' の場合により詳細な結果を返す
 *
 * @param data 任意の値
 * @returns
 */
const kind = (data: unknown): KindType => _kind(data);
kind.dataLast = () => kind;
export default kind;

function _kind(data: unknown): KindType {
  const type = typeof data;
  if (type === 'object') {
    if (data === null) {
      return KIND_TYPE.NULL;
    } else if (Array.isArray(data)) {
      return KIND_TYPE.ARRAY;
    } else if (Object.getPrototypeOf(data) === Object.prototype) {
      return KIND_TYPE.PLAIN_OBJECT;
    } else if (data instanceof Date) {
      return KIND_TYPE.DATE;
    } else if (data instanceof RegExp) {
      return KIND_TYPE.REGEXP;
    } else if (data instanceof Error) {
      return KIND_TYPE.ERROR;
    } else if (data instanceof Map) {
      return KIND_TYPE.MAP;
    } else if (data instanceof Set) {
      return KIND_TYPE.SET;
    } else if (data instanceof WeakMap) {
      return KIND_TYPE.WEAK_MAP;
    } else if (data instanceof WeakSet) {
      return KIND_TYPE.WEAK_SET;
    } else if (data instanceof Promise) {
      return KIND_TYPE.PROMISE;
    } else if (data instanceof ArrayBuffer) {
      return KIND_TYPE.ARRAY_BUFFER;
    } else if (data instanceof SharedArrayBuffer) {
      return KIND_TYPE.SHARED_ARRAY_BUFFER;
    }
    return KIND_TYPE.OBJECT;
  } else {
    return type;
  }
}
