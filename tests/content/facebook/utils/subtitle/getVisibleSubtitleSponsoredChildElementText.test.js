import getVisibleSubtitleSponsoredChildElementText from 'content/facebook/utils/subtitle/getVisibleSubtitleSponsoredChildElementText';

let result;

describe('there is text', () => {
  const textContent = 'some text';
  const element = { textContent };

  beforeAll(() => {
    result = getVisibleSubtitleSponsoredChildElementText(element);
  });

  it('returned the text', () => {
    expect(result).toEqual(textContent);
  });
});

describe('there is empty text', () => {
  const getAttribute = jest.fn();
  const textContent = '';
  const element = { textContent, getAttribute };

  describe('data is missing', () => {
    beforeAll(() => {
      getAttribute.mockReturnValue();
      result = getVisibleSubtitleSponsoredChildElementText(element);
    });

    it('returns ""', () => {
      expect(result).toEqual('');
    });
  });

  describe('data has no length', () => {
    beforeAll(() => {
      getAttribute.mockReturnValue('');
      result = getVisibleSubtitleSponsoredChildElementText(element);
    });

    it('returns ""', () => {
      expect(result).toEqual('');
    });
  });
});

describe('there is no text but some data', () => {
  const getAttribute = jest.fn();
  const element = { getAttribute };
  const data = 'some data';

  beforeAll(() => {
    getAttribute.mockReturnValue(data);
    result = getVisibleSubtitleSponsoredChildElementText(element);
  });

  it('returns the data', () => {
    expect(result).toEqual(data);
  });
});
