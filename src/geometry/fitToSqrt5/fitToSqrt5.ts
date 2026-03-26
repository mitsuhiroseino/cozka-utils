import fitToRatio from '../fitToRatio';
import { FitToSqrt5Options } from './types';

/**
 * √5比 (≈ 2.236)
 */
const RATIO = Math.sqrt(5);

/**
 * valueに対して√5比になる値を返す\
 *
 * √5比 (≈ 2.236)\
 * 黄金比と関連が深く対称性や均整の取れたデザインに活用される比率
 *
 * - ギリシャ建築の柱の配置
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToSqrt5(value: number, options?: FitToSqrt5Options) {
  return fitToRatio(value, RATIO, options);
}
