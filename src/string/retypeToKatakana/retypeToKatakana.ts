import retype from '../retype';
import { toKatakana } from './constants';

/**
 * ひらがな -> カタカナ
 * @param str
 * @returns
 */
export default function retypeToKatakana(str: string): string {
  return retype(str, toKatakana);
}
