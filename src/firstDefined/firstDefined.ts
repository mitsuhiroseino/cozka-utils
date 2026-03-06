/**
 * 渡された引数を左から見て最初のundefined以外の値を返す
 * @param args
 */
export default function firstDefined<V = any>(...args: V[]): V | undefined {
  for (const arg of args) {
    if (arg !== undefined) {
      return arg;
    }
  }
  return;
}
