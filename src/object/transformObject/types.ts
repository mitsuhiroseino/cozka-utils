/**
 * マッピングの定義
 */
export type MappingRule<S extends object, T extends object> = {
  /**
   * 取得元のパス（文字列）または値を抽出する関数
   */
  from: string | ((source: S) => any);

  /**
   * 設定先のパス（文字列）または値を設定する関数。省略時は from と同じパス
   */
  to?: string | ((target: T, value: any) => T);

  /**
   * 抽出後に元のオブジェクトから削除するかどうか
   */
  shouldRemoveFromSource?: boolean;
};

/**
 * オプション設定
 */
export type TransformObjectOptions = {
  /**
   * 全ての文字列指定パスに対して、抽出後に元の値を削除するか
   */
  deleteSourceKeys?: boolean;
};
