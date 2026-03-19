export type MaybeMapOptions = {
  /**
   * 戻り値から除外するcallbackの値
   *
   * - 'undefined': undefinedは除外
   * - 'nullish': undefined、nullは除外
   * - 'empty': undefined、null、空文字は除外
   * - 'falsy': undefined、null、空文字、false、0、-0、0n、NaNは除外
   *
   * @default 'undefined'
   */
  exclude?: ExcludeValue;
};

export type ExcludeValue = 'undefined' | 'nullish' | 'empty' | 'falsy';

export type Nullish = undefined | null;
export type Empty = Nullish | '';
export type Falsy = Empty | false | 0 | -0 | 0n | typeof NaN;

export type Iteratee<V, R> = (value: V, index: number, data: V[]) => R;
