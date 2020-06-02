import hasNestedSubsequence from 'content/facebook/utils/visible/hasNestedSubsequence';

import hasSubsequence from 'content/facebook/utils/visible/hasSubsequence';

jest.mock('content/facebook/utils/visible/hasNestedSubsequence');

const source = 'a-source';
const target = 'the-target';

beforeAll(() => {
  hasSubsequence(source, target);
});

it('called hasNestedSubsequence with the correct parameters', () => {
  expect(hasNestedSubsequence).toHaveBeenCalledWith(source, target, source.length, target.length);
});
