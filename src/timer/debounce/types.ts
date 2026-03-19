export type DebounceOptions = {
  /**
   * 実行するタイミング
   */
  triggerAt?: 'end' | 'start' | 'both';
};

export interface DebounceResult<ARGS extends unknown[]> {
  (...args: ARGS): void;
  cancel(): void;
  flush(): void;
  isIdle(): boolean;
}
