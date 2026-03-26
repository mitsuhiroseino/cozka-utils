import fitToRatio from '../fitToRatio';
import { FitToSilverOptions } from './types';

/**
 * 白銀比 (≈ 2.414)
 */
const RATIO = 1 + Math.sqrt(2);

/**
 * valueに対して白銀比になる値を返す\
 *
 * 白銀比 (≈ 2.414)\
 * 日本の美意識に強く影響を与えている比率
 *
 * - 法隆寺の五重塔、金閣寺 などの寺社建築
 * - 畳の比率
 *
 * @param value
 * @param options
 * @returns
 */
export default function fitToSilver(
  value: number,
  options?: FitToSilverOptions,
) {
  return fitToRatio(value, RATIO, options);
}
