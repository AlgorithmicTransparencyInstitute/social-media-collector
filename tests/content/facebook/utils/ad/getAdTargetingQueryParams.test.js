import grabVariable from 'content/facebook/utils/inject/grabVariable';
import getAdTargetingQueryParams from 'content/facebook/utils/ad/getAdTargetingQueryParams';

jest.mock('content/facebook/utils/inject/grabVariable');

const url = 'https://some-url.tes';
const expected = 'some-resut';

let result;

beforeAll(() => {
  grabVariable.mockReturnValue(expected);
  result = getAdTargetingQueryParams(url);
});

it('called grabVariable', () => {
  expect(grabVariable).toHaveBeenCalledWith(expect.any(Function), [url]);
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
