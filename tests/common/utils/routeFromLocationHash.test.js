import routeFromLocationHash from 'common/utils/routeFromLocationHash';

describe('when there is a hash', () => {
  const expected = 'terms';
  const hash = `#${expected}`;

  it('returns the expected result', () => {
    expect(routeFromLocationHash(hash)).toEqual(expected);
  });
});

describe('when there is no hash', () => {
  it('returns undefined', () => {
    expect(routeFromLocationHash(null)).toBeUndefined();
  });
});
