import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';

/**
 * ひらがなの濁音 -> 清音を変換する為のマップ
 */
export const toHiraganaSeionFromDakuon = {
  id: 'to-hiragana-seion-from-dakuon',
  map: [
    ['ゔ', 'う'],
    ['が', 'か'],
    ['ぎ', 'き'],
    ['ぐ', 'く'],
    ['げ', 'け'],
    ['ご', 'こ'],
    ['ざ', 'さ'],
    ['じ', 'し'],
    ['ず', 'す'],
    ['ぜ', 'せ'],
    ['ぞ', 'そ'],
    ['だ', 'た'],
    ['ぢ', 'ち'],
    ['づ', 'つ'],
    ['で', 'て'],
    ['ど', 'と'],
    ['ば', 'は'],
    ['ぱ', 'は'],
    ['び', 'ひ'],
    ['ぴ', 'ひ'],
    ['ぷ', 'ふ'],
    ['ぶ', 'ふ'],
    ['べ', 'へ'],
    ['ぺ', 'へ'],
    ['ぼ', 'ほ'],
    ['ぽ', 'ほ'],
  ],
} as const satisfies ReplacementMapDefinition;

/**
 * ひらがなの促音 -> 清音を変換する為のマップ
 */
export const toHiraganaSeionFromSokuon = {
  id: 'to-hiragana-seion-from-sokuon',
  map: [['っ', 'つ']],
} as const satisfies ReplacementMapDefinition;

/**
 * ひらがなの拗音 -> 清音を変換する為のマップ
 */
export const toHiraganaSeionFromYouon = {
  id: 'to-hiragana-seion-from-youon',
  map: [
    ['ぁ', 'あ'],
    ['ぃ', 'い'],
    ['ぅ', 'う'],
    ['ぇ', 'え'],
    ['ぉ', 'お'],
    ['ゃ', 'や'],
    ['ゅ', 'ゆ'],
    ['ょ', 'よ'],
    ['ゎ', 'わ'],
  ],
} as const satisfies ReplacementMapDefinition;

/**
 * ひらがなの濁音・促音・拗音 -> 清音を変換する為のマップ
 */
export const toHiraganaSeion = {
  id: 'to-hiragana-seion',
  map: [
    ...toHiraganaSeionFromDakuon.map,
    ...toHiraganaSeionFromSokuon.map,
    ...toHiraganaSeionFromYouon.map,
  ],
} as const satisfies ReplacementMapDefinition;
