/**
 * 文字列の変換定義
 */
export type TransformDefinition<T extends string = string> = {
  id: T;
  transform: (str: string) => string;
};
