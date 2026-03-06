import { ValueType } from 'src/detailedTypeOf';

export type GetTypePriorityOptions = {
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
};
