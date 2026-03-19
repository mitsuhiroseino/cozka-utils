/**
 * 静的パターン
 */
export type StaticPattern = string | RegExp;

/**
 * 動的パターン
 */
export type DynamicPattern = (options?: MaybeReplaceOptions) => StaticPattern;

/**
 * 静的・動的パターン
 */
export type FlexiblePattern = StaticPattern | DynamicPattern;

/**
 * パターンを動的に作成する関数の引数に渡すオプション
 */
export type MaybeReplaceOptions = { [key: string]: unknown };
