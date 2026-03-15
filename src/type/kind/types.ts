import { KIND_TYPE } from './constants';

/**
 * 型種別
 */
export type KindType = (typeof KIND_TYPE)[keyof typeof KIND_TYPE];
