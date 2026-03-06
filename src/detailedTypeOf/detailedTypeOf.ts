import { VALUE_TYPE } from './constants';
import { ValueType } from './types';

/**
 * typeofの結果を返す。\
 * typeof value === 'object' の場合は詳細な型を返す
 *
 * @param value 任意の値
 * @returns
 */
export default function detailedTypeOf(value: unknown): ValueType {
  const type = typeof value;
  if (type === 'object') {
    if (value === null) {
      return VALUE_TYPE.NULL;
    } else if (Array.isArray(value)) {
      return VALUE_TYPE.ARRAY;
    } else if (Object.getPrototypeOf(value) === Object.prototype) {
      return VALUE_TYPE.PLAIN_OBJECT;
    } else if (value instanceof Date) {
      return VALUE_TYPE.DATE;
    } else if (value instanceof RegExp) {
      return VALUE_TYPE.REGEXP;
    } else if (value instanceof Error) {
      return VALUE_TYPE.ERROR;
    } else if (value instanceof Map) {
      return VALUE_TYPE.MAP;
    } else if (value instanceof Set) {
      return VALUE_TYPE.SET;
    } else if (value instanceof WeakMap) {
      return VALUE_TYPE.WEAK_MAP;
    } else if (value instanceof WeakSet) {
      return VALUE_TYPE.WEAK_SET;
    } else if (value instanceof Promise) {
      return VALUE_TYPE.PROMISE;
    } else if (value instanceof ArrayBuffer) {
      return VALUE_TYPE.ARRAY_BUFFER;
    } else if (value instanceof SharedArrayBuffer) {
      return VALUE_TYPE.SHARED_ARRAY_BUFFER;
    }
    return VALUE_TYPE.OBJECT;
  } else {
    return type;
  }
}
