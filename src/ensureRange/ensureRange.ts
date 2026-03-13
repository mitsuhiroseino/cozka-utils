import rangeClamp from '../rangeClamp';
import rangeDefault from '../rangeDefault';
import rangeLoop from '../rangeLoop';
import rangeMax from '../rangeMax';
import rangeMin from '../rangeMin';
import rangePingpong from '../rangePingpong';
import { ENSURE_RANGE_MODE } from './constants';
import { EnsureRangeOptions } from './types';

// 値の取得処理
const STRATEGIES = {
  // 最小値 or 最大値
  [ENSURE_RANGE_MODE.CLAMP]: rangeClamp,
  // 最小値
  [ENSURE_RANGE_MODE.MIN]: rangeMin,
  // 最大値
  [ENSURE_RANGE_MODE.MAX]: rangeMax,
  // 値が一周しているというあつかいで算出
  [ENSURE_RANGE_MODE.LOOP]: rangeLoop,
  // 最小値と最大値の間を往復する形で算出
  [ENSURE_RANGE_MODE.PINGPONG]: rangePingpong,
  // デフォルト値
  [ENSURE_RANGE_MODE.DEFAULT]: rangeDefault,
} as const;

/**
 * 指定の範囲内の値であることを保証する
 *
 * @param value 値
 * @param min 最小値
 * @param max 最大値
 * @param options オプション
 * @returns
 */
export default function ensureRange(
  value: number,
  min: number,
  max: number,
  options: EnsureRangeOptions = {},
) {
  const {
    mode = ENSURE_RANGE_MODE.CLAMP,
    minMode = mode,
    maxMode = mode,
    defaultValue = 0,
    defaultMin = defaultValue,
    defaultMax = defaultValue,
  } = options;

  // 適用するモードを決定
  const current =
    value < min
      ? { mode: minMode, defaultValue: defaultMin }
      : { mode: maxMode, defaultValue: defaultMax };

  // 計算を実行
  return STRATEGIES[current.mode](value, min, max, current.defaultValue);
}
