import { EnsureArrayOptions } from './types';

const ensureArray = <T>(
  data: T | T[] | null | undefined,
  options?: EnsureArrayOptions,
): T[] => {
  return _ensureArray(data, options);
};
export default ensureArray;

ensureArray.dataLast = (options: EnsureArrayOptions = {}) => {
  return <T>(data: T | T[] | null | undefined): T[] =>
    _ensureArray(data, options);
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
