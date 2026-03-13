import maybeApply from '../maybeApply';

/**
 * fnが存在する場合のみ実行する
 * @param fn
 * @param args
 */
export default function maybeCall<A extends unknown[], R>(
  fn: ((...args: A) => R) | null | undefined,
  ...args: A
): R | undefined {
  return maybeApply(fn, args);
}
