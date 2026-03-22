import forEachValues from '../forEachValues';
import { MaybeAssignOptions } from './types';

/**
 * valuesにあるundefinedでない値のみtargetへ適用する
 * @param target
 * @param values
 * @param options
 * @returns
 */
export default function maybeAssign<
  T extends object = {},
  V extends object = {},
>(target: T, values: V, options: MaybeAssignOptions = {}): T & V {
  if (target && values) {
    const { skipNull, ...opts } = options;
    const isValidValue = skipNull
      ? (value) => value != null
      : (value) => value !== undefined;
    forEachValues(
      values,
      (value, key) => {
        if (isValidValue(value)) {
          target[key] = value;
        }
      },
      opts,
    );
  }
  return target as T & V;
}
