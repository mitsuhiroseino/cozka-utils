/**
 * 型種別
 */
export const VALUE_TYPE = {
  /**
   * undefined
   */
  UNDEFINED: 'undefined',

  /**
   * null
   */
  NULL: 'null',

  /**
   * 文字列
   */
  STRING: 'string',

  /**
   * 数値
   */
  NUMBER: 'number',

  /**
   * BigInt
   */
  BIG_INT: 'bigint',

  /**
   * 真偽値
   */
  BOOLEAN: 'boolean',

  /**
   * 関数
   */
  FUNCTION: 'function',

  /**
   * 日付
   */
  DATE: 'date',

  /**
   * 配列
   */
  ARRAY: 'array',

  /**
   * 単純なオブジェクト
   */
  PLAIN_OBJECT: 'plainobject',

  /**
   * 正規表現
   */
  REGEXP: 'regexp',

  /**
   * エラーオブジェクト
   */
  ERROR: 'error',

  /**
   * Map
   */
  MAP: 'map',

  /**
   * Set
   */
  SET: 'set',

  /**
   * WeakMap
   */
  WEAK_MAP: 'weakmap',

  /**
   * WeakSet
   */
  WEAK_SET: 'weakset',

  /**
   * Promise
   */
  PROMISE: 'promise',

  /**
   * ArrayBuffer
   */
  ARRAY_BUFFER: 'arraybuffer',

  /**
   * SharedArrayBuffer
   */
  SHARED_ARRAY_BUFFER: 'sharedarraybuffer',

  /**
   * シンボル
   */
  SYMBOL: 'symbol',

  /**
   * オブジェクト
   */
  OBJECT: 'object',

  /**
   * 任意の型
   */
  ANY: 'any',
} as const;
