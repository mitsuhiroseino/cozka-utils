import { ForEachValuesOptions } from './types';

/**
 * 配下の要素をcallbackで処理する
 * callbackがfalseを返した場合、処理を中断する
 * @param target
 * @param callback
 * @param options
 * @returns 処理が最後まで行われた場合にtrue、処理が中断された場合にfalse
 */
export default function forEachValues<T extends {}>(
  target: T,
  callback: (value: unknown, key: PropertyKey, obj: T) => void | boolean,
  options: ForEachValuesOptions = {},
): boolean {
  const { includeInherited } = options;
  if (target) {
    const has = includeInherited
      ? (target, key) => key in target
      : (target, key) => Object.hasOwn(target, key);
    for (const key in target) {
      if (has(target, key)) {
        const value = target[key];
        const result = callback(value, key, target);
        if (result === false) {
          return false;
        }
      }
    }
  }
  return true;
}
