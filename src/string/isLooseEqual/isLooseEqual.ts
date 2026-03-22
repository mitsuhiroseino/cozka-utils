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
  const { noNormalizationForValue1, noNormalizationForValue2 } = options;
  // 比較
  const target1 = noNormalizationForValue1 ? value1 : fold(value1, options);
  const target2 = noNormalizationForValue2 ? value2 : fold(value2, options);
  return target1 === target2;
}
