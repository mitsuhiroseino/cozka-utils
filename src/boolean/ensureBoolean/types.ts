export type EnsureBooleanOptions = {
  /**
   * trueとして扱う文字列
   */
  trueValues?: string[];

  /**
   * 渡された値が文字列の場合は大文字小文字を無視して比較する
   */
  ignoreCase?: boolean;
};
