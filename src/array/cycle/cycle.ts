import isEmpty from '../../type/isEmptyValue';

/**
 * 指定のサイズになるまで、引数の配列を繰り返した新しい配列を返す。
 * @param data
 * @param size
 */
const cycle = <T>(data: T[], size: number): T[] => _cycle(data, size);
cycle.dataLast =
  (size: number) =>
  <T>(data: T[]): T[] =>
    _cycle(data, size);
export default cycle;

function _cycle<T>(data: T[], size: number): T[] {
  if (size === 0) {
    return [];
  }

  const result = new Array(Math.abs(size));
  if (isEmpty(data)) {
    return result;
  }
  // sizeが負の場合は逆順
  const source = size < 0 ? [...data].reverse() : data;
  // 整数回繰り返す回数
  const cycles = Math.floor(result.length / source.length);
  // 残りの要素数
  const remainder = result.length % source.length;

  // 1配列分を回数分追加
  for (let i = 0; i < cycles; i++) {
    result.splice(i * source.length, source.length, ...source);
  }

  // 残りの要素を追加
  if (remainder > 0) {
    result.splice(
      cycles * source.length,
      remainder,
      ...source.slice(0, remainder),
    );
  }

  return result;
}
