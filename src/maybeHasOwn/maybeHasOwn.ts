export default function maybeHasOwn(data: object, key: PropertyKey): boolean {
  return data != null && Object.hasOwn(data, key);
}
