import * as R from 'remeda';

/**
 * 正しい日付型の値かどうかを判定\
 * 不正な日付型、および日付型以外はfalse
 * @param date 値
 * @returns
 */
export default function isValidDate(date: any): boolean {
  return R.isDate(date) && date.toString() !== 'Invalid Date';
}
