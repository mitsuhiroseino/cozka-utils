import lowerFirst from './lowerFirst';

describe('lowerFirst', () => {
  test('先頭小文字', () => {
    const result = lowerFirst('abc');
    expect(result).toBe('abc');
  });
  test('先頭大文字', () => {
    const result = lowerFirst('Abc');
    expect(result).toBe('abc');
  });
  test('1文字', () => {
    const result = lowerFirst('A');
    expect(result).toBe('a');
  });
  test('空文字', () => {
    const result = lowerFirst('');
    expect(result).toBe('');
  });
  test('null', () => {
    const result = lowerFirst(null as any);
    expect(result).toBe(null);
  });
});
