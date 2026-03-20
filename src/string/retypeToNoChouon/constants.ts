import { ReplacementMapDefinition } from '../_internal/_createReplacementMapComposer';

/**
 * 長音を削除する為のマップ
 */
export const toNoChouon = {
  id: 'to-no-chouon',
  map: [['ー', '']],
} as const satisfies ReplacementMapDefinition;
