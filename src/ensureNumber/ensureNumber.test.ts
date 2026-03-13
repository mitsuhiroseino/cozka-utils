import ensureNumber from './ensureNumber';

describe('ensureNumber', () => {
  test('数値', () => {
    const result = ensureNumber(123);
    expect(result).toBe(123);
  });

  test('null', () => {
    const result = ensureNumber(null);
    expect(result).toBe(0);
  });

  test('undefined', () => {
    const result = ensureNumber(undefined);
    expect(result).toBe(0);
  });

  test('空文字', () => {
    const result = ensureNumber('');
    expect(result).toBe(0);
  });

  test('文字列', () => {
    const result = ensureNumber('ABC');
    expect(result).toBe(0);
  });

  test('数字', () => {
    const result = ensureNumber('123');
    expect(result).toBe(123);
  });

  test('真偽値(false)', () => {
    const result = ensureNumber(false);
    expect(result).toBe(0);
  });

  test('真偽値(true)', () => {
    const result = ensureNumber(true);
    expect(result).toBe(0);
  });

  test('日時', () => {
    const result = ensureNumber(new Date(1999, 0, 2, 3, 40, 56, 789));
    expect(result).toBe(0);
  });

  test('オブジェクト', () => {
    const result = ensureNumber({});
    expect(result).toBe(0);
  });

  test('配列', () => {
    const result = ensureNumber(['a', 'b', 'c']);
    expect(result).toBe(0);
  });
});
