import { IsValidNumberOptions } from './types';

/**
 * 値が有効な数値であるかを判定する
 * @param value 判定する値
 * @param options 無限大を許容するか等のオプション
 * @returns 有効な数値であれば true
 */
export default function isValidNumber(
  value: unknown,
  options: IsValidNumberOptions = {},
): boolean {
  // そもそも type が number でない、または NaN である場合は除外
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return false;
  }

  // 無限大のチェック
  if (!Number.isFinite(value)) {
    return !!options.allowInfinity;
  }

  return true;
}
