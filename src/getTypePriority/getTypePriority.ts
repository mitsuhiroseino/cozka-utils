import detailedTypeOf from '../detailedTypeOf';
import { GetTypePriorityOptions } from './types';

const DEFAULT_PRIORITY_MAP = {
  undefined: -2,
  null: -1,
};

/**
 * 値の型に応じた優先度を返す
 * @param value 値
 * @param options オプション
 * @returns 優先度
 */
export default function getTypePriority(
  value: any,
  options: GetTypePriorityOptions = {},
): number {
  const priorityMap = options.priorityMap ?? DEFAULT_PRIORITY_MAP;
  if (value === undefined) {
    return priorityMap['undefined'] ?? 0;
  } else if (value === null) {
    return priorityMap['null'] ?? 0;
  } else {
    if (options.detailedType) {
      return priorityMap[detailedTypeOf(value)] ?? 0;
    } else {
      return priorityMap[typeof value] ?? 0;
    }
  }
}
