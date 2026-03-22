import { LooseFunction } from '../../../../types';
import FunctionStrategyBase from '../FunctionStrategyBase';
import { AwaitedReturn, AwaitedReturnFunction } from '../types';
import { ThrottleStrategyType } from './constants';
import { ThrottleStrategyOptions } from './types';

/**
 * 一定間隔実行ストラテジー
 * 最初に関数を実行した後、指定時間（wait）が経過するまで次の実行を禁止する\
 * クールタイム中に呼ばれた関数は無視される\
 */
export default class ThrottleStrategy extends FunctionStrategyBase<ThrottleStrategyType> {
  /**
   * 待機時間 (ms)
   */
  private _wait: number;

  /**
   * クールタイム中（実行禁止期間）かどうか
   */
  private _isThrottling = false;

  constructor(options: ThrottleStrategyOptions) {
    const { wait, ...rest } = options;
    super(rest);
    this._wait = wait ?? 0;
  }

  /**
   * 関数をラップする
   * クールタイム中の呼び出しは無視され、undefined を返す
   */
  _wrap<T extends LooseFunction>(fn: T): AwaitedReturnFunction<T> {
    const me = this;
    const execute = me._createExecutionFn(fn);

    return function (this: unknown, ...args: Parameters<T>): AwaitedReturn<T> {
      // クールタイム中なら何もしない
      if (me._isThrottling) {
        return;
      }

      // 実行フラグを立てる
      me._isThrottling = true;

      // 指定時間後にフラグを解除する
      setTimeout(() => {
        me._isThrottling = false;
      }, me._wait);

      // 関数を実行
      return execute(this, args) as AwaitedReturn<T>;
    } as AwaitedReturnFunction<T>;
  }
}
