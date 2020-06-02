import matchingListener from 'messaging/utils/matchingListener';

const source = 'some source';
const key = 'some key';
const fn = () => {};

const listener = { source, key, fn };

const matcher = matchingListener(listener);

describe('when the source does not match', () => {
  const otherListener = {
    ...listener,
    source: 'other source'
  };

  it('returns false', () => {
    expect(matcher(otherListener)).toBe(false);
  });
});

describe('when the key does not match', () => {
  const otherListener = {
    ...listener,
    key: 'other key'
  };

  it('returns false', () => {
    expect(matcher(otherListener)).toBe(false);
  });
});

describe('when the source and key match but the function is different', () => {
  const otherListener = {
    ...listener,
    fn: () => {}
  };

  it('returns true', () => {
    expect(matcher(otherListener)).toBe(true);
  });
});
