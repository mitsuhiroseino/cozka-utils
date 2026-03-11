import * as R from 'remeda';

export interface ThrottleResult<ARGS extends unknown[], RETURN> {
  (...args: ARGS): void;
  cancel(): void;
  flush(): void;
  isIdle(): boolean;
}

/**
 * 対象の関数をthrottleする関数を作成する
 * @param fn
 * @param wait
 * @returns
 */
export default function throttle<ARGS extends unknown[], RETURN>(
  fn: (...args: ARGS) => RETURN,
  wait: number,
): ThrottleResult<ARGS, RETURN> {
  const throttledFn = R.funnel((args: ARGS) => fn(...args), {
    reducer: (_, ...args: ARGS) => args,
    minQuietPeriodMs: wait,
    maxBurstDurationMs: wait,
    triggerAt: 'end',
  });

  return Object.assign((...args: ARGS) => throttledFn.call(...args), {
    cancel: () => throttledFn.cancel(),
    flush: () => throttledFn.flush(),
    isIdle: () => throttledFn.isIdle,
  });
}
