/**
 * 対象の値が数値または数値の文字列の場合にtrueを返す
 * @param value 対象の値
 * @returns
 */
export default function isNumberLike(value: unknown): boolean {
  if (value === '' || value == null || typeof value === 'boolean') {
    return false;
  } else {
    return !isNaN(Number(value));
  }
}
