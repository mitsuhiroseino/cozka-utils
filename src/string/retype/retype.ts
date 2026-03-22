import ensureArray from '../../array/ensureArray';
import replaceByMap from '../replaceByMap';
import { ReplacementMapDefinition } from './types';

const cache = new Map<string, Map<string, string>>();
// mapの合成とキャッシュの管理をする関数
const _composeReplacementMap = (
  definitions: ReplacementMapDefinition[],
): Map<string, string> => {
  const ids: string[] = [];
  const maps: [string, string][][] = [];
  for (const definition of definitions) {
    if (definition) {
      ids.push(definition.id);
      maps.push(definition.map);
    }
  }

  const cacheKey = ids.sort().join('|');
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  const composed = new Map<string, string>();
  for (const map of maps) {
    for (const item of map) {
      composed.set(item[0], item[1]);
    }
  }

  cache.set(cacheKey, composed);
  return composed;
};

export default function retype(
  str: string,
  definitions: ReplacementMapDefinition | ReplacementMapDefinition[],
): string {
  const map = _composeReplacementMap(ensureArray(definitions));
  return replaceByMap(str, map);
}
