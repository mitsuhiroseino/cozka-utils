/**
 * 文字列であることを保証する\
 * null や undefined は空文字列に変換される
 *
 * @param data 任意の値 or null or undefined
 * @returns 文字列
 */
const ensureString = (data: unknown | null | undefined): string =>
  _ensureString(data);
ensureString.dataLast = () => ensureString;
export default ensureString;

function _ensureString(target: unknown | null | undefined): string {
  return typeof target === 'string'
    ? target
    : target == null
      ? ''
      : String(target);
}
