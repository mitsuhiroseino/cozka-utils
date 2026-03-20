import swapPairs from '../../array/swapPairs';
import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';
import {
  toFullWidth,
  toFullWidthAlphabet,
  toFullWidthKana,
  toFullWidthNumber,
  toFullWidthSign,
  toFullWidthSpace,
} from '../retypeToFullWidth/constants';

/**
 * アルファベットの全角 -> 半角を変換する為のマップ
 */
export const toHalfWidtnAlphabet = {
  id: 'to-half-widtn-alphabet',
  map: swapPairs(toFullWidthAlphabet.map),
} as const satisfies ReplacementMapDefinition;

/**
 * 数字の全角 -> 半角を変換する為のマップ
 */
export const toHalfWidtnNumber = {
  id: 'to-half-widtn-number',
  map: swapPairs(toFullWidthNumber.map),
} as const satisfies ReplacementMapDefinition;

/**
 * 記号の全角 -> 半角を変換する為のマップ
 */
export const toHalfWidtnSign = {
  id: 'to-half-widtn-sign',
  map: swapPairs(toFullWidthSign.map),
} as const satisfies ReplacementMapDefinition;

/**
 * スペースの全角 -> 半角を変換する為のマップ
 */
export const toHalfWidtnSpace = {
  id: 'to-half-widtn-space',
  map: swapPairs(toFullWidthSpace.map),
} as const satisfies ReplacementMapDefinition;

/**
 * スペースの全角 -> 半角を変換する為のマップ
 */
export const toHalfWidtnKana = {
  id: 'to-half-widtn-kana',
  map: swapPairs(toFullWidthKana.map),
} as const satisfies ReplacementMapDefinition;

/**
 * 全角 -> 半角を変換する為のマップ
 */
export const toHalfWidtn = {
  id: 'to-half-widtn',
  map: swapPairs(toFullWidth.map),
} as const satisfies ReplacementMapDefinition;
