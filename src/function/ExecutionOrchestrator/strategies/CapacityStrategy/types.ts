import { FunctionStrategyBaseOptions } from '../FunctionStrategyBase';
import { CapacityStrategyType } from './constants';

export type CapacityStrategyOptions =
  FunctionStrategyBaseOptions<CapacityStrategyType> & {
    limit?: number;
  };
