import retype from '../retype';
import { toNoChouon } from './constants';

/**
 * 長音の削除
 * @param str
 * @returns
 */
export default function retypeToNoChouon(str: string): string {
  return retype(str, toNoChouon);
}
