import retype from '../retype';
import { TO_HIRAGANA } from './constants';

/**
 * カタカナ → ひらがな
 * @param str
 * @returns
 */
export default function retypeToKatakana(str: string): string {
  return retype(str, TO_HIRAGANA);
}
