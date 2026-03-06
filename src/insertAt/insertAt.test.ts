import insertAt from './insertAt';

describe('insertAt', () => {
  describe('1要素', () => {
    test('先頭に追加', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 0, ['a']);
      expect(array).toEqual(['a', 0, 1, 2, 3, 4]);
    });

    test('中盤に追加', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 2, ['a']);
      expect(array).toEqual([0, 1, 'a', 2, 3, 4]);
    });

    test('末尾に追加', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 5, ['a']);
      expect(array).toEqual([0, 1, 2, 3, 4, 'a']);
    });

    test('先頭に追加(index=-1)', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, -1, ['a']);
      expect(array).toEqual(['a', 0, 1, 2, 3, 4]);
    });

    test('末尾に追加(index=要素数以上)', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 10, ['a']);
      expect(array).toEqual([0, 1, 2, 3, 4, 'a']);
    });
  });

  describe('複数要素', () => {
    test('先頭に追加', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 0, ['a', 'b', 'c']);
      expect(array).toEqual(['a', 'b', 'c', 0, 1, 2, 3, 4]);
    });

    test('中盤に追加', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 2, ['a', 'b', 'c']);
      expect(array).toEqual([0, 1, 'a', 'b', 'c', 2, 3, 4]);
    });

    test('末尾に追加', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 5, ['a', 'b', 'c']);
      expect(array).toEqual([0, 1, 2, 3, 4, 'a', 'b', 'c']);
    });

    test('先頭に追加(index=-1)', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, -1, ['a', 'b', 'c']);
      expect(array).toEqual(['a', 'b', 'c', 0, 1, 2, 3, 4]);
    });

    test('末尾に追加(index=要素数以上)', () => {
      const array: any[] = [0, 1, 2, 3, 4];
      insertAt(array, 10, ['a', 'b', 'c']);
      expect(array).toEqual([0, 1, 2, 3, 4, 'a', 'b', 'c']);
    });
  });
});
