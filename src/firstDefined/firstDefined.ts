/**
 * 渡された引数を左から見て最初のundefined以外の値を返す
 * @param data 最初の値
 * @param args 以降の値
 */
const firstDefined = <V>(data: V, ...args: V[]): V | undefined =>
  _firstDefined(data, ...args);
firstDefined.dataLast =
  <V>(...args: V[]) =>
  (data: V) =>
    firstDefined(data, ...args);
export default firstDefined;

function _firstDefined<V>(data: V, ...args: V[]): V | undefined {
  if (data !== undefined) {
    return data;
  }
  for (const arg of args) {
    if (arg !== undefined) {
      return arg;
    }
  }
  return undefined;
}
