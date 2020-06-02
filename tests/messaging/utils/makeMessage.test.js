import makeMessage from 'messaging/utils/makeMessage';
import validSourceOrTarget from 'messaging/utils/validSourceOrTarget';

jest.mock('messaging/utils/validSourceOrTarget');
validSourceOrTarget.mockReturnValue(true);

const source = 'CS';
const target = 'BS';
const key = 'a key';
const data = 'some data';
const options = {};

describe('given good values', () => {
  const expected = { source, target, key, data, options };

  describe('without options', () => {
    it('returns the expected value', () => {
      expect(makeMessage(source, target, key, data)).toEqual(expected);
    });
  });

  describe('with options', () => {
    it('returns the expected value', () => {
      expect(makeMessage(source, target, key, data, options)).toEqual(expected);
    });
  });
});

describe('given no key', () => {
  it('returns undefined', () => {
    expect(makeMessage(source, target, undefined, data)).toBeUndefined();
  });
});

describe('given no data', () => {
  it('returns undefined', () => {
    expect(makeMessage(source, target, key)).toBeUndefined();
  });
});
