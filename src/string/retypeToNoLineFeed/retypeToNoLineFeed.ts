import retype from '../retype';
import { toNoLineFeed } from './constants';

/**
 * 改行の削除
 * @param str
 * @returns
 */
export default function retypeToNoLineFeed(str: string): string {
  return retype(str, toNoLineFeed);
}
