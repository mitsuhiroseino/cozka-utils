/**
 * 分類するプロパティの情報
 * 分類先のグループに対応する値がnullの場合は、
 * 対象のグループに分類されなかったプロパティを返す
 *
 * @param group 分類先のグループ
 */
export type PartitionRules<T extends Record<PropertyKey, any>> = {
  [group: string]: GroupProperties<T> | null;
};

export type GroupProperties<T extends Record<PropertyKey, any>> = {
  /**
   * @param property 対象のプロパティ
   * @param value 分類の有無 or 分類先でのプロパティ名
   */
  [property in keyof T]: boolean | PropertyKey;
};

export type PartitionOptions = {
  /**
   * 継承されたプロパティも分類対象とする
   */
  includeInherited?: boolean;

  /**
   * 複製した値を分類する
   */
  cloneValue?: boolean;
};

export type PartitionResult<
  T extends Record<PropertyKey, any>,
  R extends PartitionRules<T>,
> = {
  [G in keyof R]: R[G] extends null
    ? // nullの場合は残ったものなので全ての可能性がある
      Partial<T>
    : {
        [P in keyof R[G] as R[G][P] extends string
          ? R[G][P]
          : P extends keyof T
            ? P
            : never]: P extends keyof T ? T[P] : unknown;
      };
};
