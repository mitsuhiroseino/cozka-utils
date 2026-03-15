import _createContainer from '../../_internal/_createContainer';
import _parsePath from '../../_internal/_parsePath';

/**
 * オブジェクトを更新して同じオブジェクトを返します（破壊的変更）。
 * @param data 更新対象のオブジェクト
 * @param path 更新するプロパティのパス（例: 'a.b.0' または ['a', 'b', 0]）
 * @param value 設定する値
 * @returns 更新された同じオブジェクト
 */
const setMutable = <T extends object>(
  data: T,
  path: string | PropertyKey[],
  value: any,
) => _setMutable(data, path, value);
setMutable.dataLast =
  <T extends object>(path: string | PropertyKey[], value: any) =>
  (data: T) =>
    _setMutable(data, path, value);
export default setMutable;

function _setMutable<T extends object>(
  data: T,
  path: string | PropertyKey[],
  value: any,
): T {
  const segments = _parsePath(path);
  let current: any = data;

  for (let i = 0; i < segments.length; i++) {
    const key = segments[i];
    if (i === segments.length - 1) {
      current[key] = value;
    } else {
      if (current[key] === null || typeof current[key] !== 'object') {
        current[key] = _createContainer(segments[i + 1]);
      }
      current = current[key];
    }
  }
  return data;
}
