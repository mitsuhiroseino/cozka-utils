/**
 * スペースの削除
 * @param str
 * @returns
 */
export default function retypeToNoSpace(str: string): string {
  return str.replace(/[\s\u3000]/g, '');
}
