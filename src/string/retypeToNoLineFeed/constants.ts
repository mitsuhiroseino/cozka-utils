import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';

/**
 * 改行を削除する為のマップ
 */
export const toNoLineFeed = {
  id: 'to-no-line-feed',
  map: [
    ['\r\n', ''],
    ['\r', ''],
    ['\n', ''],
  ],
} as const satisfies ReplacementMapDefinition;
