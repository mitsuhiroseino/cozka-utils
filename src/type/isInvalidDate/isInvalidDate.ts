import * as R from 'remeda';

/**
 * 不正な日付型の値かどうかを判定\
 * 正しい日付型、および日付型以外はfalse
 * @param date 値
 * @returns
 */
export default function isInvalidDate(date: any): boolean {
  return R.isDate(date) && date.toString() === 'Invalid Date';
}
