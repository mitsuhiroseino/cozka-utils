import { CapacityStrategyOptions } from './strategies/CapacityStrategy';
import { CapacityStrategyType } from './strategies/CapacityStrategy/constants';
import { DebounceStrategyOptions } from './strategies/DebounceStrategy';
import { DebounceStrategyType } from './strategies/DebounceStrategy/constants';
import { ExclusiveStrategyOptions } from './strategies/ExclusiveStrategy';
import { ExclusiveStrategyType } from './strategies/ExclusiveStrategy/constants';
import { ParallelStrategyOptions } from './strategies/ParallelStrategy';
import { ParallelStrategyType } from './strategies/ParallelStrategy/constants';
import { SerialStrategyOptions } from './strategies/SerialStrategy';
import { SerialStrategyType } from './strategies/SerialStrategy/constants';
import { ThrottleStrategyOptions } from './strategies/ThrottleStrategy';
import { ThrottleStrategyType } from './strategies/ThrottleStrategy/constants';

/**
 * ストラテジー種別とオプションの対応表
 */
export type StrategyOptionsMap = {
  [SerialStrategyType]: SerialStrategyOptions;
  [ParallelStrategyType]: ParallelStrategyOptions;
  [ExclusiveStrategyType]: ExclusiveStrategyOptions;
  [CapacityStrategyType]: CapacityStrategyOptions;
  [DebounceStrategyType]: DebounceStrategyOptions;
  [ThrottleStrategyType]: ThrottleStrategyOptions;
};

/**
 * ストラテジー種別
 */
export type StrategyType = keyof StrategyOptionsMap;

/**
 * ストラテジーオプション
 */
export type FunctionStrategyOptions<T extends StrategyType> =
  StrategyOptionsMap[T];
