import { PushAllOptions } from './types';

/**
 * 配列の全ての要素を別の配列に追加する。
 * 追加先配列がない場合は新しい配列を返す。
 * @param target 追加先配列
 * @param source 追加する要素を持つ配列
 * @returns 要素を追加した配列
 */
export default function pushAll<T>(
  target: T[],
  source: T[],
  options: PushAllOptions = {},
): T[] {
  if (target && source) {
    if (options.inplace) {
      target.push(...source);
      return target;
    } else {
      return [...target, ...source];
    }
  }
  return target;
}
