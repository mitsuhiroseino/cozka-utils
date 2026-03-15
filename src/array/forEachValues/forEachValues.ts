import { ForEachValuesOptions } from './types';

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
