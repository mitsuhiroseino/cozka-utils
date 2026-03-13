export type ThrottleOptions = {
  /**
   * 実行するタイミング
   */
  triggerAt?: 'end' | 'start' | 'both';
};

export interface ThrottleResult<ARGS extends unknown[]> {
  (...args: ARGS): void;
  cancel(): void;
  flush(): void;
  isIdle(): boolean;
}
