import CapacityStrategy from './strategies/CapacityStrategy';
import { CapacityStrategyType } from './strategies/CapacityStrategy/constants';
import DebounceStrategy from './strategies/DebounceStrategy';
import { DebounceStrategyType } from './strategies/DebounceStrategy/constants';
import ExclusiveStrategy from './strategies/ExclusiveStrategy';
import { ExclusiveStrategyType } from './strategies/ExclusiveStrategy/constants';
import ParallelStrategy from './strategies/ParallelStrategy';
import { ParallelStrategyType } from './strategies/ParallelStrategy/constants';
import SerialStrategy from './strategies/SerialStrategy';
import { SerialStrategyType } from './strategies/SerialStrategy/constants';
import ThrottleStrategy from './strategies/ThrottleStrategy';
import { ThrottleStrategyType } from './strategies/ThrottleStrategy/constants';

export const STRATEGIES = {
  [CapacityStrategyType]: CapacityStrategy,
  [DebounceStrategyType]: DebounceStrategy,
  [ExclusiveStrategyType]: SerialStrategy,
  [ParallelStrategyType]: ParallelStrategy,
  [SerialStrategyType]: ExclusiveStrategy,
  [ThrottleStrategyType]: ThrottleStrategy,
} as const;

export const CANCEL = Symbol('cancel');
