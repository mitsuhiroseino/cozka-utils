/**
 * 配列の先頭から見て最初のisTargetがtrueを返す値を返す
 * Array.prototype.findのローレベル版
 * @param data 配列
 */
const maybeFind = <V>(
  data: V[],
  isTarget: (value: V) => boolean,
): V | undefined => _maybeFind(data, isTarget);
maybeFind.dataLast =
  <V>(isTarget: (value: V) => boolean) =>
  (data: V[]) =>
    maybeFind(data, isTarget);
export default maybeFind;

function _maybeFind<V>(
  data: V[],
  isTarget: (value: V) => boolean,
): V | undefined {
  if (data) {
    for (const item of data) {
      if (isTarget(item)) {
        return item;
      }
    }
  }
  return undefined;
}
