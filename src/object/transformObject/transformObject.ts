import unset from 'lodash-es/unset';
import * as R from 'remeda';
import get from '../get';
import setMutable from '../setMutable';
import { MappingRule, TransformObjectOptions } from './types';

/**
 * 指定されたルールに従ってオブジェクトの構造を変換・抽出する
 */
export default function transformObject<
  T extends object = any,
  S extends object = any,
>(
  source: S,
  rules: (string | MappingRule<S, T>)[],
  options: TransformObjectOptions = {},
): T {
  const { deleteSourceKeys = false } = options;
  let result = {} as T;

  if (!rules || !source) {
    return result;
  }

  for (const rule of rules) {
    let fromPath: string | ((s: S) => any);
    let toPath: string | ((t: T, v: any) => T);
    let specificDelete: boolean | undefined;

    // ルールの正規化
    if (R.isString(rule)) {
      fromPath = toPath = rule;
    } else {
      fromPath = rule.from;
      toPath = rule.to ?? (R.isString(fromPath) ? fromPath : '');
      specificDelete = rule.shouldRemoveFromSource;
    }

    let value: any;

    // 値の抽出
    if (R.isString(fromPath)) {
      value = get(source, fromPath);

      // 削除フラグ
      const needsDelete = specificDelete ?? deleteSourceKeys;
      if (needsDelete) {
        unset(source, fromPath);
      }
    } else if (R.isFunction(fromPath)) {
      value = fromPath(source);
    }

    // 値の設定
    if (value !== undefined) {
      if (R.isString(toPath)) {
        if (toPath !== '') {
          setMutable(result, toPath, value);
        }
      } else if (R.isFunction(toPath)) {
        result = toPath(result, value);
      }
    }
  }

  return result;
}
