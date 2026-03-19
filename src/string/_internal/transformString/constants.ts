import ensureString from '../../ensureString';
import escapeForRegex from '../../escapeRegExp';

/**
 * 長音を削除する為のマップ
 */
export const OMIT_KANA_CHOUON = {
  ー: '',
} as const;

/**
 * スペースを削除するためのマップ
 */
export const OMIT_SPACE = { ' ': '', '　': '' } as const;

/**
 * 改行をHTMLの<br/>置き換える為のマップ
 */
export const HTML_LINE_FEED = {
  '\r\n': '<br/>',
  '\r': '<br/>',
  '\n': '<br/>',
} as const;

/**
 * HTMLの<br/>を改行(\r\n)に置き換える為のマップ
 */
export const TEXT_LINE_FEED = {
  '<br/>': '\r\n',
} as const;

/**
 * HTML用エスケープの為のマップ
 */
export const HTML = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot',
  "'": '&#39;',
  ' ': '&nbsp;',
} as const;

/**
 * 複数の変換を組み合わせた変換
 */
export const PRESETS = {
  /**
   * 半角に変換
   */
  toHalfWidth: [
    'toHalfWidthAlphabet',
    'toHalfWidthNumber',
    'toHalfWidthSign',
    'toHalfWidthSpace',
  ],

  /**
   * 全角に変換
   */
  toFullWidth: [
    'toFullWidthAlphabet',
    'toFullWidthNumber',
    'toFullWidthSign',
    'toFullWidthSpace',
  ],

  /**
   * HTMLの内容をHTMLで表示するための変換
   */
  toHtmlOnHtml: ['escapeForHtml', 'toHtmlLineFeed'],

  /**
   * 文字列をそのままHTMLに表示するための変換
   */
  toTextOnHtml: ['_toEmptyString', 'toHtmlOnHtml'],
};

// const ESCAPE_STRING_FROM = /('|\\)/g,
//   ESCAPE_STRING_TO = '\\$1';

// /**
//  * replacerを使わない変換
//  */
// export const FUNCTIONS = {
//   // nullを空文字に変換
//   _toEmptyString: (target: string, options: TransformStringOptions) => {
//     return ensureString(target);
//   },
//   toLowerCase: (target: string, options: TransformStringOptions) => {
//     return target.toLowerCase();
//   },
//   toUpperCase: (target: string, options: TransformStringOptions) => {
//     return target.toUpperCase();
//   },
//   toLocaleLowerCase: (target: string, options: TransformStringOptions) => {
//     return target.toLocaleLowerCase(options.locales);
//   },
//   toLocaleUpperCase: (target: string, options: TransformStringOptions) => {
//     return target.toLocaleUpperCase(options.locales);
//   },
//   // 正規表現のリテラル部分を文字列で記述する際に必要なエスケープ。RegExpのコンストラクターに渡せる形式
//   escapeForRegex,
//   // プログラム内で文字列を記述する際に必要なエスケープ。"'"と"/"に"/"を付与する。
//   escapeForString: (target: string, options: TransformStringOptions) => {
//     return target.replace(ESCAPE_STRING_FROM, ESCAPE_STRING_TO);
//   },
// };

