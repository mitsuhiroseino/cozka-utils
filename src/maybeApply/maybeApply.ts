/**
 * fnが存在する場合のみ実行する
 * @param fn
 * @param args
 */
export default function maybeApply<A extends unknown[], R>(
  fn: ((...args: A) => R) | null | undefined,
  args?: A,
): R | undefined {
  if (fn) {
    return fn.apply(null, (args || []) as A);
  } else {
    return undefined;
  }
}
