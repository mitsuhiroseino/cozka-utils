import { FunctionStrategyBaseOptions } from '../FunctionStrategyBase';
import { ParallelStrategyType } from './constants';

export type ParallelStrategyOptions =
  FunctionStrategyBaseOptions<ParallelStrategyType> & {
    limit: number;
  };
