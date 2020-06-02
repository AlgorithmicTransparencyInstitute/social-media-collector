import getSubtitleElement from 'content/facebook/utils/subtitle/getSubtitleElement';
import getSubtitleSponsoredChildElements from 'content/facebook/utils/subtitle/getSubtitleSponsoredChildElements';
import isVisibleSubtitleSponsoredChildElement from 'content/facebook/utils/subtitle/isVisibleSubtitleSponsoredChildElement';
import getVisibleSubtitleSponsoredChildElementText from 'content/facebook/utils/subtitle/getVisibleSubtitleSponsoredChildElementText';
import hasSubsequence from 'content/facebook/utils/visible/hasSubsequence';

import isSponsoredPost from 'content/facebook/utils/post/pre2020/isSponsoredPost';

jest.mock('content/facebook/utils/subtitle/getSubtitleElement');
jest.mock('content/facebook/utils/subtitle/getSubtitleSponsoredChildElements');
jest.mock('content/facebook/utils/subtitle/isVisibleSubtitleSponsoredChildElement');
jest.mock('content/facebook/utils/subtitle/getVisibleSubtitleSponsoredChildElementText');
jest.mock('content/facebook/utils/visible/hasSubsequence');

const element = 'something';

const cleanup = () => {
  getSubtitleElement.mockClear();
  getSubtitleSponsoredChildElements.mockClear();
  isVisibleSubtitleSponsoredChildElement.mockClear();
  getVisibleSubtitleSponsoredChildElementText.mockClear();
  hasSubsequence.mockClear();
};

let result;

describe('has a subtitle element', () => {
  const se = 'some subtitle element';

  beforeAll(() => {
    getSubtitleElement.mockReturnValue(se);
  });

  describe('has sponsored child elements', () => {
    const children = ['some', 'children'];

    beforeAll(() => {
      getSubtitleSponsoredChildElements.mockReturnValue(children);
      isVisibleSubtitleSponsoredChildElement.mockImplementation(() => true);
      getVisibleSubtitleSponsoredChildElementText.mockImplementation(p => p);
      hasSubsequence.mockReturnValue(true);
      result = isSponsoredPost(element);
    });

    afterAll(cleanup);

    it('returns true', () => {
      expect(result).toBe(true);
    });
  });

  describe('has no sponsored child elements', () => {
    beforeAll(() => {
      getSubtitleSponsoredChildElements.mockReturnValue();
      result = isSponsoredPost(element);
    });

    afterAll(cleanup);

    it('returns false', () => {
      expect(result).toBe(false);
    });
  });
});

describe('does not have a subtitle element', () => {
  beforeAll(() => {
    getSubtitleElement.mockReturnValue(undefined);
    result = isSponsoredPost(element);
  });

  afterAll(cleanup);

  it('returns false', () => {
    expect(result).toBe(false);
  });
});
