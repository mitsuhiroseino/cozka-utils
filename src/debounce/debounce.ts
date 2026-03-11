import * as R from 'remeda';

export interface DebounceResult<ARGS extends unknown[], RETURN> {
  (...args: ARGS): void;
  cancel(): void;
  flush(): void;
  isIdle(): boolean;
}

/**
 * 対象の関数をdebounceする関数を作成する
 * @param fn
 * @param wait
 * @returns
 */
export default function debounce<ARGS extends unknown[], RETURN>(
  fn: (...args: ARGS) => RETURN,
  wait: number,
): DebounceResult<ARGS, RETURN> {
  const debouncedFn = R.funnel((args: ARGS) => fn(...args), {
    reducer: (_, ...args: ARGS) => args,
    minQuietPeriodMs: wait,
    triggerAt: 'end',
  });

  return Object.assign((...args: ARGS) => debouncedFn.call(...args), {
    cancel: () => debouncedFn.cancel(),
    flush: () => debouncedFn.flush(),
    isIdle: () => debouncedFn.isIdle,
  });
}
