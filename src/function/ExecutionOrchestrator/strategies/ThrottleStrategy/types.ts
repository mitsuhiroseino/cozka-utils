import { FunctionStrategyBaseOptions } from '../FunctionStrategyBase';
import { ThrottleStrategyType } from './constants';

export type ThrottleStrategyOptions =
  FunctionStrategyBaseOptions<ThrottleStrategyType> & {
    wait?: number;
  };
