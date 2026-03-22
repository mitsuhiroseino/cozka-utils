import { LooseFunction } from '../../../../types';
import {
  AwaitedReturn,
  AwaitedReturnFunction,
  FunctionStrategy,
} from '../types';
import { FunctionStrategyBaseOptions } from './types';

/**
 * ストラテジーの基底クラス
 */
export default abstract class FunctionStrategyBase<T extends string>
  implements FunctionStrategy<T>
{
  /**
   * ストラテジー種別
   */
  private _type: T;

  /**
   * ID
   */
  private _id: string;

  /**
   * 実行している関数の件数
   */
  private _running = 0;

  constructor(options: FunctionStrategyBaseOptions<T>) {
    this._type = options.type;
    this._id = options.id;
  }

  /**
   * ストラテジー種別
   */
  get type(): T {
    return this._type;
  }

  /**
   * ID
   */
  get id(): string {
    return this._id;
  }

  /**
   * 実行している関数の件数
   */
  get running(): number {
    return this._running;
  }

  /**
   * 実行している関数の有無
   */
  get isRunning(): boolean {
    return this._running > 0;
  }

  /**
   * 実行の開始
   */
  protected _start() {
    this._running++;
  }

  /**
   * 実行の終了
   */
  protected _finish() {
    this._running--;
  }

  /**
   * 対象の関数を非同期で実行する関数を作成する共通処理
   *
   * @param fn 対象の関数
   * @returns
   */
  protected _createExecutionFn<T extends LooseFunction>(fn: T) {
    // 開始終了を捕捉できる非同期の関数
    return async (scope: unknown, args: unknown[]) => {
      try {
        this._start();
        return (await fn.apply(scope, args)) as AwaitedReturn<T>;
      } finally {
        this._finish();
      }
    };
  }

  /**
   * 関数をラップする
   *
   * @param fn
   * @returns
   */
  wrap<T extends LooseFunction>(
    fn: T | null | undefined,
  ): AwaitedReturnFunction<T> | undefined {
    if (!fn) {
      return undefined;
    }

    return this._wrap(fn);
  }

  /**
   * 関数をラップする
   * @param fn
   */
  protected abstract _wrap<T extends LooseFunction>(
    fn: T,
  ): AwaitedReturnFunction<T>;
}
