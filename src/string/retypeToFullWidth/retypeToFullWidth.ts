import _filterFalsy from '../../_internal/_filterFalsy';
import retype from '../retype';
import {
  TO_FULL_WIDTH,
  TO_FULL_WIDTH_ALPHABET,
  TO_FULL_WIDTH_KANA,
  TO_FULL_WIDTH_NUMBER,
  TO_FULL_WIDTH_SIGN,
  TO_FULL_WIDTH_SPACE,
} from './constants';
import { RetypeToFullWidthOptions } from './types';

/**
 * 半角 -> 全角
 * @param str
 * @returns
 */
export default function retypeToFullWidth(
  str: string,
  options: RetypeToFullWidthOptions = {},
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
      ? [TO_FULL_WIDTH]
      : [
          !disableAlphabet && TO_FULL_WIDTH_ALPHABET,
          !disableNumber && TO_FULL_WIDTH_NUMBER,
          !disableSign && TO_FULL_WIDTH_SIGN,
          !disableSpace && TO_FULL_WIDTH_SPACE,
          !disableKatakana && TO_FULL_WIDTH_KANA,
        ];

  return retype(str, definitions);
}
