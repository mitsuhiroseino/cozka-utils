import * as R from 'remeda';
import _parsePath from '../_internal/_parsePath';

export default function get<T, R = unknown>(
  data: T,
  path: PropertyKey | PropertyKey[],
): R | undefined {
  if (data == null) {
    return undefined;
  }
  const keys = _parsePath(path);
  // @ts-ignore
  return R.prop(data, ...keys);
}
