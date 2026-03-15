import isNullish from './isNullish';

describe('isNullish', () => {
  test('undefined', () => {
    const result = isNullish(undefined);
    expect(result).toBe(true);
  });

  test('null', () => {
    const result = isNullish(null);
    expect(result).toBe(true);
  });

  test('空文字列', () => {
    const result = isNullish('');
    expect(result).toBe(false);
  });
});
