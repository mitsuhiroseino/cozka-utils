import ensureMap from 'src/map/ensureMap';
import escapeRegExp from '../../escapeRegExp';
import { CreateReplacerResult, ReplacementMap } from './types';

const replacers = new WeakMap<object, CreateReplacerResult>();

/**
 * マップによる置き換えで文字列置換をする関数を作る
 * @param map
 * @returns
 */
export default function createReplacer(
  map: ReplacementMap,
): CreateReplacerResult {
  let replacer = replacers.get(map);
  if (!replacer) {
    const entries = Array.from(map.entries());
    const pattern = entries
      .sort((a, b) => b[0].length - a[0].length)
      .map((item) => escapeRegExp(item[0]))
      .join('|');
    const regex = new RegExp(pattern, 'g');
    replacer = (str: string): string => {
      if (!str) {
        return str;
      }

      return str.replace(regex, (matched) => {
        return map.get(matched) ?? matched;
      });
    };
    replacers.set(map, replacer);
  }
  return replacer;
}
