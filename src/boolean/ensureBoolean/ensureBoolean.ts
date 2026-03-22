import * as R from 'remeda';
import { EnsureBooleanOptions } from './types';

/**
 * 真偽値であることを保証する\
 * @param data 変換する値
 * @param options オプション
 * @returns 真偽値に変換された値
 */
const ensureBoolean = (
  data: boolean | unknown | null | undefined,
  options?: EnsureBooleanOptions,
): boolean => _ensureBoolean(data, options);
ensureBoolean.dataLast = (options?: EnsureBooleanOptions) => {
  return (data: boolean | unknown | null | undefined): boolean =>
    _ensureBoolean(data, options);
};
export default ensureBoolean;

const DEFAULT_TRUE_VALUES = new Set(['true', 'True', 'TRUE']);

function _ensureBoolean(
  data: boolean | unknown | null | undefined,
  options: EnsureBooleanOptions = {},
): boolean {
  if (R.isBoolean(data)) {
    return data;
  }

  if (R.isString(data)) {
    const { ignoreCase, trueValues } = options;
    const str = ignoreCase ? data.toLowerCase() : data;
    const trueSet = trueValues
      ? new Set(
          ignoreCase
            ? trueValues.map((value) => value.toLowerCase())
            : trueValues,
        )
      : DEFAULT_TRUE_VALUES;
    return trueSet.has(str);
  }

  return !!data;
}
