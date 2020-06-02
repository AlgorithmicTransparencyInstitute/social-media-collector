import cleanAndParse from 'common/utils/cleanAndParse';

import extractJsmods from 'content/facebook/utils/ad/extractJsmods';

jest.mock('common/utils/cleanAndParse');

const cleanup = () => {
  cleanAndParse.mockReset();
};

const text = 'some result text';

let result;

describe('when json is valid', () => {
  const jsmods = 'some json jsmods';

  beforeAll(() => {
    cleanAndParse.mockReturnValue({ jsmods });
    result = extractJsmods(text);
  });

  afterAll(cleanup);

  it('called cleanAndParse', () => {
    expect(cleanAndParse).toHaveBeenCalledWith(text);
  });

  it('returned jsmods', () => {
    expect(result).toEqual(jsmods);
  });
});

describe('when json is invalid', () => {
  beforeAll(() => {
    cleanAndParse.mockImplementation(() => {
      throw new Error('oops');
    });
    result = extractJsmods(text);
  });

  afterAll(cleanup);

  it('called cleanAndParse', () => {
    expect(cleanAndParse).toHaveBeenCalledWith(text);
  });

  it('returned null', () => {
    expect(result).toBeNull();
  });
});
