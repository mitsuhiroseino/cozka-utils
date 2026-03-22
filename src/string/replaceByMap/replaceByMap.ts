import ensureMap from 'src/map/ensureMap';
import isBlank from '../../type/isBlank';
import _createReplacer, { ReplacementMap } from '../_internal/_createReplacer';

/**
 * mapのキーの文字列を値の文字列に置き換える
 * @param str
 * @param map
 * @returns
 */
export default function replaceByMap(
  str: string,
  map: ReplacementMap | Record<string, string> | [string, string][],
): string {
  if (isBlank(str)) {
    return str;
  }
  const replacer = _createReplacer(ensureMap(map, { raw: true }), map);
  return replacer(str);
}
