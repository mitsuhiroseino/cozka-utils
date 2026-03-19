import upperFirst from './upperFirst';

describe('upperFirst', () => {
  test('先頭小文字', () => {
    const result = upperFirst('abc');
    expect(result).toBe('Abc');
  });
  test('先頭大文字', () => {
    const result = upperFirst('Abc');
    expect(result).toBe('Abc');
  });
  test('1文字', () => {
    const result = upperFirst('a');
    expect(result).toBe('A');
  });
  test('空文字', () => {
    const result = upperFirst('');
    expect(result).toBe('');
  });
  test('null', () => {
    const result = upperFirst(null as any);
    expect(result).toBe(null);
  });
});
