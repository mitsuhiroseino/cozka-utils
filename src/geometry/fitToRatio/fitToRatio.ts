import { FitToRatioOptions } from './types';

/**
 * 比率に合った値を返す
 * @param value 元の値
 * @param ratio 比率
 * @param options
 * @returns
 */
export default function fitToRatio(
  value: number,
  ratio: number,
  options: FitToRatioOptions = {},
) {
  const { mode = 'expand', decimals = 3 } = options;
  const result = mode === 'shrink' ? value / ratio : value * ratio;
  return Number(result.toFixed(decimals));
}
