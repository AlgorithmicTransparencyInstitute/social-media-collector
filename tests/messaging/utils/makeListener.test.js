import makeListener from 'messaging/utils/makeListener';
import validSourceOrTarget from 'messaging/utils/validSourceOrTarget';

jest.mock('messaging/utils/validSourceOrTarget');
validSourceOrTarget.mockReturnValue(true);

const source = 'CS';
const target = 'BS';
const key = 'a key';
const fn = () => {};

describe('given a key and function', () => {
  const expected = { source, target, key, fn };

  it('returns the expected value', () => {
    expect(makeListener(source, target, key, fn)).toEqual(expected);
  });
});

describe('given a bad function', () => {
  it('returns undefined', () => {
    expect(makeListener(source, target, key, 'not a function')).toBeUndefined();
  });
});

describe('given no key', () => {
  it('returns undefined', () => {
    expect(makeListener(source, target, undefined, fn)).toBeUndefined();
  });
});
