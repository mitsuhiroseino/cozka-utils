import * as R from 'remeda';
import { ThrottleOptions, ThrottleResult } from './types';

/**
 * 対象の関数をthrottleする関数を作成する
 * @param fn
 * @param wait
 * @returns
 */
export default function throttle<ARGS extends unknown[]>(
  fn: (...args: ARGS) => void,
  wait: number,
  options: ThrottleOptions = {},
): ThrottleResult<ARGS> {
  const { triggerAt = 'end' } = options;
  const throttledFn = R.funnel((args: ARGS) => fn(...args), {
    reducer: (_, ...args: ARGS) => args,
    minQuietPeriodMs: wait,
    maxBurstDurationMs: wait,
    triggerAt: triggerAt as any,
  });

  return Object.assign((...args: ARGS) => throttledFn.call(...args), {
    cancel: () => throttledFn.cancel(),
    flush: () => throttledFn.flush(),
    isIdle: () => throttledFn.isIdle,
  });
}
