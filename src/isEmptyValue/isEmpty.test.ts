import isEmptyValue from './isEmptyValue';

describe('isEmptyValue', () => {
  test('undefined', () => {
    const result = isEmptyValue(undefined);
    expect(result).toBe(true);
  });

  test('null', () => {
    const result = isEmptyValue(null);
    expect(result).toBe(true);
  });

  test('空文字', () => {
    const result = isEmptyValue('');
    expect(result).toBe(true);
  });

  test('空配列', () => {
    const result = isEmptyValue([]);
    expect(result).toBe(true);
  });

  test('非空配列', () => {
    const result = isEmptyValue([1, 2, 3]);
    expect(result).toBe(false);
  });
});
