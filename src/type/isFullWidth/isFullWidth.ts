const REGEXP = /^[^\u0020-\u007E\uFF61-\uFF9F]*$/;

/**
 * 文字列が全角のみで構成されていることを確認する
 * @param str
 * @returns
 */
export default function isFullWidth(str: string) {
  if (typeof str === 'string' && str !== '') {
    return REGEXP.test(str);
  } else {
    return false;
  }
}
