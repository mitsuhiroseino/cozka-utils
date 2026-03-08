import { EnsureArrayOptions } from './types';

/**
 * 値が配列でない場合、配列に変換し返却する
 * @param data 変換する値
 * @param options オプション
 * @returns 配列に変換された値
 */
const ensureArray = <T>(
  data: T | T[] | null | undefined,
  options?: EnsureArrayOptions,
): T[] => _ensureArray(data, options);
ensureArray.dataLast = (options: EnsureArrayOptions = {}) => {
  return <T>(data: T | T[] | null | undefined): T[] =>
    _ensureArray(data, options);
};
export default ensureArray;

function _ensureArray<T>(
  data: T | T[] | null | undefined,
  options: EnsureArrayOptions = {},
): T[] {
  if (data == null) {
    return [];
  }

  if (Array.isArray(data)) {
    return options.raw ? data : [...data];
  }

  return [data];
}
