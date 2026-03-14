import { NormalizeOptions } from '@cozka/utils-string/normalize';
import NormalizedKeyManager from './NormalizedKeyManager';

const manager = new NormalizedKeyManager();

/**
 * 正規化されたキーを取得する
 * @param actualKey
 * @param data
 * @param options
 * @returns
 */
export function _getNormalizedKey(
  actualKey: string,
  data: object,
  options?: NormalizeOptions,
): string {
  return manager.getNormalizedKey(actualKey, data, options);
}

/**
 * 実際のキーを取得する
 * @param normalizedKey
 * @param data
 * @param options
 * @returns
 */
export function _getActualKey(
  normalizedKey: string,
  data: object,
  options?: NormalizeOptions,
): string | undefined {
  return manager.getActualKey(normalizedKey, data, options);
}

/**
 * 正規化されたキーを削除する
 * @param normalizedKey
 * @param data
 * @param options
 * @returns
 */
export function _removeNormalizedKey(
  normalizedKey: string,
  data: object,
  options?: NormalizeOptions,
): string {
  return manager.removeNormalizedKey(normalizedKey, data, options);
}

/**
 * 実際のキーを削除する
 * @param actualKey
 * @param data
 * @param options
 * @returns
 */
export function _removeActualKey(
  actualKey: string,
  data: object,
  options?: NormalizeOptions,
): string | undefined {
  return manager.removeActualKey(actualKey, data, options);
}

/**
 * キーがルーズなオブジェクトのproxyを作る
 * @param target 対象のオブジェクト
 * @param getKey キーを取得する為の関数
 * @returns
 */
export function _createCustomKeyObjectProxy<T extends object>(
  target: T,
  getKey: (object: T, key: string | symbol, remove?: boolean) => string,
) {
  return new Proxy(target, {
    // プロパティの設定時
    set(object, key, value, receiver) {
      return Reflect.set(object, getKey(object, key), value, receiver);
    },
    // プロパティの取得時
    get(object, key, receiver) {
      return Reflect.get(object, getKey(object, key), receiver);
    },
    // プロパティの有無判定
    has(object, key) {
      return Reflect.has(object, getKey(object, key));
    },
    // プロパティの削除時
    deleteProperty(object, key) {
      return Reflect.deleteProperty(object, getKey(object, key, true));
    },
    // プロパティの定義取得時
    getOwnPropertyDescriptor(object, key) {
      return Reflect.getOwnPropertyDescriptor(object, getKey(object, key));
    },
    // プロパティの定義
    defineProperty(
      object: T,
      key: string | symbol,
      attributes: PropertyDescriptor,
    ) {
      return Reflect.defineProperty(object, getKey(object, key), attributes);
    },
  });
}
