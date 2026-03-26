import fitToRatio from '../fitToRatio';
import { FitToGoldenOptions } from './types';

/**
 * 黄金比 (φ ≈ 1.618)
 */
const RATIO = (1 + Math.sqrt(5)) / 2;

/**
 * valueに対して黄金比になる値を返す\
 *
 * 黄金比 (φ ≈ 1.618)\
 * 世界的に知られた美しい比率
 *
 * - レオナルド・ダ・ヴィンチの「モナ・リザ」
 * - フィボナッチスパイラル（黄金螺旋）を使った構図設計
 * - パルテノン神殿
 * - Appleのロゴ
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToGolden(
  value: number,
  options?: FitToGoldenOptions,
) {
  return fitToRatio(value, RATIO, options);
}
