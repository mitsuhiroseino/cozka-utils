import { SwapPairsResult } from './types';

/**
 * タプルの配列を受け取り、各要素の [0] と [1] を入れ替える
 */
export default function swapPairs<const T extends [any, any][]>(
  pairs: T,
): SwapPairsResult<T> {
  return pairs.map(([first, second]) => [second, first]) as any;
}
