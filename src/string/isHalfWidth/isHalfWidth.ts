const REGEXP = /^[\u0020-\u007E\uFF61-\uFF9F]*$/;

/**
 * 文字列が半角のみで構成されていることを確認する
 * @param str
 * @returns
 */
export default function isHalfWidth(str: string) {
  if (typeof str === 'string') {
    return REGEXP.test(str);
  } else {
    return false;
  }
}
