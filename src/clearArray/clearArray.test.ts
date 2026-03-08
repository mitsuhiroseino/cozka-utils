import clearArray from './clearArray';

describe('clearArray', () => {
  test('全要素削除', () => {
    const array = [0, 1, 2, 3, 4];
    const result = clearArray(array);
    expect(result).toEqual([]);
  });
});
