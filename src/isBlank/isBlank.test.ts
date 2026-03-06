import isBlank from './isBlank';

describe('isBlank', () => {
  test('undefined', () => {
    const result = isBlank(undefined);
    expect(result).toBe(true);
  });

  test('null', () => {
    const result = isBlank(null);
    expect(result).toBe(true);
  });

  describe("trimType==='none'", () => {
    test('空文字', () => {
      const result = isBlank('', { trimType: 'none' });
      expect(result).toBe(true);
    });

    test('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'none' });
      expect(result).toBe(false);
    });

    test('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'none' });
      expect(result).toBe(false);
    });

    test('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'none' });
      expect(result).toBe(false);
    });

    test('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'none' });
      expect(result).toBe(false);
    });

    test('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'none' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='half'", () => {
    test('空文字', () => {
      const result = isBlank('', { trimType: 'half' });
      expect(result).toBe(true);
    });

    test('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'half' });
      expect(result).toBe(true);
    });

    test('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'half' });
      expect(result).toBe(false);
    });

    test('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'half' });
      expect(result).toBe(false);
    });

    test('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'half' });
      expect(result).toBe(false);
    });

    test('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'half' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='full'", () => {
    test('空文字', () => {
      const result = isBlank('', { trimType: 'full' });
      expect(result).toBe(true);
    });

    test('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'full' });
      expect(result).toBe(false);
    });

    test('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'full' });
      expect(result).toBe(true);
    });

    test('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'full' });
      expect(result).toBe(false);
    });

    test('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'full' });
      expect(result).toBe(false);
    });

    test('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'full' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='both'", () => {
    test('空文字', () => {
      const result = isBlank('', { trimType: 'both' });
      expect(result).toBe(true);
    });

    test('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'both' });
      expect(result).toBe(true);
    });

    test('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'both' });
      expect(result).toBe(true);
    });

    test('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'both' });
      expect(result).toBe(true);
    });

    test('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'both' });
      expect(result).toBe(false);
    });

    test('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'both' });
      expect(result).toBe(false);
    });
  });

  describe("trimType==='all'", () => {
    test('空文字', () => {
      const result = isBlank('', { trimType: 'all' });
      expect(result).toBe(true);
    });

    test('半角スペースのみ', () => {
      const result = isBlank('   ', { trimType: 'all' });
      expect(result).toBe(true);
    });

    test('全角スペースのみ', () => {
      const result = isBlank('　　', { trimType: 'all' });
      expect(result).toBe(true);
    });

    test('半角・全角スペースのみ', () => {
      const result = isBlank(' 　', { trimType: 'all' });
      expect(result).toBe(true);
    });

    test('半角・全角スペース・タブ・改行のみ', () => {
      const result = isBlank(' \t　\n', { trimType: 'all' });
      expect(result).toBe(true);
    });

    test('スペース以外の文字を含む', () => {
      const result = isBlank('abc', { trimType: 'all' });
      expect(result).toBe(false);
    });
  });
});
