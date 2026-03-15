// JavaScriptのsetTimeoutの最大値
const MAX_DEFER = 2 ** 31 - 1;

/**
 * JavaScriptのsetTimeoutの最大値を超える遅延時間を設定できる関数
 * @param callback コールバック関数
 * @param defer 遅延時間（ミリ秒）
 * @returns キャンセル用関数
 */
export default function setTimeoutExtended(
  callback: () => void,
  defer: number,
): () => void {
  if (defer <= MAX_DEFER) {
    const id = setTimeout(callback, defer);
    return () => {
      clearTimeout(id);
    };
  } else {
    const idRef = _setTimeoutExtended(callback, MAX_DEFER, defer - MAX_DEFER);
    return () => {
      clearTimeout(idRef.current);
    };
  }
}

function _setTimeoutExtended(
  callback: () => void,
  defer: number,
  rest: number,
) {
  const idRef: { current: NodeJS.Timeout } = { current: null };
  idRef.current = setTimeout(() => {
    if (rest > MAX_DEFER) {
      const { current } = _setTimeoutExtended(
        callback,
        MAX_DEFER,
        rest - MAX_DEFER,
      );
      idRef.current = current;
    } else if (rest > 0) {
      const { current } = _setTimeoutExtended(callback, rest, 0);
      idRef.current = current;
    } else {
      callback();
    }
  }, defer);
  return idRef;
}
