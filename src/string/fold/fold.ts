import transformString, { TransformationType } from '../transformString';
import { TRANSFORMATION_TYPES } from '../transformString/constants';
import { FoldOptions } from './types';

/**
 * 文字列の表記揺れを折りたたみ、比較可能な形に整える
 * @param value 文字列
 * @param options オプション
 * @returns 整えられた文字列
 */
export default function fold(value: string, options: FoldOptions = {}): string {
  if (value) {
    // 文字列あり
    const {
      ignoreCase,
      ingoreWidth,
      ignoreKana,
      ignoreDakuon,
      ignoreSokuon,
      ignoreYouon,
      ignoreChouon,
      ignoreSpace,
      transformOptions,
    } = options;
    const transformationTypes: TransformationType[] = [];

    if (ingoreWidth) {
      // 半角・全角の違いを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_HALF_WIDTH);
      transformationTypes.push(TRANSFORMATION_TYPES.TO_ZENKAKU);
    }
    if (ignoreCase) {
      // 英字の大文字・小文字の違いを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_LOCALE_LOWER_CASE);
    }
    if (ignoreKana) {
      // ひらがな・カタカナの違いを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_KATAKANA);
    }
    if (ignoreDakuon) {
      // 濁音(ば)・半濁音(ぱ)と清音(は)の違いを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_WITHOUT_DAKUON);
    }
    if (ignoreSokuon) {
      // 促音(っ)と清音(つ)の違いを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_WITHOUT_SOKUON);
    }
    if (ignoreYouon) {
      // 拗音(ゃ)と清音(や)の違いを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_WITHOUT_YOUON);
    }
    if (ignoreChouon) {
      // 長音(ー)を無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_WITHOUT_YOUON);
    }
    if (ignoreSpace) {
      // スペースを無視する
      transformationTypes.push(TRANSFORMATION_TYPES.TO_WITHOUT_SPACE);
    }

    return transformString(value, transformationTypes, transformOptions);
  } else if (value === null && 'nullValue' in options) {
    // nullの場合は別の値に置き換え
    return options.nullValue;
  } else if (value === undefined && 'undefinedValue' in options) {
    // undefinedの場合は別の値に置き換え
    return options.undefinedValue;
  } else {
    // 上記以外はそのまま返す
    return value;
  }
}
