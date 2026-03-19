import retype from '../retype';
import {
  TO_HALF_WIDTH,
  TO_HALF_WIDTH_ALPHABET,
  TO_HALF_WIDTH_KANA,
  TO_HALF_WIDTH_NUMBER,
  TO_HALF_WIDTH_SIGN,
  TO_HALF_WIDTH_SPACE,
} from './constants';
import { RetypeToHalfWidthOptions } from './types';

/**
 * 全角 -> 半角
 * @param str
 * @returns
 */
export default function retypeToFullWidth(
  str: string,
  options: RetypeToHalfWidthOptions = {},
): string {
  const {
    disableAlphabet = false,
    disableNumber = false,
    disableSign = false,
    disableSpace = false,
    disableKatakana = false,
  } = options;
  const definitions =
    !disableAlphabet &&
    !disableNumber &&
    !disableSign &&
    !disableSpace &&
    !disableKatakana
      ? [TO_HALF_WIDTH]
      : [
          !disableAlphabet && TO_HALF_WIDTH_ALPHABET,
          !disableNumber && TO_HALF_WIDTH_NUMBER,
          !disableSign && TO_HALF_WIDTH_SIGN,
          !disableSpace && TO_HALF_WIDTH_SPACE,
          !disableKatakana && TO_HALF_WIDTH_KANA,
        ];

  return retype(str, definitions);
}
