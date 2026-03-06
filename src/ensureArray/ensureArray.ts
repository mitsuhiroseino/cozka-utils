import { EnsureArrayOptions } from './types';

/**
 * valueが配列でない場合、配列に変換し返却する。
 * @param value
 */
export default function ensureArray<T>(
  value: T | T[] | null | undefined,
  options: EnsureArrayOptions = {},
): T[] {
  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    if (options.raw) {
      return value;
    } else {
      return [...value];
    }
  }

  return [value];
}
