import _nestedBy from '../_internal/_nestedBy';
import get from '../get';
import setMutable from '../setMutable';
import { NestedKeyByOptions, NestedKeyByResult } from './types';

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
 *    '0101': { prefecture: '01', city: '0101', name: 'foo' },
 *    '0102': { prefecture: '01', city: '0102', name: 'bar1' },
 *  },
 *  '02': {
 *    '0201': { prefecture: '02', city: '0201', name: 'baz' },
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
  options: NestedKeyByOptions = {},
): NestedKeyByResult<I> {
  const { overwrite, ...rest } = options;
  const [setByFlatKey, setByNestedKey] = overwrite
    ? // 後勝ち
      [
        (result, key, value) => (result[key] = value),
        (result, path, value) =>
          setMutable(result, path as PropertyKey[], value),
      ]
    : // 先勝ち
      [
        (result, key, value) => {
          if (result[key] === undefined) {
            result[key] = value;
          }
        },
        (result, path, value) => {
          if (get(result, path) === undefined) {
            setMutable(result, path as PropertyKey[], value);
          }
        },
      ];

  return _nestedBy(data, properties, setByFlatKey, setByNestedKey, rest);
}
