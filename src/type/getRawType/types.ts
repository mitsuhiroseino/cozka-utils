/**
 * 主要な組み込みオブジェクトの型ラベルのUnion
 */
export type GetRawTypeReturn =
  | '[object String]'
  | '[object Number]'
  | '[object Boolean]'
  | '[object Symbol]'
  | '[object BigInt]'
  | '[object Function]'
  | '[object Array]'
  | '[object Date]'
  | '[object RegExp]'
  | '[object Error]'
  | '[object Promise]'
  | '[object Map]'
  | '[object Set]'
  | '[object WeakMap]'
  | '[object WeakSet]'
  | '[object Object]'
  | '[object Arguments]'
  | '[object Null]'
  | '[object Undefined]'
  | `[object ${string}]`;
