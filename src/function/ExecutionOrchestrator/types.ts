import { CapacityStrategyOptions } from './strategies/CapacityStrategy';
import { CapacityStrategyType } from './strategies/CapacityStrategy/constants';
import { DebounceStrategyOptions } from './strategies/DebounceStrategy';
import { DebounceStrategyType } from './strategies/DebounceStrategy/constants';
import { ExclusiveStrategyOptions } from './strategies/ExclusiveStrategy';
import { ExclusiveStrategyType } from './strategies/ExclusiveStrategy/constants';
import { ParallelStrategyOptions } from './strategies/ParallelStrategy';
import { ParallelStrategyType } from './strategies/ParallelStrategy/constants';
import { SerialStrategyOptions } from './strategies/SerialStrategy';
import { SerialStrategyType } from './strategies/SerialStrategy/constants';
import { ThrottleStrategyOptions } from './strategies/ThrottleStrategy';
import { ThrottleStrategyType } from './strategies/ThrottleStrategy/constants';

/**
 * ストラテジー種別とオプションの対応表
 */
export type StrategyOptionsMap = {
  [SerialStrategyType]: SerialStrategyOptions;
  [ParallelStrategyType]: ParallelStrategyOptions;
  [ExclusiveStrategyType]: ExclusiveStrategyOptions;
  [CapacityStrategyType]: CapacityStrategyOptions;
  [DebounceStrategyType]: DebounceStrategyOptions;
  [ThrottleStrategyType]: ThrottleStrategyOptions;
};

/**
 * ストラテジー種別\
 * 各ストラテジーのユースケースは下記の通り
 *
 * - 'serial':【直列実行】データベースへの逐次書き込み、チャットメッセージの送信順序維持
 * - 'parallel':【並列実行】大量ファイルのアップロード制限、APIへの同時リクエスト数制限
 * - 'exclusive':【単一排他】二重送信防止、ボタン連打による重複処理の回避
 * - 'capacity':【キャパシティ制限】サーバー高負荷時のリクエスト間引き、リアルタイム描画の計算制限
 * - 'debounce':【デバウンス（遅延確定）】検索窓のインクリメンタルサーチ、ウィンドウのリサイズイベント
 * - 'throttle':【スロットル（間引き）】スクロールやマウス移動に伴う座標計算の負荷軽減
 */
export type StrategyType = keyof StrategyOptionsMap;

/**
 * ストラテジーオプション
 */
export type FunctionStrategyOptions<T extends StrategyType> =
  StrategyOptionsMap[T];
