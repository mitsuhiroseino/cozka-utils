import fitToRatio from '../fitToRatio';
import { FitToSqrt2Options } from './types';

/**
 * √2比 (≈ 1.414)
 */
const RATIO = Math.sqrt(2);

/**
 * valueに対して√2比になる値を返す\
 *
 * √2比 (≈ 1.414)\
 * 建築・デザインの基礎となる幾何学的な比率
 *
 * - A4サイズの用紙比率
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToSqrt2(value: number, options?: FitToSqrt2Options) {
  return fitToRatio(value, RATIO, options);
}
