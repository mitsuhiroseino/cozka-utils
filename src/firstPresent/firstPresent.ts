/**
 * 渡された引数を左から見て最初のnull,undefined以外の値を返す
 * @param args
 */
export default function firstPresent<V = any>(...args: V[]): V | undefined {
  for (const arg of args) {
    if (arg != null) {
      return arg;
    }
  }
  return;
}
