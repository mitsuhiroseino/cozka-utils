import * as R from 'remeda';
import { LooseFunction } from '../../../../types';
import FunctionStrategyBase from '../FunctionStrategyBase';
import { AwaitedReturnFunction } from '../types';
import { SerialStrategyType } from './constants';
import { SerialStrategyOptions } from './types';

/**
 * 直列実行ストラテジー
 * 関数を一度に一つずつ順番に実行する\
 * 実行中に関数が呼ばれた場合、それらはキュー（待ち行列）に追加され、\
 * 現在の処理が完了し次第、古い順から順次実行される
 */
export default class SerialStrategy extends FunctionStrategyBase<SerialStrategyType> {
  /**
   * 最後に実行した関数のpromise
   */
  private _tail: Promise<void> = Promise.resolve();

  constructor(options: SerialStrategyOptions) {
    super(options);
  }

  _wrap<T extends LooseFunction>(fn: T) {
    const me = this;
    const execute = me._createExecutionFn(fn);
    return function (this: unknown, ...args: Parameters<T>) {
      // fnを非同期で呼び出す関数
      // 前回のpromiseがエラーで終わっていても次の関数を呼び出す
      const promise = me._tail.then(
        () => execute(this, args),
        () => execute(this, args),
      );
      // エラーでも次が続けられるようにnoopを仕込んでおく
      const noop = R.constant(undefined);
      me._tail = promise.then(noop).catch(noop);

      return promise;
    } as AwaitedReturnFunction<T>;
  }
}
