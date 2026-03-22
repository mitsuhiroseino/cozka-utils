import clearArray from '../../array/clearArray';
import isBlank from '../../type/isBlank';
import retype, { ReplacementMapDefinition } from '../retype';
import {
  ReplaceByMap,
  TransformationType,
  TransformFunction,
} from './constants';
import { TransformStringOptions } from './types';

/**
 * 文字列へtypesで指定した順に変換を適用する
 * @param str
 * @param types
 * @returns
 */
export default function transformString(
  str: string,
  types: TransformationType[],
  options: TransformStringOptions = {},
): string {
  if (isBlank(str)) {
    return str;
  }

  const { composeMap } = options;
  let maps: ReplacementMapDefinition[] = [];
  const lastIndex = types.length - 1;
  return types.reduce((result, type, index) => {
    const fn = TransformFunction[type];
    if (fn) {
      if (composeMap && maps.length) {
        // composeMap=trueの場合はため込んだmapsの処理を先に行う
        result = retype(result, clearArray(maps));
      }
      // 変換関数で変換
      return fn(result);
    }
    const mapDefiniton = ReplaceByMap[type];
    if (mapDefiniton) {
      // mapで変換
      if (composeMap) {
        // composeMap=trueの場合はmapsにため込む
        maps.push(mapDefiniton);
      } else {
        // 即変換
        return retype(result, [mapDefiniton]);
      }
    }
    if (composeMap && maps.length && lastIndex === index) {
      // composeMap=trueで最後の要素の場合はため込んだmapsの処理を行う
      return retype(result, maps);
    }
    return result;
  }, str);
}
