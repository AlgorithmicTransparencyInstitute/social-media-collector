import getPosterLink from 'content/facebook/utils/post/pre2020/getPosterLink';

import getPosterData from 'content/facebook/utils/post/pre2020/getPosterData';

jest.mock('content/facebook/utils/post/pre2020/getPosterLink');

const getAttribute = jest.fn();

const element = 'some element';
let result;

describe('when there is a link', () => {
  const url = 'https://www.some-test-url.tes';

  beforeAll(() => {
    getAttribute.mockReturnValue(url);
  });

  describe('when the pathname ends in a slash', () => {
    const pathname = '/something/';
    const expected = { url, isUserPost: false, postedBy: 'something' };

    const link = {
      getAttribute,
      pathname
    };

    beforeAll(() => {
      getPosterLink.mockReturnValue(link);
      result = getPosterData(element);
    });

    it('returns the expected result', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('when the pathname does not end in a slash', () => {
    const pathname = '/something';
    const expected = { url, isUserPost: true, postedBy: 'something' };

    const link = {
      getAttribute,
      pathname
    };

    beforeAll(() => {
      getPosterLink.mockReturnValue(link);
      result = getPosterData(element);
    });

    it('returns the expected result', () => {
      expect(result).toEqual(expected);
    });
  });
});

describe('when there is no link', () => {
  beforeAll(() => {
    getPosterLink.mockReturnValue(null);
    result = getPosterData(element);
  });

  it('returns an empty object', () => {
    expect(result).toEqual({});
  });
});
