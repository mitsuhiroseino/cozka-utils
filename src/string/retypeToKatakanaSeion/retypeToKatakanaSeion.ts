import retype from '../retype';
import {
  toKatakanaSeion,
  toKatakanaSeionFromDakuon,
  toKatakanaSeionFromSokuon,
  toKatakanaSeionFromYouon,
} from './constants';
import { RetypeToKatakanaSeionOptions } from './types';

/**
 * 濁音 -> 清音
 * @param str
 * @returns
 */
export default function retypeToKatakanaSeion(
  str: string,
  options: RetypeToKatakanaSeionOptions = {},
): string {
  const {
    disableDakuon = false,
    disableSokuon = false,
    disableYouon = false,
  } = options;
  const definitions =
    !disableDakuon && !disableSokuon && !disableYouon
      ? toKatakanaSeion
      : [
          !disableDakuon && toKatakanaSeionFromDakuon,
          !disableSokuon && toKatakanaSeionFromSokuon,
          !disableYouon && toKatakanaSeionFromYouon,
        ];

  return retype(str, definitions);
}
