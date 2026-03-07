/**
 * Data-FirstとData-Lastに対応した関数の定義
 */
export interface DataFirst<IMPL extends (...args: any[]) => any> {
  /**
   * 元の関数をそのまま呼び出すためのプロパティ(Data-First)
   */
  (...args: Parameters<IMPL>): ReturnType<IMPL>;

  /**
   * data以外を先に渡した関数を取得する為のプロパティ(Data-Last)
   */
  dataLast: DataLast<IMPL>;
}

/**
 * Data-Last
 */
export type DataLast<IMPL extends (...args: any[]) => any> = {
  /**
   * data以外を先に渡した関数を呼び出すためのプロパティ(Data-Last)
   */
  (...args: Parameters<DataLastFn<IMPL>>): ReturnType<DataLastFn<IMPL>>;

  /**
   * Remedaのlazy関数を呼び出すためのプロパティ(Data-Last)
   */
  lazy?: LazyFn<IMPL>;
};

/**
 * Data-Last用の関数の型定義
 */
export type DataLastFn<IMPL extends (...args: any[]) => any> = IMPL extends (
  data: infer DATA,
  ...rest: infer REST
) => any
  ? (...args: REST) => (data: DATA) => ReturnType<IMPL>
  : never;

/**
 * Remedaのlazyに対応した関数の定義
 */
export type LazyFn<IMPL extends (...args: any[]) => any> = IMPL extends (
  data: (infer ITEM)[],
  ...rest: infer REST
) => any
  ? <RETURN = ITEM>(
      ...args: REST
    ) => (
      item: ITEM,
      index: number,
      data: readonly ITEM[],
    ) => RemedaLazyResult<RETURN>
  : never;

/**
 * lazy関数の戻り値
 */
export type RemedaLazyResult<T> =
  | RemedaLazyEmpty
  | RemedaLazyMany<T>
  | RemedaLazyNext<T>;

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
type RemedaLazyNext<T> = {
  done: boolean;
  hasNext: true;
  hasMany?: false | undefined;
  next: T;
};

/**
 * lazy関数の戻り値(要素が複数の場合)
 */
type RemedaLazyMany<T> = {
  done: boolean;
  hasNext: true;
  hasMany: true;
  next: readonly T[];
};
