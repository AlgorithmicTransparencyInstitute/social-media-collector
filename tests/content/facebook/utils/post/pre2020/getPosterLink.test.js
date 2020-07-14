import getPosterLink, {
  POSTER_SHARED_A_LINK,
  POSTER_NO_SHARE
} from 'content/facebook/utils/post/pre2020/getPosterLink';

const querySelector = jest.fn();

const expected = 'this yay!';
let result;

const cleanup = () => {
  querySelector.mockClear();
  result = undefined;
};

describe('when poster shared a link', () => {
  beforeAll(() => {
    querySelector.mockReturnValue(expected);
    result = getPosterLink({ querySelector });
  });

  afterAll(cleanup);

  it('called querySelector with POSTER_SHARED_A_LINK', () => {
    expect(querySelector).toHaveBeenCalledWith(POSTER_SHARED_A_LINK);
  });

  it('did not call querySelector with POSTER_NO_SHARE', () => {
    expect(querySelector).not.toHaveBeenCalledWith(POSTER_NO_SHARE);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('when poster did not share a link', () => {
  beforeAll(() => {
    querySelector.mockReturnValueOnce(null).mockReturnValueOnce(expected);
    result = getPosterLink({ querySelector });
  });

  afterAll(cleanup);

  it('called querySelector with POSTER_SHARED_A_LINK', () => {
    expect(querySelector).toHaveBeenCalledWith(POSTER_SHARED_A_LINK);
  });

  it('called querySelector with POSTER_NO_SHARE', () => {
    expect(querySelector).toHaveBeenCalledWith(POSTER_NO_SHARE);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});
