import * as R from 'remeda';
import { PartitionOptions, PartitionResult, PartitionRules } from './types';

/**
 * object直下のプロパティをrulesに従って分類する
 * @param data
 * @param rules
 * @param options
 */
export default function partition<
  T extends Record<PropertyKey, any>,
  R extends PartitionRules<T>,
>(data: T, rules: R, options: PartitionOptions = {}): PartitionResult<T, R> {
  const { includeInherited, cloneValue } = options;
  const has = includeInherited
    ? (property) => property in data
    : (property) => Object.hasOwn(data, property);
  const get = cloneValue
    ? (property) => R.clone(data[property])
    : (property) => data[property];
  // 分類結果
  const result: Record<string, Record<PropertyKey, unknown>> = {};
  // 対象をrestにコピーし、分類できたものはrestから削除していく
  const rest = { ...data };
  const restGroupKeys: string[] = [];

  for (const groupKey in rules) {
    const group = (result[groupKey] = {} as any);
    const properties = rules[groupKey];
    if (properties == null) {
      // 分類できなかったプロパティを設定するグループ
      restGroupKeys.push(groupKey);
    } else {
      // 指定のプロパティを対象のグループへ分類
      for (const property in properties) {
        if (has(property)) {
          const value = properties[property];
          if (value === true) {
            // 元のプロパティ名でグループへ設定
            group[property] = get(property);
            delete rest[property];
          } else if (value !== false) {
            // 指定のプロパティ名でグループへ設定
            group[value] = get(property);
            delete rest[property];
          }
        }
      }
    }
  }
  if (restGroupKeys.length) {
    for (const groupKey of restGroupKeys) {
      // restの内容をグループへ設定
      result[groupKey] = { ...rest };
    }
  }

  return result as PartitionResult<T, R>;
}
