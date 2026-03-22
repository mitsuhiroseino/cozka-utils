/**
 * Data-FirstとData-Lastに対応した関数の定義
 */
export interface DataFirst<DATA, REST extends any[], RETURN> {
  /**
   * 元の関数をそのまま呼び出すためのプロパティ(Data-First)
   */
  (data: DATA, ...args: REST): RETURN;

  /**
   * data以外を先に渡した関数を取得する為のプロパティ(Data-Last)
   */
  dataLast: DataLast<DATA, REST, RETURN>;
}

/**
 * Data-Last
 */
export type DataLast<DATA, REST extends any[], RETURN> = {
  /**
   * data以外を先に渡した関数を呼び出すためのプロパティ(Data-Last)
   */
  (...args: REST): (data: DATA) => RETURN;

  /**
   * Remedaのlazy関数を呼び出すためのプロパティ(Data-Last)
   */
  lazy?: DATA extends any[] ? LazyFn<DATA, REST> : never;
};

/**
 * Remedaのlazyに対応した関数の定義
 */
export type LazyFn<
  DATA extends any[],
  REST extends any[],
> = DATA extends (infer ITEM)[]
  ? <RESULT = ITEM>(
      ...args: REST
    ) => (
      item: ITEM,
      index: number,
      data: readonly ITEM[],
    ) => RemedaLazyResult<RESULT>
  : never;

/**
 * lazy関数の戻り値
 */
export type RemedaLazyResult<RESULT> =
  | RemedaLazyEmpty
  | RemedaLazyMany<RESULT>
  | RemedaLazyNext<RESULT>;

/**
 * lazy関数の戻り値(空の場合)
 */
type RemedaLazyEmpty = {
  done: boolean;
  hasNext: false;
  hasMany?: false | undefined;
  next?: undefined;
};

/**
 * lazy関数の戻り値(要素が1つの場合)
 */
type RemedaLazyNext<RESULT> = {
  done: boolean;
  hasNext: true;
  hasMany?: false | undefined;
  next: RESULT;
};

/**
 * lazy関数の戻り値(要素が複数の場合)
 */
type RemedaLazyMany<RESULT> = {
  done: boolean;
  hasNext: true;
  hasMany: true;
  next: readonly RESULT[];
};

/**
 * 値の型を指定可能な汎用レコード型
 */
export type FlexibleRecord<V = unknown> = Record<string, V>;

/**
 * 汎用的なレコード型
 * 型安全性よりも柔軟性を優先する場合に使用
 */
export type LooseRecord = FlexibleRecord<any>;

/**
 * 型安全な汎用レコード型
 * 使用時に型ガードが必要な場合に使用
 */
export type StrictRecord = FlexibleRecord<unknown>;

/**
 * 引数と戻り値の型を指定可能な、柔軟な関数定義のベース型
 * @template P 引数の型（タプルの配列形式、デフォルトは never[]）
 * @template R 戻り値の型（デフォルトは unknown）
 */
export type FlexibleFunction<P extends any[] = never[], R = unknown> = (
  ...args: P
) => R;

/**
 * 型安全性よりも柔軟性を優先した関数型
 * どんな引数でも受け入れ、戻り値も `any` として自由に扱える
 * 既存のJavaScriptライブラリとの連携や、型定義を緩くする場合に使用する。
 */
export type LooseFunction = FlexibleFunction<any[], any>;

/**
 * 型安全性を最優先した関数型
 * 引数を受け取ることができず、戻り値も `unknown` となるため、
 * 使用する際には適切な型ガードや型アサーションを強制する。
 */
export type StrictFunction = FlexibleFunction<never[], unknown>;
