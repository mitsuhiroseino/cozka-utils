import ensureArray from '../ensureArray';
import setMutable from '../setMutable';
import { NestedGroupByOptions } from './types';

/**
 * 配列から指定のプロパティの値をキーとしたオブジェクトを作成する。
 *
 * array: [
 *   { prefecture: '01', city: '0101', name: 'foo' },
 *   { prefecture: '01', city: '0102', name: 'bar' },
 *   { prefecture: '02', city: '0201', name: 'baz' },
 * ]
 * properties: ['prefecture', 'city']
 *
 * ↓
 *
 * result: {
 *  '01': {
 *    '0101': { prefecture: '01', city: '0101', name: 'foo' },
 *    '0102': { prefecture: '01', city: '0102', name: 'bar' },
 *  },
 *  '02': {
 *    '0201': { prefecture: '02', city: '0201', name: 'baz' },
 *  }
 * }
 *
 *
 * @param array オブジェクト配列
 * @param properties キーとする値を持ったプロパティ
 * @param options オプション
 * @returns
 */
export default function nestedGroupBy<I>(
  array: I[],
  properties: string | string[],
  options: NestedGroupByOptions = {},
): { [key: string]: I } {
  if (!array) {
    return {};
  }
  const { flat = false, keySeparator = '.' } = options;
  const propNames = ensureArray(properties);
  const setValue = flat
    ? (object, keys, value) => (object[keys.join(keySeparator)] = value)
    : setMutable;
  return array.reduce((result, item) => {
    // 指定のプロパティの値を配列に取得
    const keyArray = propNames.map((propName) => {
      return item[propName];
    });
    // 指定のプロパティの値をキーとしてオブジェクトに設定
    setValue(result, keyArray, item);
    return result;
  }, {});
}
