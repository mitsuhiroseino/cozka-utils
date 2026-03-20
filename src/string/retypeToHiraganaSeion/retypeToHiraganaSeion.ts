import retype from '../retype';
import {
  toHiraganaSeion,
  toHiraganaSeionFromDakuon,
  toHiraganaSeionFromSokuon,
  toHiraganaSeionFromYouon,
} from './constants';
import { RetypeToHiraganaSeionOptions } from './types';

/**
 * 濁音 -> 清音
 * @param str
 * @returns
 */
export default function retypeToHiraganaSeion(
  str: string,
  options: RetypeToHiraganaSeionOptions = {},
): string {
  const {
    disableDakuon = false,
    disableSokuon = false,
    disableYouon = false,
  } = options;
  const definitions =
    !disableDakuon && !disableSokuon && !disableYouon
      ? toHiraganaSeion
      : [
          !disableDakuon && toHiraganaSeionFromDakuon,
          !disableSokuon && toHiraganaSeionFromSokuon,
          !disableYouon && toHiraganaSeionFromYouon,
        ];

  return retype(str, definitions);
}
