import createExtractor from './createExtractor';

describe('createExtractor', () => {
  describe('default', () => {
    test('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}{{ABC}}',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    test('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }${ABC}',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    test('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom(
        '[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ][ABC]',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    test('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom(
        '|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ ||ABC|',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
    test('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom(
        '★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★★ABC★',
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ', 'ABC']);
    });
  });

  describe('keepDelimiters=true', () => {
    test('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}',
        { keepDelimiters: true },
      );
      expect(result).toEqual(['{{ABC}}', '{{ HIJ}}', '{{XYZ }}']);
    });
    test('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }',
        { keepDelimiters: true },
      );
      expect(result).toEqual(['${ABC}', '${ HIJ}', '${XYZ }']);
    });
    test('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom('[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ]', {
        keepDelimiters: true,
      });
      expect(result).toEqual(['[ABC]', '[ HIJ]', '[XYZ ]']);
    });
    test('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom('|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ |', {
        keepDelimiters: true,
      });
      expect(result).toEqual(['|ABC|', '| HIJ|', '|XYZ |']);
    });
    test('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom('★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★', {
        keepDelimiters: true,
      });
      expect(result).toEqual(['★ABC★', '★ HIJ★', '★XYZ ★']);
    });
  });

  describe('trim=true', () => {
    test('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}',
        { trim: true },
      );
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    test('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }',
        { trim: true },
      );
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    test('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom('[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ]', {
        trim: true,
      });
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    test('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom('|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ |', {
        trim: true,
      });
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
    test('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom('★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★', {
        trim: true,
      });
      expect(result).toEqual(['ABC', 'HIJ', 'XYZ']);
    });
  });

  describe('unique=true', () => {
    test('prefix="{{", suffix="}}"', () => {
      const extractTokensCustom = createExtractor(['{{', '}}']);
      const result = extractTokensCustom(
        '{{ABC}}DEFG{{ HIJ}}KL{MNO}PQRSTUVW{{XYZ }}{{ABC}}',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    test('prefix="${", suffix="}"', () => {
      const extractTokensCustom = createExtractor(['${', '}']);
      const result = extractTokensCustom(
        '${ABC}DEFG${ HIJ}KL{MNO}PQRSTUVW${XYZ }${ABC}',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    test('prefix="[", suffix="]"', () => {
      const extractTokensCustom = createExtractor(['[', ']']);
      const result = extractTokensCustom(
        '[ABC]DEFG[ HIJ]KLMNOPQRSTUVW[XYZ ][ABC]',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    test('prefix="|", suffix="|"', () => {
      const extractTokensCustom = createExtractor('|');
      const result = extractTokensCustom(
        '|ABC|DEFG| HIJ|KLMNOPQRSTUVW|XYZ ||ABC|',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
    test('prefix="★", suffix="★"', () => {
      const extractTokensCustom = createExtractor('★');
      const result = extractTokensCustom(
        '★ABC★DEFG★ HIJ★KLMNOPQRSTUVW★XYZ ★★ABC★',
        { unique: true },
      );
      expect(result).toEqual(['ABC', ' HIJ', 'XYZ ']);
    });
  });
});
