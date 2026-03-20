import isBlank from '../../type/isBlank';
import _createReplacementMapComposer from '../_internal/_createReplacementMapComposer';
import replaceByMap from '../replaceByMap';
import {
  ReplaceByMap,
  TransformationType,
  TransformFunction,
} from './constants';

const composeReplacementMap = _createReplacementMapComposer();

/**
 * 文字列へtypesで指定した順に変換を適用する
 * @param str
 * @param types
 * @returns
 */
export default function transformString(
  str: string,
  types: TransformationType[],
): string {
  if (isBlank(str)) {
    return str;
  }

  return types.reduce((result, type) => {
    const fn = TransformFunction[type];
    if (fn) {
      // 変換関数で変換
      return fn(result);
    }
    const mapDefiniton = ReplaceByMap[type];
    if (mapDefiniton) {
      // mapで変換
      return replaceByMap(result, composeReplacementMap([mapDefiniton]));
    }
    return result;
  }, str);
}
