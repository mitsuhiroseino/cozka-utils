import * as R from 'remeda';
import { DebounceOptions, DebounceResult } from './types';

/**
 * 対象の関数をdebounceする関数を作成する
 * @param fn
 * @param wait
 * @returns
 */
export default function debounce<ARGS extends unknown[]>(
  fn: (...args: ARGS) => void,
  wait: number,
  options: DebounceOptions = {},
): DebounceResult<ARGS> {
  const { triggerAt = 'end' } = options;
  const debouncedFn = R.funnel((args: ARGS) => fn(...args), {
    reducer: (_, ...args: ARGS) => args,
    minQuietPeriodMs: wait,
    triggerAt: triggerAt as any,
  });

  return Object.assign((...args: ARGS) => debouncedFn.call(...args), {
    cancel: () => debouncedFn.cancel(),
    flush: () => debouncedFn.flush(),
    isIdle: () => debouncedFn.isIdle,
  });
}
