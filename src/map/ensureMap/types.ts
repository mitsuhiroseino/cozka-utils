export type EnsureMapOptions = {
  /**
   * valueがMapの時、そのまま返却するか。
   * デフォルトはfalseで、Mapのコピーを返却する。
   * @default false
   */
  raw?: boolean;
};

export type MappableObject<K, V> =
  | Map<K, V>
  | Record<PropertyKey, V>
  | Array<[K, V]>
  | Array<V>;
