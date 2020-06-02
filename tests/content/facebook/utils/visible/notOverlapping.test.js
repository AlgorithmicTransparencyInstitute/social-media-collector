import hasNested from 'content/facebook/utils/visible/hasNested';

import notOverlapping from 'content/facebook/utils/visible/notOverlapping';

jest.mock('content/facebook/utils/visible/hasNested');

const elements = ['elt1', 'elt2'];

let result;

const cleanup = () => {
  hasNested.mockReset();
};
describe('when false', () => {
  const falseFilter = jest.fn(() => false);

  beforeAll(() => {
    hasNested.mockReturnValue(falseFilter);
    result = elements.reduce(notOverlapping, []);
  });

  afterAll(cleanup);

  it('called hasNested once for each element', () => {
    expect(hasNested).toHaveBeenCalledTimes(elements.length);
  });

  it('called the filter twice for each element', () => {
    expect(falseFilter).toHaveBeenCalledTimes(elements.length * 2);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(elements);
  });
});

describe('when true', () => {
  const trueFilter = jest.fn(() => true);

  beforeAll(() => {
    hasNested.mockReturnValue(trueFilter);
    result = elements.reduce(notOverlapping, []);
  });

  afterAll(cleanup);

  it('called hasNested once for each element', () => {
    expect(hasNested).toHaveBeenCalledTimes(elements.length);
  });

  // because it finds on the first go
  it('called the filter once for each element', () => {
    expect(trueFilter).toHaveBeenCalledTimes(elements.length);
  });

  it('returned the expected result', () => {
    expect(result).toEqual([]);
  });
});
