/**
 * extract関数
 */
export type CreateExtractorResult = {
  /**
   * トークン抽出関数
   */
  (str: string, options?: ExtractorOptions): string[];

  /**
   * デリミタ(左)
   */
  prefix: string;

  /**
   * デリミタ(右)
   */
  suffix: string;
};

/**
 * CreateExtractorResult関数のオプション
 */
export type ExtractorOptions = {
  /**
   * 抽出結果にデリミタ（囲い）を含めるかどうか
   * @default false
   */
  keepDelimiters?: boolean;

  /**
   * トークンの前後の空白を削除するかどうか
   * @default false
   */
  trim?: boolean;

  /**
   * 重複したトークンを除外するかどうか
   * @default false
   */
  unique?: boolean;
};
