import isPublicPost, { PUBLIC_ICON } from 'content/facebook/utils/post/post2020/isPublicPost';

const querySelector = jest.fn(() => 'something');

let result;

beforeAll(() => {
  result = isPublicPost({ querySelector });
});

it('returned true', () => {
  expect(result).toEqual(true);
});

it('called querySelector with the correct selector', () => {
  expect(querySelector).toHaveBeenCalledWith(PUBLIC_ICON);
});
