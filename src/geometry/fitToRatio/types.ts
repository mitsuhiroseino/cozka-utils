export type FitToRatioOptions = {
  /**
   * 計算の方向
   * - `expand`: 値を大きくする (value * ratio)
   * - `shrink`: 値を小さくする (value / ratio)
   *
   * @default 'expand'
   */
  mode?: 'expand' | 'shrink';

  /**
   * 小数点以下の桁数
   * @default 3
   */
  decimals?: number;
};
