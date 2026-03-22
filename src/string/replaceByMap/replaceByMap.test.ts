import replaceByMap from './replaceByMap';

describe('replaceByMap', () => {
  test('置換', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['ABC', '!!!'],
        ['M', '?'],
        ['YZ', '@@'],
      ]),
    );
    expect(result).toBe('!!!DEFGHIJKL?NOPQRSTUVWX@@');
  });
  test('sourceの文字列が長い方が有効', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['B', '_'],
        ['ABC', '!!!'],
        ['M', '?'],
        ['YZ', '@@'],
      ]),
    );
    expect(result).toBe('!!!DEFGHIJKL?NOPQRSTUVWX@@');
  });
  test('長さが変わる置換', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['ABC', '!'],
        ['M', '???'],
        ['YZ', ''],
      ]),
    );
    expect(result).toBe('!DEFGHIJKL???NOPQRSTUVWX');
  });
  test('置換された文字列の置換はしない', () => {
    const result = replaceByMap(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      new Map([
        ['ABC', 'MYZ'],
        ['M', '?'],
        ['YZ', '@@'],
      ]),
    );
    expect(result).toBe('MYZDEFGHIJKL?NOPQRSTUVWX@@');
  });
});
