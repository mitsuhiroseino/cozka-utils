import escapeRegExp from '../escapeRegExp';
import safeMatchAll from '../safeMatchAll';
import { CreateExtractorResult, ExtractorOptions } from './types';

/**
 * 特定のデリミタで囲まれたトークンを抽出する関数を作成する
 * @param delimiter 開始・終了の区切り文字。単一文字列の場合は開始・終了共通。
 * @returns
 */
export default function createExtractor(
  delimiter: string | [string, string] = ['{{', '}}'],
): CreateExtractorResult {
  const [prefix, suffix] = Array.isArray(delimiter)
    ? delimiter
    : [delimiter, delimiter];

  const escapedPrefix = escapeRegExp(prefix);
  const escapedSuffix = escapeRegExp(suffix);

  // 最短一致 (.*?) を使用して、中身をキャプチャグループ ( ) で囲む
  const pattern = `${escapedPrefix}(.*?)${escapedSuffix}`;
  const regex = new RegExp(pattern, 'g');

  const extractor = (str: string, options: ExtractorOptions = {}): string[] => {
    const { keepDelimiters, trim, unique } = options;

    const matches = safeMatchAll(str, regex);

    if (matches.length === 0) {
      return [];
    }

    let results = matches.map((match) => {
      // - match[0]: 全体
      // - match[1]: 中身
      let token = keepDelimiters ? match[0] : match[1];
      return trim ? token.trim() : token;
    });

    if (unique) {
      results = Array.from(new Set(results));
    }

    return results;
  };

  extractor.prefix = prefix;
  extractor.suffix = suffix;
  return extractor;
}
