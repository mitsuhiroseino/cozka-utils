import ensureArray from '../../array/ensureArray';
import _createReplacementMapComposer, {
  ReplacementMapDefinition,
} from '../_internal/_createReplacementMapComposer';
import replaceByMap from '../replaceByMap';

const composeReplacementMap = _createReplacementMapComposer();

export default function retype(
  str: string,
  definitions: ReplacementMapDefinition | ReplacementMapDefinition[],
): string {
  const map = composeReplacementMap(ensureArray(definitions));
  return replaceByMap(str, map);
}
