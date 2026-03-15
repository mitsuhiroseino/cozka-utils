import isPresent from './isPresent';

describe('isPresent', () => {
  test('undefined', () => {
    const result = isPresent(undefined);
    expect(result).toBe(false);
  });

  test('null', () => {
    const result = isPresent(null);
    expect(result).toBe(false);
  });

  test('空文字列', () => {
    const result = isPresent('');
    expect(result).toBe(true);
  });
});
