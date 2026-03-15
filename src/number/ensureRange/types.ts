import { ENSURE_RANGE_MODE } from './constants';

/**
 * 値が範囲を超えた時の制限方法
 */
export type EnsureRangeMode =
  (typeof ENSURE_RANGE_MODE)[keyof typeof ENSURE_RANGE_MODE];

export type EnsureRangeOptions = {
  /**
   * 値が範囲外の場合の動作
   * デフォルトは`clamp`
   *
   * - min: 最小値を返す
   * - max: 最大値を返す
   * - loop: 値が一周しているというあつかいで算出した値を返す
   * - pingpong: 最小値と最大値の間を往復する形で算出た値を返す
   * - default: デフォルト値(未指定の場合は0)を返す
   * - clamp: 最小値未満の場合は最小値、最大値を超える場合は最大値を返す
   */
  mode?: EnsureRangeMode;

  /**
   * 値が最小値を下回っている場合の動作
   * 未指定の場合はmodeの値を適用
   *
   * - clamp: 最小値を返す
   * - 上記以外: modeと同じ動作
   */
  minMode?: EnsureRangeMode;

  /**
   * 値が最大値を超えている場合の動作
   * 未指定の場合はmodeの値を適用
   *
   * - clamp: 最大値を返す
   * - 上記以外: modeと同じ動作
   */
  maxMode?: EnsureRangeMode;

  /**
   * デフォルト値
   * 未指定の場合は0
   */
  defaultValue?: number;

  /**
   * minMode=`default`の場合のデフォルト値
   * 未指定の場合はdefaultValueの値を適用
   */
  defaultMin?: number;

  /**
   * maxMode=`default`の場合のデフォルト値
   * 未指定の場合はdefaultValueの値を適用
   */
  defaultMax?: number;
};
