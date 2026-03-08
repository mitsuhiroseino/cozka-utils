import _nestedBy from '../_internal/_nestedBy';
import get from '../get';
import setMutable from '../setMutable';
import { NestedGroupByOptions, NestedGroupByResult } from './types';

/**
 * 配列から指定のプロパティの値をキーとしたオブジェクトを作成する。
 *
 * array: [
 *   { prefecture: '01', city: '0101', name: 'foo' },
 *   { prefecture: '01', city: '0102', name: 'bar1' },
 *   { prefecture: '01', city: '0102', name: 'bar2' },
 *   { prefecture: '02', city: '0201', name: 'baz' },
 * ]
 * properties: ['prefecture', 'city']
 *
 * ↓
 *
 * result: {
 *  '01': {
 *    '0101': [
 *      { prefecture: '01', city: '0101', name: 'foo' }
 *    ],
 *    '0102': [
 *      { prefecture: '01', city: '0102', name: 'bar1' },
 *      { prefecture: '01', city: '0102', name: 'bar2' },
 *    ],
 *  },
 *  '02': {
 *    '0201': [
 *      { prefecture: '02', city: '0201', name: 'baz' }
 *    ],
 *  }
 * }
 *
 *
 * @param data オブジェクト配列
 * @param properties キーとする値を持ったプロパティ
 * @param options オプション
 * @returns
 */
export default function nestedKeyBy<I extends object>(
  data: I[],
  properties: keyof I | (keyof I)[],
  options: NestedGroupByOptions = {},
): NestedGroupByResult<I> {
  return _nestedBy(
    data,
    properties,
    (result, key, value) => {
      let group: I[] = result[key];
      if (!group) {
        group = [];
        result[key] = group;
      }
      group.push(value);
    },
    (result, path, value) => {
      let group: I[] = get(result, path);
      if (!group) {
        group = [];
        setMutable(result, path as PropertyKey[], group);
      }
      group.push(value);
    },
    options,
  );
}
