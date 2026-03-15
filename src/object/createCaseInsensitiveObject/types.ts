import { NormalizeOptions } from '@cozka/utils-string/normalize';
import { CreateKeyTransformObjectOptionsBase } from '../createKeyTransformObject';

/**
 * オプション
 */
export type CreateCaseInsensitiveObjectOptions<T extends object> =
  NormalizeOptions & CreateKeyTransformObjectOptionsBase<T>;
