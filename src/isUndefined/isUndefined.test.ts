import isUndefined from './isUndefined';

describe('isUndefined', () => {
  test('undefined', () => {
    const result = isUndefined(undefined);
    expect(result).toBe(true);
  });

  test('null', () => {
    const result = isUndefined(null);
    expect(result).toBe(false);
  });
});
