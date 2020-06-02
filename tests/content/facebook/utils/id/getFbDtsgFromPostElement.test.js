import getFbDtsgFromPostElement, { NAME } from 'content/facebook/utils/id/getFbDtsgFromPostElement';

const querySelector = jest.fn();

const cleanup = () => {
  querySelector.mockReset();
};

const element = { parentElement: { querySelector } };

let result;

describe('when there is no dtsg element', () => {
  beforeAll(() => {
    querySelector.mockReturnValue();
    result = getFbDtsgFromPostElement(element);
  });

  afterAll(cleanup);

  it('called querySelector with the correct selector', () => {
    expect(querySelector).toHaveBeenCalledWith(NAME);
  });

  it('returned null', () => {
    expect(result).toBeNull();
  });
});

describe('when there is a dtsg element', () => {
  const value = 'some value';
  const fbDtsgElement = { value };

  beforeAll(() => {
    querySelector.mockReturnValue(fbDtsgElement);
    result = getFbDtsgFromPostElement(element);
  });

  afterAll(cleanup);

  it('called querySelector with the correct selector', () => {
    expect(querySelector).toHaveBeenCalledWith(NAME);
  });

  it('returned the correct value', () => {
    expect(result).toEqual(value);
  });
});
