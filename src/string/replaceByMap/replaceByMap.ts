import isBlank from '../../type/isBlank';
import _createReplacer, { ReplacementMap } from '../_internal/_createReplacer';

/**
 * mapのキーの文字列を値の文字列に置き換える
 * @param str
 * @param map
 * @returns
 */
export default function replaceByMap(str: string, map: ReplacementMap): string {
  if (isBlank(str)) {
    return str;
  }
  const replacer = _createReplacer(map);
  return replacer(str);
}
