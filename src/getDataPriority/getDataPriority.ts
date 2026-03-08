import detailedTypeOf from '../detailedTypeOf';
import { GetDataPriorityOptions } from './types';

const DEFAULT_PRIORITY_MAP = {
  undefined: -2,
  null: -1,
};

/**
 * 値に応じた優先度を返す
 * デフォルトでは値の型がundefinedは-2、nullは-1、それ以外は0
 * @param data 値
 * @param options オプション
 * @returns 優先度
 */
const getDataPriority = (
  data: unknown,
  options?: GetDataPriorityOptions,
): number => _getDataPriority(data, options);
getDataPriority.dataLast =
  (options?: GetDataPriorityOptions) => (data: unknown) =>
    getDataPriority(data, options);
export default getDataPriority;

function _getDataPriority(
  data: unknown,
  options: GetDataPriorityOptions = {},
): number {
  const priorityMap = options.priorityMap ?? DEFAULT_PRIORITY_MAP;
  if (data === undefined) {
    return priorityMap['undefined'] ?? 0;
  } else if (data === null) {
    return priorityMap['null'] ?? 0;
  } else {
    let priority: number | undefined;
    if (options.detailedType) {
      priority = priorityMap[detailedTypeOf(data)];
    } else {
      priority = priorityMap[typeof data];
    }
    if (priority === undefined) {
      priority = options.getFallbackPriority?.(data) ?? 0;
    }
    return priority;
  }
}
