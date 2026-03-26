import fitToRatio from '../fitToRatio';
import { FitToDoubleOptions } from './types';

/**
 * 1:2
 */
const RATIO = 2;

/**
 * valueに対して1:2(Double)になる値を返す\
 *
 * 1:2\
 * 最も基本的で規律のある比率
 *
 * - 意図的な規則性を持たせる場合
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToDouble(
  value: number,
  options?: FitToDoubleOptions,
) {
  return fitToRatio(value, RATIO, options);
}
