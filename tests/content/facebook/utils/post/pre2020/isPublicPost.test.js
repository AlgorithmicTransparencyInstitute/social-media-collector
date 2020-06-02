import getSubtitleElement from 'content/facebook/utils/subtitle/getSubtitleElement';
import getSubtitleVisibilityElement from 'content/facebook/utils/subtitle/getSubtitleVisibilityElement';
import isSubtitleVisibilityElementPublic from 'content/facebook/utils/subtitle/isSubtitleVisibilityElementPublic';

import isPublicPost from 'content/facebook/utils/post/pre2020/isPublicPost';

jest.mock('content/facebook/utils/subtitle/getSubtitleElement');
jest.mock('content/facebook/utils/subtitle/getSubtitleVisibilityElement');
jest.mock('content/facebook/utils/subtitle/isSubtitleVisibilityElementPublic');

const element = 'something';

const cleanup = () => {
  getSubtitleElement.mockClear();
  getSubtitleVisibilityElement.mockClear();
  isSubtitleVisibilityElementPublic.mockClear();
};

let result;

describe('has a subtitle element', () => {
  const se = 'some subtitle element';

  beforeAll(() => {
    getSubtitleElement.mockReturnValue(se);
  });

  describe('has a subtitle visibility element', () => {
    const sve = 'something';

    beforeAll(() => {
      getSubtitleVisibilityElement.mockReturnValue(sve);
    });

    describe('subtitle is public', () => {
      beforeAll(() => {
        isSubtitleVisibilityElementPublic.mockReturnValue(true);
        result = isPublicPost(element);
      });

      afterAll(cleanup);

      it('returns true', () => {
        expect(result).toBe(true);
      });
    });

    describe('subtitle is not public', () => {
      beforeAll(() => {
        isSubtitleVisibilityElementPublic.mockReturnValue(false);
        result = isPublicPost(element);
      });

      afterAll(cleanup);

      it('returns false', () => {
        expect(result).toBe(false);
      });
    });
  });

  describe('does not have a subtitle visibility element', () => {
    beforeAll(() => {
      getSubtitleVisibilityElement.mockReturnValue();
      result = isPublicPost(element);
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
    result = isPublicPost(element);
  });

  afterAll(cleanup);

  it('returns false', () => {
    expect(result).toBe(false);
  });
});
