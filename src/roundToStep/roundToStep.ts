/**
 * 値を指定された刻み幅で四捨五入する
 * @param data 元の値
 * @param step 刻み幅 (例: 0.5, 10, 0.01)
 * @returns 刻み幅に丸められた値
 */
const roundToStep = (data: number, step: number): number =>
  _roundToStep(data, step);
roundToStep.dataLast =
  (step: number) =>
  (data: number): number =>
    _roundToStep(data, step);
export default roundToStep;

function _roundToStep(data: number, step: number): number {
  return Math.round(data / step) * step;
}
