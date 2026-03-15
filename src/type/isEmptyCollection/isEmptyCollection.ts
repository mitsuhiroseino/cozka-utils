export default function isEmptyCollection(value: unknown): boolean {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (value instanceof Set || value instanceof Map) {
    return value.size === 0;
  }
  return false;
}
