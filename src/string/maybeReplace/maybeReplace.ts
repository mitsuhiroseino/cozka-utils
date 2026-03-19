import * as R from 'remeda';
import isRegExp from '../../type/isRegExp';
import { DynamicPattern, FlexiblePattern, MaybeReplaceOptions } from './types';

/**
 * 文字列の置換を行う
 * @param str 対象の文字列
 * @param pattern 置換対象のパターン。パターンが関数の場合はその戻り値の文字列や正規表現で置換を行う
 * @param replacement 置換後の文字列
 * @param options patternが関数の場合に引数として渡すオプション
 * @returns
 */
export default function maybeReplace<
  O extends MaybeReplaceOptions = MaybeReplaceOptions,
>(
  str: string | null | undefined,
  pattern: FlexiblePattern,
  replacement: string | ((substring: string, ...args: any[]) => string),
  options?: O,
) {
  if (str != null) {
    if (R.isString(pattern)) {
      // パターンが文字列の場合
      return str.replaceAll(pattern, replacement as any);
    } else if (isRegExp(pattern)) {
      // パターンが正規表現の場合
      return str.replace(pattern, replacement as any);
    } else if (R.isFunction(pattern)) {
      // パターンが関数の場合
      return maybeReplace(
        str,
        (pattern as DynamicPattern)(options),
        replacement,
      );
    }
  }
  return str;
}
