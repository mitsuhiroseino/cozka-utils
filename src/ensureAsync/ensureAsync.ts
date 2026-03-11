import safeApply from '../safeApply';

/**
 * 非同期の関数として実行する
 * @param fn
 * @param args
 */
export default function ensureAsync<A extends unknown[], R>(
  fn: (...args: A) => R,
  args?: A,
): Promise<R> {
  return Promise.resolve().then(() => {
    return safeApply(fn, args);
  });
}
