import fitToRatio from '../fitToRatio';
import { FitToPlatinumOptions } from './types';

/**
 * 白金比 (≈ 1.325)
 */
const RATIO = 1.324717957244746;

/**
 * valueに対して白金比になる値を返す\
 *
 * 白金比 (≈ 1.325)\
 * 黄金比よりも控えめで洗練された比率
 *
 * - 日本の近代建築
 * - 日本のキャラデザイン
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToPlatinum(
  value: number,
  options?: FitToPlatinumOptions,
) {
  return fitToRatio(value, RATIO, options);
}
