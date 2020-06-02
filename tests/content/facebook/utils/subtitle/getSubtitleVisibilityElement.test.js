import getSubtitleVisibilityElement from 'content/facebook/utils/subtitle/getSubtitleVisibilityElement';

const querySelector = jest.fn();

const element = { querySelector };
const subtitleElement = 'some subtitle element';

let result;

beforeAll(() => {
  querySelector
    .mockReturnValueOnce()
    .mockReturnValueOnce()
    .mockReturnValueOnce(subtitleElement);
  result = getSubtitleVisibilityElement(element);
});

it('called element.querySelector with the first selector', () => {
  expect(querySelector).toHaveBeenCalledWith(':scope a.fbPrivacyAudienceIndicator');
});

it('called element.querySelector with the second selector', () => {
  expect(querySelector).toHaveBeenCalledWith(':scope a.fbStreamPrivacy');
});

it('called element.querySelector with the third selector', () => {
  expect(querySelector).toHaveBeenCalledWith(':scope div[data-tooltip-content]');
});

it('returned the expected result', () => {
  expect(result).toEqual(subtitleElement);
});
