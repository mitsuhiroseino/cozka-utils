/**
 * 渡された引数を左から見て最初のnull,undefined以外の値を返す
 * @param data 最初の値
 * @param args 以降の値
 */
const firstPresent = <V>(data: V, ...args: V[]): V | undefined =>
  _firstPresent(data, ...args);
firstPresent.dataLast =
  <V>(...args: V[]) =>
  (data: V) =>
    firstPresent(data, ...args);
export default firstPresent;

function _firstPresent<V>(data: V, ...args: V[]): V | undefined {
  if (data != null) {
    return data;
  }
  for (const arg of args) {
    if (arg != null) {
      return arg;
    }
  }
  return undefined;
}
