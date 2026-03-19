import applyRatio, { ApplyRatioOptions } from './applyRatio';

/**
 * 白銀比 (≈ 2.414)
 * 日本の美意識に強く影響を与えている比率
 *
 * - 法隆寺の五重塔、金閣寺 などの寺社建築
 * - 畳の比率
 */
const RATIO = 1 + Math.sqrt(2);

export type ApplySilverRatioOptions = ApplyRatioOptions;

/**
 * valueに対して白銀比になる値を返す
 * @param value
 * @param options
 * @returns
 */
export default function applySilverRatio(
  value: number,
  options?: ApplySilverRatioOptions,
) {
  return applyRatio(value, RATIO, options);
}
