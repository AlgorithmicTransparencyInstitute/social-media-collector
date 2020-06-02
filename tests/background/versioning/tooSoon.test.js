import tooSoon from 'background/versioning/tooSoon';

describe('when it is too soon', () => {
  const date = new Date().getTime();

  it('returns true', () => {
    expect(tooSoon(date)).toBe(true);
  });
});

describe('when it is not too soon', () => {
  const target = new Date().getTime();
  const date = target - 1000 * 60 * 60 * 24 - 1000;

  it('returns false', () => {
    expect(tooSoon(date, target)).toBe(false);
  });
});

describe('when is too soon anyway?', () => {
  const date = new Date().getTime();
  const target = date + 1000;

  it('returns true', () => {
    expect(tooSoon(date, target, 2000)).toBe(true);
  });
});

describe('when nothing is supplied', () => {
  it('returns false', () => {
    expect(tooSoon()).toBe(false);
  });
});
