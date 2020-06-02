import { encode, decode, hash } from 'common/utils/crypto';

describe('encode then decode', () => {
  const value = 'some value';

  it('can decode the encoded value correctly', () => {
    expect(decode(encode(value))).toEqual(value);
  });
});

describe('encoding undefined', () => {
  it('returns undefined', () => {
    expect(encode(undefined)).toBeUndefined();
  });
});

describe('decoding undefined', () => {
  it('returns undefined', () => {
    expect(decode(undefined)).toBeUndefined();
  });
});

describe('decoding junk', () => {
  const junk = 'junk';

  it('returns the undecoded value', () => {
    expect(decode(junk)).toEqual(junk);
  });
});

describe('hash', () => {
  [
    ['<h1>some fantastic text or html</h1>', '4be5b32a74911c36'],
    ['', '821f63978df95511'],
    ['some other piece of text', 'ddffa40eb26f2651'],
    ['😀 and Unicode too!', '1f7bf049ada3371d']
  ].forEach(([input, expected]) => {
    const result = hash(input);

    it('returns the expected value', () => {
      expect(result).toEqual(expected);
    });

    it('returns a string of length 16', () => {
      expect(result).toHaveLength(16);
    });
  });
});
