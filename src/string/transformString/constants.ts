import recaseCamel from '../recaseCamel';
import recaseKebab from '../recaseKebab';
import recaseLower from '../recaseLower';
import recasePascal from '../recasePascal';
import recaseScreamingSnake from '../recaseScreamingSnake';
import recaseSnake from '../recaseSnake';
import recaseTitle from '../recaseTitle';
import recaseUpper from '../recaseUpper';
import {
  toFullWidth,
  toFullWidthAlphabet,
  toFullWidthKana,
  toFullWidthNumber,
  toFullWidthSign,
  toFullWidthSpace,
} from '../retypeToFullWidth/constants';
import {
  toHalfWidtn,
  toHalfWidtnAlphabet,
  toHalfWidtnKana,
  toHalfWidtnNumber,
  toHalfWidtnSign,
  toHalfWidtnSpace,
} from '../retypeToHalfWidth/constants';
import { toHiragana } from '../retypeToHiragana/constants';
import {
  toHiraganaSeion,
  toHiraganaSeionFromDakuon,
  toHiraganaSeionFromSokuon,
  toHiraganaSeionFromYouon,
} from '../retypeToHiraganaSeion/constants';
import { toKatakana } from '../retypeToKatakana/constants';
import {
  toKatakanaSeion,
  toKatakanaSeionFromDakuon,
  toKatakanaSeionFromSokuon,
  toKatakanaSeionFromYouon,
} from '../retypeToKatakanaSeion/constants';
import { toNoChouon } from '../retypeToNoChouon/constants';
import { toNoLineFeed } from '../retypeToNoLineFeed/constants';
import { toNoSpace } from '../retypeToNoSpace/constants';

export const TransformationType = {
  toFullWidth: toFullWidth.id,
  toFullWidthAlphabet: toFullWidthAlphabet.id,
  toFullWidthNumber: toFullWidthNumber.id,
  toFullWidthSign: toFullWidthSign.id,
  toFullWidthSpace: toFullWidthSpace.id,
  toFullWidthKana: toFullWidthKana.id,
  toHalfWidtn: toHalfWidtn.id,
  toHalfWidtnAlphabet: toHalfWidtnAlphabet.id,
  toHalfWidtnNumber: toHalfWidtnNumber.id,
  toHalfWidtnSign: toHalfWidtnSign.id,
  toHalfWidtnSpace: toHalfWidtnSpace.id,
  toHalfWidtnKana: toHalfWidtnKana.id,
  toHiragana: toHiragana.id,
  toHiraganaSeion: toHiraganaSeion.id,
  toHiraganaSeionFromDakuon: toHiraganaSeionFromDakuon.id,
  toHiraganaSeionFromSokuon: toHiraganaSeionFromSokuon.id,
  toHiraganaSeionFromYouon: toHiraganaSeionFromYouon.id,
  toKatakana: toKatakana.id,
  toKatakanaSeion: toKatakanaSeion.id,
  toKatakanaSeionFromDakuon: toKatakanaSeionFromDakuon.id,
  toKatakanaSeionFromSokuon: toKatakanaSeionFromSokuon.id,
  toKatakanaSeionFromYouon: toKatakanaSeionFromYouon.id,
  toNoChouon: toNoChouon.id,
  toNoLineFeed: toNoLineFeed.id,
  toNoSpace: toNoSpace.id,
  toCamelCase: 'to-camel-case',
  toKebabCase: 'to-kebab-case',
  toLowerCase: 'to-lower-case',
  toPascalCase: 'to-pascal-case',
  toScreamingSnakeCase: 'to-screaming-snake-case',
  toSnakeCase: 'to-snake-case',
  toTitleCase: 'to-title-case',
  toUpperCase: 'to-upper-case',
} as const;

export type TransformationType =
  (typeof TransformationType)[keyof typeof TransformationType];

export const ReplaceByMap = {
  [toFullWidth.id]: toFullWidth,
  [toFullWidthAlphabet.id]: toFullWidthAlphabet,
  [toFullWidthNumber.id]: toFullWidthNumber,
  [toFullWidthSign.id]: toFullWidthSign,
  [toFullWidthSpace.id]: toFullWidthSpace,
  [toFullWidthKana.id]: toFullWidthKana,
  [toHalfWidtn.id]: toHalfWidtn,
  [toHalfWidtnAlphabet.id]: toHalfWidtnAlphabet,
  [toHalfWidtnNumber.id]: toHalfWidtnNumber,
  [toHalfWidtnSign.id]: toHalfWidtnSign,
  [toHalfWidtnSpace.id]: toHalfWidtnSpace,
  [toHalfWidtnKana.id]: toHalfWidtnKana,
  [toHiragana.id]: toHiragana,
  [toHiraganaSeion.id]: toHiraganaSeion,
  [toHiraganaSeionFromDakuon.id]: toHiraganaSeionFromDakuon,
  [toHiraganaSeionFromSokuon.id]: toHiraganaSeionFromSokuon,
  [toHiraganaSeionFromYouon.id]: toHiraganaSeionFromYouon,
  [toKatakana.id]: toKatakana,
  [toKatakanaSeion.id]: toKatakanaSeion,
  [toKatakanaSeionFromDakuon.id]: toKatakanaSeionFromDakuon,
  [toKatakanaSeionFromSokuon.id]: toKatakanaSeionFromSokuon,
  [toKatakanaSeionFromYouon.id]: toKatakanaSeionFromYouon,
  [toNoChouon.id]: toNoChouon,
  [toNoLineFeed.id]: toNoLineFeed,
  [toNoSpace.id]: toNoSpace,
} as const;

export const TransformFunction = {
  toCamelCase: recaseCamel,
  toKebabCase: recaseKebab,
  toLowerCase: recaseLower,
  toPascalCase: recasePascal,
  toScreamingSnakeCase: recaseScreamingSnake,
  toSnakeCase: recaseSnake,
  toTitleCase: recaseTitle,
  toUpperCase: recaseUpper,
} as const;
