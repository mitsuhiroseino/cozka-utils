import { GetRawTypeReturn } from './types';

/**
 * オブジェクトの内部的な型ラベルを取得する
 */
export default function getRawType(value: unknown): GetRawTypeReturn {
  return Object.prototype.toString.call(value) as GetRawTypeReturn;
}
