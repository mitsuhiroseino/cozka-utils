import * as R from 'remeda';
import _parsePath from '../../_internal/_parsePath';

const get = <T, R = unknown>(
  data: T,
  path: PropertyKey | PropertyKey[],
): R | undefined => _get(data, path);
get.dataLast =
  <T, R = unknown>(path: PropertyKey | PropertyKey[]) =>
  (data: T): R | undefined =>
    _get(data, path);
export default get;

function _get<T, R = unknown>(
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
