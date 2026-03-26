import fitToRatio from '../fitToRatio';
import { FitToSqrt3Options } from './types';

/**
 * √3比 (≈ 1.732)
 */
const RATIO = Math.sqrt(3);

/**
 * valueに対して√3比になる値を返す\
 *
 * √3比 (≈ 1.732)\
 * 建築・デザインの基礎となる幾何学的な比率
 *
 * - 正三角形の高さ比率（モジュール建築に活用）
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToSqrt3(value: number, options?: FitToSqrt3Options) {
  return fitToRatio(value, RATIO, options);
}
