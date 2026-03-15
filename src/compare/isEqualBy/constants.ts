/**
 * 比較方法
 */
export const COMPARE_MODE = {
  /**
   * `===`による比較
   */
  STRICT: 'strict',

  /**
   * `==`による比較
   */
  LOOSE: 'loose',

  /**
   * `remeda.isDeepEqual()`による比較
   */
  DEEP: 'deep',
} as const;
