import _createContainer from '../_internal/_createContainer';
import _parsePath from '../_internal/_parsePath';

/**
 * オブジェクトを更新して新しいオブジェクトを返します（非破壊的変更）。
 * @param obj 更新対象のオブジェクト
 * @param path 更新するプロパティのパス（例: 'a.b.0' または ['a', 'b', 0]）
 * @param value 設定する値
 * @returns 更新された新しいオブジェクト
 */
export default function setImmutable<T extends object>(
  obj: T,
  path: string | PropertyKey[],
  value: any,
): T {
  const segments = _parsePath(path);

  const setter = (current: any, index: number): any => {
    if (index === segments.length) {
      return value;
    }

    const key = segments[index];
    // 既存の値を保持、なければ新しいコンテナを作成
    const target =
      current && typeof current === 'object' && key in current
        ? current[key]
        : _createContainer(segments[index + 1]);

    const updatedValue = setter(target, index + 1);

    // 配列かオブジェクトかでコピー処理を分岐
    if (Array.isArray(current) || typeof key === 'number') {
      const clone = Array.isArray(current) ? [...current] : [];
      clone[key as any] = updatedValue;
      return clone;
    } else {
      return { ...current, [key]: updatedValue };
    }
  };

  return setter(obj, 0);
}
