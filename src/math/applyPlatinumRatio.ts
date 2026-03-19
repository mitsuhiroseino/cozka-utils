import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * 白金比 (≈ 1.325)
 * 黄金比よりも控えめで洗練された比率
 *
 * - 日本の近代建築
 * - 日本のキャラデザイン
 */
const RATIO = 1.324717957244746;

export type ApplyPlatinumRatioOptions = ApplyRatioOptions;

/**
 * valueに対して白金比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applyPlatinumRatio(
  value: number,
  options?: ApplyPlatinumRatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
