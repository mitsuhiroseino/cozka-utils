import * as R from 'remeda';
import isBlank from '../isBlank';

const recaseKebab = (data: string) => _recaseKebab(data);
recaseKebab.dataLast = () => (data: string) => _recaseKebab(data);
export default recaseKebab;

function _recaseKebab(data: string): string {
  if (isBlank(data)) {
    return data;
  }
  return R.toKebabCase(data);
}
