import { LooseFunction } from '../../../types';
import { CANCEL } from '../constants';

/**
 * 戻り値(promise)
 */
export type AwaitedReturn<T extends LooseFunction> =
  | Promise<Awaited<ReturnType<T>>>
  | Promise<typeof CANCEL>;

/**
 * 汎用的な関数をラップしてpromiseの戻り値を返す関数
 */
export type AwaitedReturnFunction<T extends LooseFunction> = (
  ...args: Parameters<T>
) => AwaitedReturn<T>;

/**
 * 関数グループ
 */
export interface FunctionStrategy<T extends string> {
  /**
   * グループ種別
   */
  get type(): T;

  /**
   * ID
   */
  get id(): string;

  /**
   * 実行中か
   */
  get isRunning(): boolean;

  /**
   * 関数をラップする
   * @param fn
   */
  wrap<T extends LooseFunction>(
    fn: T | null | undefined,
  ): AwaitedReturnFunction<T> | null | undefined;
}
