import { ValueType } from '../detailedTypeOf';

export type GetDataPriorityOptions = {
  /**
   * objectの詳細な型を取得するか\
   * デフォルトはfalse
   */
  detailedType?: boolean;

  /**
   * 優先度のマップ\
   * デフォルトは以下の通り
   *
   * ```ts
   * {
   *   undefined: -2,
   *   null: -1,
   * }
   * ```
   */
  priorityMap?: Record<ValueType, number>;

  /**
   * 優先順位を解決する関数\
   * priorityMapに存在しない型の優先順位を決定するための関数
   *
   * @param data
   * @returns
   */
  getFallbackPriority?: (data: unknown) => number;
};
