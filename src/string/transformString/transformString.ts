import isBlank from '../../type/isBlank';
import _createReplacementMapComposer from '../_internal/_createReplacementMapComposer';
import replaceByMap from '../replaceByMap';
import { TransformationType, TRANSFORMERS } from './constants';

const composeReplacementMap = _createReplacementMapComposer();

export default function transform(
  str: string,
  types: TransformationType[],
): string {
  if (isBlank(str)) {
    return str;
  }

  // TODO: 関数で変換を行うタイプにも対応
  const map = composeReplacementMap(types.map((type) => TRANSFORMERS[type]));
  return replaceByMap(str, map);
}
