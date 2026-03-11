import safeApply from '../safeApply';

/**
 * fnが存在する場合のみ実行する
 * @param fn
 * @param args
 */
export default function safeCall<A extends unknown[], R>(
  fn: ((...args: A) => R) | null | undefined,
  ...args: A
): R | undefined {
  return safeApply(fn, args);
}
