import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * 黄金比 (φ ≈ 1.618)
 * 世界的に知られた美しい比率
 *
 * - レオナルド・ダ・ヴィンチの「モナ・リザ」
 * - フィボナッチスパイラル（黄金螺旋）を使った構図設計
 * - パルテノン神殿
 * - Appleのロゴ
 */
const RATIO = (1 + Math.sqrt(5)) / 2;

export type ApplyGoldenRatioOptions = ApplyRatioOptions;

/**
 * valueに対して黄金比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applyGoldenRatio(
  value: number,
  options?: ApplyGoldenRatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
