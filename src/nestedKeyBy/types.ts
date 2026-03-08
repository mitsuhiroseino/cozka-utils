import { NestedByOptions, NestedByResult } from '../_internal/_nestedBy';

export type NestedKeyByOptions = NestedByOptions & {
  /**
   * 既に同じキーが存在する場合に上書きするかどうか
   *
   * - false: 上書きしない。先勝ち（デフォルト）
   * - true: 上書きする。後勝ち
   */
  overwrite?: boolean;
};

export type NestedKeyByResult<I extends object> = NestedByResult<I>;
