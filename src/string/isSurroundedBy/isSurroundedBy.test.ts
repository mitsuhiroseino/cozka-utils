import isSurroundedBy from './isSurroundedBy';

describe('isSurroundedBy', () => {
  describe('prefix === suffix', () => {
    test('true', () => {
      const result = isSurroundedBy('"abc"', '"');
      expect(result).toBe(true);
    });
    test('false', () => {
      const result = isSurroundedBy('"abc"', "'");
      expect(result).toBe(false);
    });
  });
  describe('prefix !== suffix', () => {
    test('true', () => {
      const result = isSurroundedBy('{abc}', '{', '}');
      expect(result).toBe(true);
    });
    test('false', () => {
      const result = isSurroundedBy('[abc]', '{', '}');
      expect(result).toBe(false);
    });
  });
});
