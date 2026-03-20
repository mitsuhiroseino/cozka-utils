import swapPairs from '../../array/swapPairs';
import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';
import { toKatakana } from '../retypeToKatakana/constants';

/**
 * カタカナ → ひらがなを変換する為のマップ
 */
export const toHiragana = {
  id: 'to-hiragana',
  map: swapPairs(toKatakana.map),
} as const satisfies ReplacementMapDefinition;
