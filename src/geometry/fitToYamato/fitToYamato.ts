import fitToSqrt2 from '../fitToSqrt2';
import { FitToYamatoOptions } from './types';

/**
 * valueに対して大和比になる値を返す\
 *
 * 大和比 (≈ 1.414)\
 * 日本の伝統的な比率。√2比の別名\
 * 日本人が白銀比と呼ぶ場合はこちらを指していることが多い\
 *
 * - A4サイズの用紙比率
 * - 日本の伝統建築
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToYamato(
  value: number,
  options?: FitToYamatoOptions,
) {
  return fitToSqrt2(value, options);
}
