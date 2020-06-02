import getPosterLink, { POSTER } from 'content/facebook/utils/post/pre2020/getPosterLink';

const querySelector = jest.fn();

const expected = 'this yay!';
let result;

beforeAll(() => {
  querySelector.mockReturnValue(expected);
  result = getPosterLink({ querySelector });
});

it('called querySelector with POSTER', () => {
  expect(querySelector).toHaveBeenCalledWith(POSTER);
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
