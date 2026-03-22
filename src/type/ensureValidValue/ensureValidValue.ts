import kind from '../kind';
import { KIND_TYPE } from '../kind/constants';
import { EnsureValidValueOptions } from './types';

/**
 * 型にふさわしい値に変換する
 * @param data 値
 * @param type 値として想定している型
 * @param options オプション
 * @returns
 */
const ensureValidValue = <T = unknown>(
  data: unknown,
  options?: EnsureValidValueOptions<T>,
) => _ensureValidValue(data, options);
ensureValidValue.dataLast =
  <T = unknown>(options?: EnsureValidValueOptions<T>) =>
  (data: unknown) =>
    _ensureValidValue(data, options);
export default ensureValidValue;

function _ensureValidValue<T = unknown>(
  data: unknown,
  options: EnsureValidValueOptions<T> = {},
): T {
  if (!options.validType) {
    // 型の指定なし
    if (data != null) {
      // 置き換え無し
      // パフォーマンスを考え、正常な値はできるだけ簡単な処理のみで返す
      return data as T;
    } else {
      if (data === undefined && 'undefinedValue' in options) {
        // undefinedの場合の代替値
        return options.undefinedValue as T;
      } else if (data === null && 'nullValue' in options) {
        // nullの場合の代替値
        return options.nullValue as T;
      }
      return data as T;
    }
  } else {
    // 型の指定あり
    // 型の判定
    const type = kind(data);
    const { validType = KIND_TYPE.ANY } = options;
    if (type === validType) {
      // 指定の型だった場合
      return data as T;
    } else if (type === KIND_TYPE.UNDEFINED && 'undefinedValue' in options) {
      // undefinedの場合の代替値
      return options.undefinedValue as T;
    } else if (type === KIND_TYPE.NULL && 'nullValue' in options) {
      // nullの場合の代替値
      return options.nullValue as T;
    } else if ('defaultValue' in options) {
      // 想定外の型の場合の代替値
      return options.defaultValue as T;
    }
    // 指定の型ではないが、置き換える値が設定されていない場合
    return data as T;
  }
}
