import rotateArray from './rotateArray';

describe('rotateArray', () => {
  test('default(1件)', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array);
    expect(result).toEqual([1, 2, 3, 4, 0]);
  });
  test('複数件', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array, { count: 3 });
    expect(result).toEqual([3, 4, 0, 1, 2]);
  });
  test('0件', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array, { count: 0 });
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
  test('配列の要素数以上', () => {
    const array = [0, 1, 2, 3, 4],
      result = rotateArray(array, { count: 8 });
    expect(result).toEqual([3, 4, 0, 1, 2]);
  });
});
