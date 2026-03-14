import normalize from '@cozka/utils-string/normalize';
import stableStringify from '../../stableStringify';
import { NormalizedKeyManagerOptions } from './types';

/**
 * 実際のキーと正規化されたキーを管理するクラス
 */
export default class NormalizedKeyManager {
  /**
   * 対象のオブジェクトをキーとしてキャッシュされた情報を持つマップ
   */
  private _cache = new WeakMap<object, Map<string, NormalizedKeyItem>>();

  /**
   * オプションを文字列化した情報を持つマップ
   */
  private _optionsCache = new WeakMap<NormalizedKeyManagerOptions, string>();

  constructor() {}

  /**
   * 正規化されたキー → 実際のキー
   *
   * @param normalizedKey
   * @param data
   * @param options
   * @returns
   */
  public getActualKey(
    normalizedKey: string,
    data: object,
    options?: NormalizedKeyManagerOptions,
  ) {
    return this._getItem(data, options).getActualKey(normalizedKey);
  }

  /**
   * 実際のキー → 正規化されたキー
   *
   * @param actualKey
   * @param data
   * @param options
   * @returns
   */
  public getNormalizedKey(
    actualKey: string,
    data: object,
    options?: NormalizedKeyManagerOptions,
  ): string | undefined {
    return this._getItem(data, options).getNormalizedKey(actualKey);
  }

  /**
   * 実際のキーのキャッシュを削除
   *
   * @param actualKey
   * @param data
   * @param options
   * @returns 実際のキーに紐づく正規化されたキー
   */
  public removeActualKey(
    actualKey: string,
    data: object,
    options?: NormalizedKeyManagerOptions,
  ) {
    return this._getItem(data, options).removeActualKey(actualKey);
  }

  /**
   * 正規化されたキーのキャッシュを削除
   *
   * @param actualKey
   * @param data
   * @param options
   * @returns 正規化されたキーに紐づく実際のキー
   */
  public removeNormalizedKey(
    normalizedKey: string,
    data: object,
    options?: NormalizedKeyManagerOptions,
  ) {
    return this._getItem(data, options).removeNormalizedKey(normalizedKey);
  }

  /**
   * NormalizedKeyItemの取得
   * @param data
   * @param options
   * @returns
   */
  private _getItem(
    data: object,
    options: NormalizedKeyManagerOptions | undefined,
  ) {
    const optionKey = this._getOptionsKey(options);
    let cacheData = this._cache.get(data);
    if (!cacheData) {
      cacheData = new Map();
      this._cache.set(data, cacheData);
    }
    let item = cacheData.get(optionKey);
    if (!item) {
      item = new NormalizedKeyItem(data, options);
      cacheData.set(optionKey, item);
    }
    return item;
  }

  /**
   * 文字列化したオプションの取得
   * @param options
   * @returns
   */
  private _getOptionsKey(options: NormalizedKeyManagerOptions | undefined) {
    if (!options) {
      return '{}';
    }
    const optionsCache = this._optionsCache;
    let optionsKey = optionsCache.get(options);
    if (!optionsKey) {
      optionsKey = stableStringify(options);
      optionsCache.set(options, optionsKey);
    }
    return optionsKey;
  }
}

/**
 * data & options毎のキャッシュを管理するクラス
 */
class NormalizedKeyItem {
  /**
   * 正規化されたキー → 実際のキー 用のキャッシュ
   */
  private _normToActual = new Map<string, string>();

  /**
   * 実際のキー → 正規化されたキー 用のキャッシュ
   */
  private _actualToNorm = new Map<string, string>();

  constructor(
    data: object,
    private readonly _options?: NormalizedKeyManagerOptions,
  ) {
    this._initialize(data);
  }

  /**
   * 正規化されたキー → 実際のキー
   */
  public getActualKey(normalizedKey: string): string | undefined {
    return this._normToActual.get(normalizedKey);
  }

  /**
   * 実際のキー → 正規化されたキー
   */
  public getNormalizedKey(actualKey: string): string {
    if (!this._actualToNorm.has(actualKey)) {
      this._addCacheEntry(actualKey);
    }
    return this._actualToNorm.get(actualKey);
  }

  /**
   * 実際のキーの有無
   */
  public hasActualKey(actualKey: string): boolean {
    return this._actualToNorm.has(actualKey);
  }

  /**
   * 正規化されたキーの有無
   */
  public hasNormalizedKey(normalizedKey: string): boolean {
    return this._normToActual.has(normalizedKey);
  }

  /**
   * 実際のキーの削除
   * @param actualKey
   * @returns 実際のキーに紐づく正規化されたキー
   */
  public removeActualKey(actualKey: string): string | undefined {
    const normalizedKey = this._actualToNorm.get(actualKey);
    if (normalizedKey !== undefined) {
      const primaryActualKey = this._normToActual.get(normalizedKey);
      if (actualKey === primaryActualKey) {
        // objectに設定されているキーの場合は正規化されたキーも削除
        this._normToActual.delete(normalizedKey);
      }
      // 実際のキーの削除
      this._actualToNorm.delete(actualKey);
    }
    return normalizedKey;
  }

  /**
   * 正規化されたキーの削除
   * @param normalizedKey
   * @returns 正規化されたキーに紐づく実際のキー
   */
  public removeNormalizedKey(normalizedKey: string): string | undefined {
    const actualKey = this._normToActual.get(normalizedKey);
    this._normToActual.delete(normalizedKey);
    return actualKey;
  }

  /**
   * 現在のdataのキーで更新
   * @param data
   */
  public update(data: object) {
    this._normToActual.clear();
    this._actualToNorm.clear();
    this._initialize(data);
  }

  /**
   * 初期化
   * @param data
   */
  private _initialize(data: object) {
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        this._addCacheEntry(key);
      }
    }
  }

  /**
   * キャッシュへの登録
   */
  private _addCacheEntry(actualKey: string): void {
    const normalizedKey = normalize(actualKey, this._options);

    // 正規化されたキー → 実際のキー (既にある場合は上書きしない。先勝ち)
    if (!this._normToActual.has(normalizedKey)) {
      this._normToActual.set(normalizedKey, actualKey);
    }

    // 実際のキー → 正規化されたキー
    this._actualToNorm.set(actualKey, normalizedKey);
  }
}
