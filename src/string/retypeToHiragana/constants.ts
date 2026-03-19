import swapPairs from '../../array/swapPairs';
import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';
import { TO_KATAKANA } from '../retypeToKatakana/constants';

/**
 * カタカナ → ひらがなを変換する為のマップ
 */
export const TO_HIRAGANA = {
  id: 'TO_HIRAGANA',
  map: swapPairs(TO_KATAKANA.map),
} as const satisfies ReplacementMapDefinition;
