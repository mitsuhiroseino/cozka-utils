import * as R from 'remeda';
import fold from '../../string/fold';
import countKeys from '../countKeys';
import { FilterByKeysOptions } from './types';

const DEFAULT_NORMALIZE_FN = R.identity();

/**
 * 指定の文字列が含まれるキー以外をフィルタリングする
 * @param target
 * @param condition
 * @param options
 * @returns
 */
export default function filterByKeys<T = any>(
  target: T,
  condition: PropertyKey,
  options: FilterByKeysOptions = {},
): T {
  const { normalize } = options;

  let normalizeFn: (value: string) => string = DEFAULT_NORMALIZE_FN;
  if (condition !== undefined) {
    if (normalize && R.isString(condition)) {
      normalizeFn = fold;
      condition = normalizeFn(condition);
    }
  }

  return _filter(target, condition, normalizeFn) ?? null;
}

function _filter(
  target: any,
  condition: PropertyKey,
  normalizeFn: (value: string) => string,
): any {
  if (Array.isArray(target)) {
    // array
    let array = [];
    for (let i = 0; i < target.length; i++) {
      const item = target[i];
      const result = _filter(item, condition, normalizeFn);
      if (result != null) {
        array[i] = result;
      }
    }
    if (array.length) {
      return array;
    }
  } else if (R.isPlainObject(target)) {
    // object
    let obj: Record<PropertyKey, unknown> = {};
    for (const key in target) {
      const value = target[key];
      if (R.isString(condition) && R.isString(key)) {
        // 文字列の場合
        const normalizedKey = normalizeFn(key);
        if (normalizedKey !== '' && normalizedKey.includes(condition)) {
          // conditionが含まれる
          obj[key] = value;
        }
      } else if (condition === key) {
        // 文字列以外の場合
        obj[key] = value;
      }

      if (key in obj === false) {
        // keyが不一致の場合は子要素を処理
        const result = _filter(value, condition, normalizeFn);
        if (result != null) {
          obj[key] = result;
        }
      }
    }
    if (countKeys(obj)) {
      return obj;
    }
  }
}
