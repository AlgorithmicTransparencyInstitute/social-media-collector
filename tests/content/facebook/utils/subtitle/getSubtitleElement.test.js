import getSubtitleElement from 'content/facebook/utils/subtitle/getSubtitleElement';

const selectors = [
  ":scope [data-testid='story-subtitle']",
  ":scope [data-testid='story-subtilte']",
  ":scope [data-testid='story-label']",
  ":scope [data-testid='fb-testid_feed-subtilte']"
].join(', ');

const querySelector = jest.fn();

const element = { querySelector };
const subtitleElement = 'some subtitle element';

let result;

beforeAll(() => {
  querySelector.mockReturnValue(subtitleElement);
  result = getSubtitleElement(element);
});

it('called element.querySelector with the selectors', () => {
  expect(querySelector).toHaveBeenCalledWith(selectors);
});

it('returned the expected result', () => {
  expect(result).toEqual(subtitleElement);
});
