const SEARCH_REGEXP = /[-.*+?^${}()|\[\]\\]/g;

/**
 * 正規表現のリテラル部分を文字列で記述する際に必要なエスケープ。\
 * RegExpのコンストラクターに渡せる形式
 */
export default function escapeRegExp(target: string) {
  return target.replace(SEARCH_REGEXP, '\\$&');
}
