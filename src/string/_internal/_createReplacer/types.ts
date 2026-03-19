/**
 * 文字列置換用マップ
 */
export type ReplacementMap = Map<string, string>;

/**
 * 置換関数
 */
export type CreateReplacerResult = (str: string) => string;
