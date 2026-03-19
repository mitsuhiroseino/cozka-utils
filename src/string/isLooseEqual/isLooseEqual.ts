import fold from '../fold';
import { IsLooseEqualOptions } from './types';

/**
 * 2つの文字列が同等であることを判定する
 * @param value1 文字列1
 * @param value2 文字列2
 * @param options オプション
 * @returns
 */
export default function isLooseEqual(
  value1: string,
  value2: string,
  options: IsLooseEqualOptions = {},
): boolean {
  // 比較
  return fold(value1, options) === fold(value2, options);
}
