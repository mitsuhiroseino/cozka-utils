export default function _filterFalsy<T>(definitions: T[]): T[] {
  return definitions.filter((definition) => !!definition) as T[];
}
