import makeFetcher from 'content/facebook/utils/makeFetcher';

const cFetch = jest.fn();
const ffFetch = jest.fn();

describe('chrome', () => {
  const cWindow = { fetch: cFetch };

  it('returns fetch', () => {
    expect(makeFetcher(cWindow)).toEqual(cFetch);
  });
});

describe('firefox', () => {
  const ffWindow = { content: { fetch: ffFetch } };

  it('returns fetch', () => {
    expect(makeFetcher(ffWindow)).toEqual(ffFetch);
  });
});

describe('default', () => {
  it('returns fetch', () => {
    expect(makeFetcher()).toEqual(fetch);
  });
});
