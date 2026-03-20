import retype from '../retype';
import { toHiragana } from './constants';

/**
 * カタカナ → ひらがな
 * @param str
 * @returns
 */
export default function retypeToKatakana(str: string): string {
  return retype(str, toHiragana);
}
