import { LooseFunction } from '../../../../types';
import FunctionStrategyBase from '../FunctionStrategyBase';
import { AwaitedReturn, AwaitedReturnFunction } from '../types';
import { CapacityStrategyType } from './constants';
import { CapacityStrategyOptions } from './types';

/**
 * 上限付き実行破棄ストラテジー\
 * 同時実行できる上限数（limit）を設け、その範囲内で並行実行する\
 * 上限に達している状態で呼ばれた関数は破棄される
 */
export default class CapacityStrategy extends FunctionStrategyBase<CapacityStrategyType> {
  /**
   * 同時実行の上限数
   */
  private _limit: number;

  constructor(options: CapacityStrategyOptions) {
    super(options);
    // デフォルトは 4 枠
    this._limit = options.limit ?? 4;
  }

  /**
   * 関数をラップする
   * 実行枠がいっぱいの場合は undefined を返して即終了する
   */
  _wrap<T extends LooseFunction>(fn: T): AwaitedReturnFunction<T> {
    const me = this;
    const execute = me._createExecutionFn(fn);

    return function (this: unknown, ...args: Parameters<T>): AwaitedReturn<T> {
      // 現在の実行数が上限に達しているかチェック
      if (me.running >= me._limit) {
        // キャパオーバーのため、実行せずに終了（キャンセル）
        // 必要に応じてここでログ出力や、特定のエラーを返すことも検討してください
        return;
      }

      // 枠が空いていれば非同期で実行を開始
      return execute(this, args) as AwaitedReturn<T>;
    } as AwaitedReturnFunction<T>;
  }
}
