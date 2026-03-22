import { LooseFunction } from '../../../../types';
import { CANCEL } from '../../constants';
import FunctionStrategyBase from '../FunctionStrategyBase';
import { AwaitedReturn, StrategyFunction } from '../types';
import { ExclusiveStrategyType } from './constants';
import { ExclusiveStrategyOptions } from './types';

/**
 * 排他実行ストラテジー\
 * 同時に一つの関数のみ実行を許可する\
 * すでに実行中の関数がある場合、新しく呼び出された関数は実行されず破棄される
 */
export default class ExclusiveStrategy extends FunctionStrategyBase<ExclusiveStrategyType> {
  constructor(options: ExclusiveStrategyOptions) {
    super(options);
  }

  _wrap<T extends LooseFunction>(fn: T): StrategyFunction<T> {
    const me = this;
    const execute = me._createExecutionFn(fn);
    return (scope: unknown, args: Parameters<T>): AwaitedReturn<T> => {
      // 実行しているものがあるかチェック
      if (me.isRunning) {
        // あったらキャンセル
        return Promise.resolve(CANCEL);
      }

      // fnを非同期で呼び出す
      return execute(scope, args) as AwaitedReturn<T>;
    };
  }
}
