import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';

/**
 * スペースを削除する為のマップ
 */
export const toNoSpace = {
  id: 'to-no-space',
  map: [
    [' ', ''],
    ['　', ''],
  ],
} as const satisfies ReplacementMapDefinition;
