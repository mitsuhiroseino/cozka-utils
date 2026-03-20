import _filterFalsy from '../../_internal/_filterFalsy';
import retype from '../retype';
import {
  toFullWidth,
  toFullWidthAlphabet,
  toFullWidthKana,
  toFullWidthNumber,
  toFullWidthSign,
  toFullWidthSpace,
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
      ? [toFullWidth]
      : [
          !disableAlphabet && toFullWidthAlphabet,
          !disableNumber && toFullWidthNumber,
          !disableSign && toFullWidthSign,
          !disableSpace && toFullWidthSpace,
          !disableKatakana && toFullWidthKana,
        ];

  return retype(str, definitions);
}
