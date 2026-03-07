import { DataFirst } from '../types';
import { EnsureArrayOptions } from './types';

const ensureArray: DataFirst<typeof _ensureArray> = <T>(
  data: T | T[] | null | undefined,
  options?: EnsureArrayOptions,
): T[] => {
  return _ensureArray(data, options);
};
export default ensureArray;

ensureArray.dataLast = (options: EnsureArrayOptions = {}) => {
  const callback = <T>(data: T | T[] | null | undefined): T[] =>
    _ensureArray(data, options);
  return callback;
};

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
