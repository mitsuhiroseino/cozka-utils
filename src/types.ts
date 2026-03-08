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
