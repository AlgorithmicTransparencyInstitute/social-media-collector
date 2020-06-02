import getAdTargetingAjaxUrl from 'content/facebook/utils/ad/pre2020/getAdTargetingAjaxUrl';

const link = 'some link';

const querySelector = jest.fn();
const getAttribute = jest.fn();

const element = {
  querySelector,
  getAttribute
};

const cleanup = () => {
  querySelector.mockClear();
  getAttribute.mockClear();
};

let result;

beforeAll(() => {
  querySelector.mockReturnValue(element);
  getAttribute.mockReturnValue(link);
});

describe('when element is null', () => {
  beforeAll(() => {
    result = getAdTargetingAjaxUrl(null);
  });

  afterAll(cleanup);

  it('returns null', () => {
    expect(result).toBeNull();
  });
});

describe('when element exists', () => {
  beforeAll(() => {
    querySelector.mockReturnValue(element);
    getAttribute.mockReturnValue(link);
    result = getAdTargetingAjaxUrl(element);
  });

  afterAll(cleanup);

  it('called element.querySelector with the correct value', () => {
    expect(querySelector).toHaveBeenCalledWith(':scope a');
  });

  it('called element.getAttribute with the correct value', () => {
    expect(getAttribute).toHaveBeenCalledWith('ajaxify');
  });

  it('returns the correct value', () => {
    expect(result).toEqual(link);
  });
});
