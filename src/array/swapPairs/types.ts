/**
 * 型レベルで配列内の全タプルを反転させる
 */
export type SwapPairsResult<T> = {
  // 配列（または readonly 配列）の各要素 P について処理
  [K in keyof T]: T[K] extends [infer A, infer B] ? [B, A] : T[K];
};
