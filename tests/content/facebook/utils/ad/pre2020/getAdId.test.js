import getAdId from 'content/facebook/utils/ad/pre2020/getAdId';

describe('when there is an url with an id', () => {
  const url = '/bla/?id=12345&';

  it('returns the id', () => {
    expect(getAdId(url)).toEqual('12345');
  });
});

describe('when there is no url with an id', () => {
  const url = 'https://www.facebook.com/whatever';

  it('returns null', () => {
    expect(getAdId(url)).toBeNull();
  });
});

describe('when there is url', () => {
  it('returns null', () => {
    expect(getAdId()).toBeNull();
  });
});
