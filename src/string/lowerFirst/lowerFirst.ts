/**
 * 先頭を子文字に変換します
 * @param str
 */
export default function lowerFirst(str: string): string {
  return str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
}
