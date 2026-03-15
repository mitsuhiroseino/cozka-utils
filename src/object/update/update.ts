import isEqualBy from '../../compare/isEqualBy';
import { UpdateOptions } from './types';

/**
 * valuesに設定された値でobjectを更新する
 * 値の変更が無いキーは更新しない
 * @param object 更新対象のオブジェクト
 * @param values 更新する値を持ったオブジェクト
 * @param options オプション
 * @returns 更新されたキーと以前の値
 */
export default function update<T extends Record<PropertyKey, unknown>>(
  object: T,
  values: Partial<T>,
  options?: UpdateOptions,
): Partial<T> {
  const oldValues: Partial<T> = {};
  for (const key in values) {
    if (Object.hasOwn(values, key)) {
      const value = values[key];
      const oldValue = object[key];
      if (!isEqualBy(oldValue, value, options)) {
        object[key] = value;
        oldValues[key] = oldValue;
      }
    }
  }
  return oldValues;
}
