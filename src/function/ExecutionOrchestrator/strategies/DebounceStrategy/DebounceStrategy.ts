import { LooseFunction } from '../../../../types';
import FunctionStrategyBase from '../FunctionStrategyBase';
import { AwaitedReturn, AwaitedReturnFunction } from '../types';
import { DebounceStrategyType } from './constants';
import { DebounceStrategyOptions } from './types';

/**
 * 遅延確定実行ストラテジー
 * 関数が呼ばれてから指定時間（wait）経過後に実行する\
 * 実行前に再度呼び出しがあった場合はタイマーをリセットし、再度指定時間の経過を待つ\
 */
export default class DebounceStrategy extends FunctionStrategyBase<DebounceStrategyType> {
  /**
   * 待ち時間
   */
  private _wait: number;

  /**
   * 実行中のsetTimeoutのタイマーID
   */
  private _timeout: ReturnType<typeof setTimeout> | null = null;

  private _currentFn: any;
  private _currentArgs: any;

  constructor(options: DebounceStrategyOptions) {
    const { wait, ...rest } = options;
    super(rest);
    this._wait = wait ?? 0;
  }

  /**
   * 呼ばれてからwaitで指定された時間が経過するまでに
   * 同じストラテジー内の関数が実行されなかった場合に処理を行う関数を作成する
   *
   * @param fn
   * @returns
   */
  _wrap<T extends LooseFunction>(
    fn: T,
  ): (...args: Parameters<T>) => AwaitedReturn<T> {
    const me = this;
    const execute = me._createExecutionFn(fn);
    // 実行時のスコープ(this)を取得したいのでfunctionで定義
    return function (this: unknown, ...args: Parameters<T>) {
      return new Promise<ReturnType<T>>((resolve, reject) => {
        if (me._timeout) {
          clearTimeout(me._timeout);
        }
        me._timeout = setTimeout(() => {
          // waitの間に他の関数が呼ばれなければ、この処理が実行される
          me._timeout = null;
          execute(this, args).then(resolve).catch(reject);
        }, me._wait);
      });
    } as AwaitedReturnFunction<T>;
  }
}
