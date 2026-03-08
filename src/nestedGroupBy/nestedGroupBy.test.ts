import nestedGroupBy from './nestedGroupBy';

describe('nestedGroupBy', () => {
  const ITEM0 = { $id: 'ID0', field0: 0, field1: 4, field2: 0, field3: '!!' },
    ITEM1 = { $id: 'ID1', field0: 1, field1: 3, field2: 1, field3: '!!' },
    ITEM2A = { $id: 'ID2', field0: 21, field1: 21, field2: 0, field3: '!' },
    ITEM2B = { $id: 'ID2', field0: 22, field1: 22, field2: 0, field3: '!' },
    ITEM3 = { $id: 'ID3', field0: 3, field1: 1, field2: 1, field3: '!' },
    ITEM4 = { $id: 'ID4', field0: 4, field1: 0, field2: 0, field3: '!' };

  test('1項目', () => {
    const array = [ITEM0, ITEM1, ITEM2A, ITEM2B, ITEM3, ITEM4],
      result = nestedGroupBy(array, '$id');
    expect(result).toEqual({
      ID0: [ITEM0],
      ID1: [ITEM1],
      ID2: [ITEM2A, ITEM2B],
      ID3: [ITEM3],
      ID4: [ITEM4],
    });
  });

  test('複数項目', () => {
    const array = [ITEM0, ITEM1, ITEM2A, ITEM2B, ITEM3, ITEM4],
      result = nestedGroupBy(array, ['field3', '$id']);
    expect(result).toEqual({
      '!!': {
        ID0: [ITEM0],
        ID1: [ITEM1],
      },
      '!': {
        ID2: [ITEM2A, ITEM2B],
        ID3: [ITEM3],
        ID4: [ITEM4],
      },
    });
  });

  test('複数項目(flat)', () => {
    const array = [ITEM0, ITEM1, ITEM2A, ITEM2B, ITEM3, ITEM4],
      result = nestedGroupBy(array, ['field3', '$id'], { flat: true });
    expect(result).toEqual({
      '!!.ID0': [ITEM0],
      '!!.ID1': [ITEM1],
      '!.ID2': [ITEM2A, ITEM2B],
      '!.ID3': [ITEM3],
      '!.ID4': [ITEM4],
    });
  });

  test('複数項目(flat & 区切り文字="/")', () => {
    const array = [ITEM0, ITEM1, ITEM2A, ITEM2B, ITEM3, ITEM4],
      result = nestedGroupBy(array, ['field3', '$id'], {
        flat: true,
        keySeparator: '/',
      });
    expect(result).toEqual({
      '!!/ID0': [ITEM0],
      '!!/ID1': [ITEM1],
      '!/ID2': [ITEM2A, ITEM2B],
      '!/ID3': [ITEM3],
      '!/ID4': [ITEM4],
    });
  });
});
