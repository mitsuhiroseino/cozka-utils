/**
 * 次のキーが数値なら配列、そうでなければオブジェクトを返す
 */
export default function _createContainer(nextKey: PropertyKey) {
  return typeof nextKey === 'number' ? [] : {};
}
