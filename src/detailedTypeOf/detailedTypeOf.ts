import { VALUE_TYPE } from './constants';
import { ValueType } from './types';

/**
 * typeofの結果を返す。\
 * typeof value === 'object' の場合は詳細な型を返す
 *
 * @param data 任意の値
 * @returns
 */
const detailedTypeOf = (data: unknown): ValueType => _detailedTypeOf(data);
detailedTypeOf.dataLast = () => detailedTypeOf;
export default detailedTypeOf;

function _detailedTypeOf(data: unknown): ValueType {
  const type = typeof data;
  if (type === 'object') {
    if (data === null) {
      return VALUE_TYPE.NULL;
    } else if (Array.isArray(data)) {
      return VALUE_TYPE.ARRAY;
    } else if (Object.getPrototypeOf(data) === Object.prototype) {
      return VALUE_TYPE.PLAIN_OBJECT;
    } else if (data instanceof Date) {
      return VALUE_TYPE.DATE;
    } else if (data instanceof RegExp) {
      return VALUE_TYPE.REGEXP;
    } else if (data instanceof Error) {
      return VALUE_TYPE.ERROR;
    } else if (data instanceof Map) {
      return VALUE_TYPE.MAP;
    } else if (data instanceof Set) {
      return VALUE_TYPE.SET;
    } else if (data instanceof WeakMap) {
      return VALUE_TYPE.WEAK_MAP;
    } else if (data instanceof WeakSet) {
      return VALUE_TYPE.WEAK_SET;
    } else if (data instanceof Promise) {
      return VALUE_TYPE.PROMISE;
    } else if (data instanceof ArrayBuffer) {
      return VALUE_TYPE.ARRAY_BUFFER;
    } else if (data instanceof SharedArrayBuffer) {
      return VALUE_TYPE.SHARED_ARRAY_BUFFER;
    }
    return VALUE_TYPE.OBJECT;
  } else {
    return type;
  }
}
