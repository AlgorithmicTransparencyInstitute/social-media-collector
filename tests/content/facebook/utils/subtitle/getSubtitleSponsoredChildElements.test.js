import getSubtitleSponsoredChildElements from 'content/facebook/utils/subtitle/getSubtitleSponsoredChildElements';

const querySelector = jest.fn();

const element = { querySelector };

const cleanup = () => {
  querySelector.mockReset();
};

let result;

describe('when there are no links', () => {
  beforeAll(() => {
    querySelector.mockReturnValue();
    result = getSubtitleSponsoredChildElements(element);
  });

  afterAll(cleanup);

  it('called querySelector with the correct selector', () => {
    expect(querySelector).toHaveBeenCalledWith(':scope a');
  });

  it('returned null', () => {
    expect(result).toBeNull();
  });
});

describe('when first link has children', () => {
  const querySelectorAll = jest.fn();
  const firstLink = { children: ['something'], querySelectorAll };
  const elements = ['some', 'elements'];

  beforeAll(() => {
    querySelectorAll.mockReturnValue(elements);
    querySelector.mockReturnValue(firstLink);
    result = getSubtitleSponsoredChildElements(element);
  });

  afterAll(cleanup);

  it('called querySelector with the correct selector', () => {
    expect(querySelector).toHaveBeenCalledWith(':scope a');
  });

  it('called querySelectorAll with the correct selector', () => {
    expect(querySelectorAll).toHaveBeenCalledWith(':scope span');
  });

  it('returned the elements', () => {
    expect(result).toEqual(elements);
  });
});

describe('when first link has no children', () => {
  const firstLink = { children: [] };

  beforeAll(() => {
    querySelector.mockReturnValue(firstLink);
    result = getSubtitleSponsoredChildElements(element);
  });

  afterAll(cleanup);

  it('called querySelector with the correct selector', () => {
    expect(querySelector).toHaveBeenCalledWith(':scope a');
  });

  it('returned the first link', () => {
    expect(result).toEqual([firstLink]);
  });
});
