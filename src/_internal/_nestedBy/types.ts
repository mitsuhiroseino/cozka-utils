export type NestedByOptions = {
  /**
   * propertiesが複数指定されている場合にのみ有効
   *
   * - false: ネストされたオブジェクトを作成する（デフォルト）
   * - true: ルートオブジェクト直下に全ての要素を設定する
   */
  flat?: boolean;

  /**
   * flat=trueの場合にのみ有効。各キーを結合するセパレーター
   */
  keySeparator?: string;
};

export type NestedByResult<I> = {
  [key: string]: I | NestedByResult<I>;
};