// export const TRANSFORMATION_TYPES = {
//   // mapによる変換
//   TO_FULL_WIDTH_ALPHABET: 'toFullWidthAlphabet',
//   TO_HALF_WIDTH_ALPHABET: 'toHalfWidthAlphabet',
//   TO_FULL_WIDTH_NUMBER: 'toFullWidthNumber',
//   TO_HALF_WIDTH_NUMBER: 'toHalfWidthNumber',
//   TO_FULL_WIDTH_SIGN: 'toFullWidthSign',
//   TO_HALF_WIDTH_SIGN: 'toHalfWidthSign',
//   TO_FULL_WIDTH_SPACE: 'toFullWidthSpace',
//   TO_HALF_WIDTH_SPACE: 'toHalfWidthSpace',
//   TO_ZENKAKU: 'toZenkaku',
//   TO_HANKAKU: 'toHankaku',
//   TO_KATAKANA: 'toKatakana',
//   TO_HIRAGANA: 'toHiragana',
//   TO_WITHOUT_DAKUON: 'toWithoutDakuon',
//   TO_WITHOUT_SOKUON: 'toWithoutSokuon',
//   TO_WITHOUT_YOUON: 'toWithoutYouon',
//   TO_WITHOUT_CHOUON: 'toWithoutChouon',
//   TO_WITHOUT_SPACE: 'toWithoutSpace',
//   TO_HTML_LINE_FEED: 'toHtmlLineFeed',
//   TO_TEXT_LINE_FEED: 'toTextLineFeed',
//   ESCAPE_FOR_HTML: 'escapeForHtml',
//   UNESCAPE_FROM_HTML: 'unescapeFromHtml',
//   // 複数のmapを使った変換
//   TO_FULL_WIDTH: 'toFullWidth',
//   TO_HALF_WIDTH: 'toHalfWidth',
//   TO_HTML_ON_HTML: 'toHtmlOnHtml',
//   TO_TEXT_ON_HTML: 'toTextOnHtml',
//   // mapを使わない変換
//   TO_LOWER_CASE: 'toLowerCase',
//   TO_UPPER_CASE: 'toUpperCase',
//   TO_LOCALE_LOWER_CASE: 'toLocaleLowerCase',
//   TO_LOCALE_UPPER_CASE: 'toLocaleUpperCase',
//   ESCAPE_FOR_REGEXP: 'escapeForRegex',
//   ESCAPE_FOR_STRING: 'escapeForString',
// } as const;

// /**
//  * 変換用マップ
//  */
// export const TRANSFORMATIONS = [
//   {
//     map: ALPHABET_WIDTH,
//     type: TRANSFORMATION_TYPES.TO_FULL_WIDTH_ALPHABET,
//     reverseType: TRANSFORMATION_TYPES.TO_HALF_WIDTH_ALPHABET,
//   },
//   {
//     map: NUMBER_WIDTH,
//     type: TRANSFORMATION_TYPES.TO_FULL_WIDTH_NUMBER,
//     reverseType: TRANSFORMATION_TYPES.TO_HALF_WIDTH_NUMBER,
//   },
//   {
//     map: SIGN_WIDTH,
//     type: TRANSFORMATION_TYPES.TO_FULL_WIDTH_SIGN,
//     reverseType: TRANSFORMATION_TYPES.TO_HALF_WIDTH_SIGN,
//   },
//   {
//     map: SPACE_WIDTH,
//     type: TRANSFORMATION_TYPES.TO_FULL_WIDTH_SPACE,
//     reverseType: TRANSFORMATION_TYPES.TO_HALF_WIDTH_SPACE,
//   },
//   {
//     map: KANA_WIDTH,
//     type: TRANSFORMATION_TYPES.TO_ZENKAKU,
//     reverseType: TRANSFORMATION_TYPES.TO_HANKAKU,
//   },
//   {
//     map: KANA,
//     type: TRANSFORMATION_TYPES.TO_KATAKANA,
//     reverseType: TRANSFORMATION_TYPES.TO_HIRAGANA,
//   },
//   { map: KANA_DAKUON, type: TRANSFORMATION_TYPES.TO_WITHOUT_DAKUON },
//   { map: KANA_SOKUON, type: TRANSFORMATION_TYPES.TO_WITHOUT_SOKUON },
//   { map: KANA_YOUON, type: TRANSFORMATION_TYPES.TO_WITHOUT_YOUON },
//   { map: OMIT_KANA_CHOUON, type: TRANSFORMATION_TYPES.TO_WITHOUT_CHOUON },
//   { map: OMIT_SPACE, type: TRANSFORMATION_TYPES.TO_WITHOUT_SPACE },
//   { map: HTML_LINE_FEED, type: TRANSFORMATION_TYPES.TO_HTML_LINE_FEED },
//   { map: TEXT_LINE_FEED, type: TRANSFORMATION_TYPES.TO_TEXT_LINE_FEED },
//   {
//     map: HTML,
//     type: TRANSFORMATION_TYPES.ESCAPE_FOR_HTML,
//     reverseType: TRANSFORMATION_TYPES.UNESCAPE_FROM_HTML,
//   },
// ];
