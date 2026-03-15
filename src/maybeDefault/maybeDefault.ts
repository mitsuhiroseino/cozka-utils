import forEachValues from '../forEachValues';
import { MaybeDefaultOptions } from './types';

/**
 * 対象のオブジェクトのプロパティ値がundefinedのとき、デフォルト値のプロパティ値がundefinedでなければ設定する。
 *
 * @param target 対象のオブジェクト
 * @param defaultValues デフォルト値
 * @param options オプション
 * @returns デフォルト値が設定されたオブジェクト
 */
export default function maybeDefault<T extends {}, V extends {}>(
  target: T,
  defaultValues: V,
  options: MaybeDefaultOptions = {},
): T & V {
  if (target && defaultValues) {
    const { skipNull, overwriteNull, ...opts } = options;
    const isValidValue = skipNull
      ? (value) => value != null
      : (value) => value !== undefined;
    const isOverwritedValue = overwriteNull
      ? (value) => value == null
      : (value) => value === undefined;
    forEachValues(
      defaultValues,
      (value, key) => {
        if (isValidValue(value) && isOverwritedValue(target[key])) {
          target[key] = value;
        }
      },
      opts,
    );
  }
  return target as T & V;
}
