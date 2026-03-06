export type RotateArrayOptions = {
  /**
   * シフトする数。正の数は左シフト、負の数は右シフトを意味する。
   * @default 1
   */
  count?: number;

  /**
   * 配列を破壊的に変更するか。
   *
   * - false: 元の配列を変更せずに新しい配列を返却する（デフォルト）
   * - true: 元の配列を変更して、変更した配列を返却する
   *
   * @default false
   */
  inplace?: boolean;
};
