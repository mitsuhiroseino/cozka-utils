import detailedTypeOf from '../detailedTypeOf';
import { VALUE_TYPE } from '../detailedTypeOf/constants';
import { ToValidValueOptions } from './types';

/**
 * 型にふさわしい値に変換する
 * @param data 値
 * @param type 値として想定している型
 * @param options オプション
 * @returns
 */
const toValidValue = <T = unknown>(
  data: unknown,
  options?: ToValidValueOptions<T>,
) => _toValidValue(data, options);
toValidValue.dataLast =
  <T = unknown>(options?: ToValidValueOptions<T>) =>
  (data: unknown) =>
    _toValidValue(data, options);
export default toValidValue;

function _toValidValue<T = unknown>(
  data: unknown,
  options: ToValidValueOptions<T> = {},
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
    const type = detailedTypeOf(data);
    const { validType = VALUE_TYPE.ANY } = options;
    if (type === validType) {
      // 指定の型だった場合
      return data as T;
    } else if (type === VALUE_TYPE.UNDEFINED && 'undefinedValue' in options) {
      // undefinedの場合の代替値
      return options.undefinedValue as T;
    } else if (type === VALUE_TYPE.NULL && 'nullValue' in options) {
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
