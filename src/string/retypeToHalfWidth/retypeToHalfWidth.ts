import retype from '../retype';
import {
  toHalfWidtn,
  toHalfWidtnAlphabet,
  toHalfWidtnKana,
  toHalfWidtnNumber,
  toHalfWidtnSign,
  toHalfWidtnSpace,
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
      ? [toHalfWidtn]
      : [
          !disableAlphabet && toHalfWidtnAlphabet,
          !disableNumber && toHalfWidtnNumber,
          !disableSign && toHalfWidtnSign,
          !disableSpace && toHalfWidtnSpace,
          !disableKatakana && toHalfWidtnKana,
        ];

  return retype(str, definitions);
}
