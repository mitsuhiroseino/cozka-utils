import * as R from 'remeda';
import isBlank from '../isBlank';

export default function recaseKebab(value: string) {
  if (isBlank(value)) {
    return value;
  }
  return R.toKebabCase(value);
}
