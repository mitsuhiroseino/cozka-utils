import { LooseFunction } from '../../types';
import { STRATEGIES } from './constants';
import { FunctionStrategy } from './strategies/types';
import { FunctionStrategyOptions, StrategyType } from './types';

/**
 * 関数の実行を管理するクラス
 */
export default class ExecutionOrchestrator {
  /**
   * 関数の実行ストラテジー
   */
  private _strategies = new Map<string, FunctionStrategy<any>>();

  constructor() {}

  /**
   * 管理しているストラテジー数を取得
   */
  get size(): number {
    return this._strategies.size;
  }

  /**
   * ストラテジーの有無を判定する
   *
   * @param type ストラテジー種別
   * @param id ID
   * @returns
   */
  has(type: StrategyType, id: string): boolean {
    return this._strategies.has(this._key(type, id));
  }

  /**
   * ストラテジーを取得する
   * 対象が存在しない場合はundefinedを返す
   *
   * @param type ストラテジー種別
   * @param id ID
   * @returns
   */
  get<T extends StrategyType>(
    type: T,
    id: string,
  ): FunctionStrategy<T> | undefined {
    return this._strategies.get(this._key(type, id));
  }

  /**
   * ストラテジーを取得 or 新規作成する
   * type + idをキーとして取得し、
   * 対象が存在しない場合は新規で作成する
   *
   * @param type ストラテジー種別
   * @param id ID
   * @param options オプション
   * @returns
   */
  getStrategy<T extends StrategyType>(
    type: T,
    id: string,
    options: FunctionStrategyOptions<T> = {} as FunctionStrategyOptions<T>,
  ): FunctionStrategy<T> {
    const key = this._key(type, id);
    let strategy = this._strategies.get(key);
    if (!strategy) {
      strategy = this._createStrategy(type, options);
      this._strategies.set(key, strategy);
    }
    return strategy;
  }

  /**
   * 対象のストラテジーで関数をラップする
   * 対象の関数が同期／非同期に関わらず、戻り値は非同期関数になる
   *
   * @param type ストラテジー種別
   * @param id ID
   * @param fn
   * @param options オプション
   * @returns
   */
  wrap<T extends StrategyType, F extends LooseFunction>(
    type: T,
    id: string,
    fn: F | null | undefined,
    options?: FunctionStrategyOptions<T>,
  ) {
    const strategy = this.getStrategy(type, id, options) as any;
    return strategy.wrap(fn);
  }

  /**
   *
   * @param type ストラテジー種別
   * @param id ID
   * @returns
   */
  remove(type: StrategyType, id: string): boolean {
    const key = this._key(type, id);
    return this._strategies.delete(key);
  }

  /**
   * ストラテジーの全件削除
   */
  clear(): void {
    this._strategies.clear();
  }

  /**
   * ストラテジーの作成
   * @param type ストラテジー種別
   * @param options オプション
   * @returns
   */
  private _createStrategy<T extends StrategyType>(
    type: T,
    options: FunctionStrategyOptions<T>,
  ): FunctionStrategy<T> {
    const Strategy = STRATEGIES[type];
    if (Strategy) {
      return new Strategy({
        ...options,
        type,
      } as any) as unknown as FunctionStrategy<T>;
    }
    throw new Error(`Unknown strategy type: ${type}`);
  }

  /**
   * ストラテジーのキーを取得
   * @param type ストラテジー種別
   * @param id ID
   * @returns
   */
  private _key(type: StrategyType, id: string): string {
    return `${type}:${id}`;
  }
}
