export type ApplyRatioOptions = {
  /**
   * - `larger`: value * ratio
   * - `smaller`: value / ratio
   */
  returnAs?: 'larger' | 'smaller';

  /**
   * 小数点以下の桁数
   */
  decimals?: number;
};

/**
 * 比率に合った値を返す
 * @param value 元の値
 * @param ratio 比率
 * @param options
 * @returns
 */
export default function applyRatio(
  value: number,
  ratio: number,
  options: ApplyRatioOptions = {},
) {
  const { returnAs, decimals } = options;
  const result = returnAs === 'smaller' ? value / ratio : value * ratio;
  return Number(result.toFixed(decimals));
}
