import { FunctionStrategyBaseOptions } from '../FunctionStrategyBase';
import { DebounceStrategyType } from './constants';

export type DebounceStrategyOptions =
  FunctionStrategyBaseOptions<DebounceStrategyType> & {
    /**
     * 待機時間
     */
    wait?: number;
  };
