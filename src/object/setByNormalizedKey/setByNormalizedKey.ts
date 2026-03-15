import { _getTransformedKey } from '../../_internal/_normalizedKeyHelpers';
import { SetByNormalizedKeyOptions } from './types';

/**
 * オブジェクトのキーの大文字・小文字などの違いを無視して値を設定する
 * @param data 対象のオブジェクト
 * @param key 設定先のキー
 * @param value 設定する値
 * @param options オプション
 */
export default function setByNormalizedKey<T extends Record<string, unknown>>(
  data: T,
  key: string,
  value: unknown,
  options?: SetByNormalizedKeyOptions,
): T {
  if (!data) {
    return data;
  }

  const normalizedKey = _getTransformedKey(key, data, options);
  for (const existingKey in data) {
    if (Object.hasOwn(data, existingKey)) {
      if (_getTransformedKey(existingKey, data, options) === normalizedKey) {
        data[existingKey] = value as any;
        return data;
      }
    }
  }
  data[key as keyof T] = value as any;

  return data;
}
