/**
 * 配列の要素を全て削除する。
 * @param data
 */
const clearArray = <T>(data: T[]): T[] => _clearArray(data);
clearArray.dataLast = () => clearArray;
export default clearArray;

function _clearArray<T>(data: T[]): T[] {
  if (data) {
    data.length = 0;
  }
  return data;
}
