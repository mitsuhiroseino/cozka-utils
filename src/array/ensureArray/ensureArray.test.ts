import ensureArray from './ensureArray';

describe('ensureArray', () => {
  test('null', () => {
    const result = ensureArray(null);
    expect(result).toEqual([]);
  });

  test('undefined', () => {
    const result = ensureArray(undefined);
    expect(result).toEqual([]);
  });

  test('空文字', () => {
    const result = ensureArray('');
    expect(result).toEqual(['']);
  });

  test('0', () => {
    const result = ensureArray(0);
    expect(result).toEqual([0]);
  });

  test('false', () => {
    const result = ensureArray(false);
    expect(result).toEqual([false]);
  });

  test('空配列', () => {
    const array: unknown[] = [];
    const result = ensureArray(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
  });

  test('配列', () => {
    const array = [0, 1, 2];
    const result = ensureArray(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
  });
});
