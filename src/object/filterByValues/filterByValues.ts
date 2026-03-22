import * as R from 'remeda';
import fold from '../../string/fold';
import countKeys from '../countKeys';
import { FilterByValuesOptions } from './types';

const DEFAULT_NORMALIZE_FN = R.identity();

/**
 * 指定の文字列が含まれる値を持つ項目以外をフィルタリングする
 * @param target
 * @param condition
 * @param options
 * @returns
 */
export default function filterValue<T = any>(
  target: T,
  condition: unknown,
  options: FilterByValuesOptions = {},
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
  condition: unknown,
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
      // 子要素を処理
      const result = _filter(target[key], condition, normalizeFn);
      if (result != null) {
        obj[key] = result;
      }
    }
    if (countKeys(obj)) {
      return obj;
    }
  } else {
    // valueで比較
    if (R.isString(condition) && R.isString(target)) {
      // 文字列の場合
      const normalizedValue = normalizeFn(target);
      if (normalizedValue !== '' && normalizedValue.includes(condition)) {
        // conditionが含まれる
        return target;
      }
    } else if (condition === target) {
      // 文字列以外の場合
      // valueが一致
      return target;
    }
  }
}
