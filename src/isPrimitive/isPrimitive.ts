const PRIMITIVE_SET = new Set([
  'undefined',
  'boolean',
  'number',
  'bigint',
  'string',
  'symbol',
]);

/**
 * 値がプリミティブか判定します
 * @param value 値
 * @returns
 */
export default function isPrimitive(value: unknown): boolean {
  if (value === null) {
    return true;
  }
  return PRIMITIVE_SET.has(typeof value);
}
