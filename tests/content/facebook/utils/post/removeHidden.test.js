import removeHidden from 'content/facebook/utils/post/removeHidden';

const getAttribute = jest.fn();
const removeChild = jest.fn();

const cleanup = () => {
  getAttribute.mockReset();
  removeChild.mockReset();
};

describe('when node has a getAttribute function', () => {
  const contains = jest.fn();
  const classList = { contains };

  describe('when classList is contains profileLink', () => {
    const node = { getAttribute, classList, parentNode: { removeChild } };

    beforeAll(() => {
      contains.mockReturnValue(true);
      getAttribute.mockReturnValueOnce('true').mockReturnValueOnce('false');
      removeHidden(node);
    });

    afterAll(cleanup);

    it('removes the element', () => {
      expect(removeChild).toHaveBeenCalledWith(node);
    });
  });

  describe('when classList does not contain profileLink', () => {
    const node = { getAttribute, classList, parentNode: { removeChild } };

    beforeAll(() => {
      contains.mockReturnValue(false);
      getAttribute.mockReturnValueOnce('true').mockReturnValueOnce('false');
      removeHidden(node);
    });

    afterAll(cleanup);

    it('does not remove the element', () => {
      expect(removeChild).not.toHaveBeenCalled();
    });
  });
});

describe('when node has no getAttribute function', () => {
  const node = {};

  beforeAll(() => {
    removeHidden(node);
  });

  afterAll(cleanup);

  it('does not remove the element', () => {
    expect(removeChild).not.toHaveBeenCalled();
  });
});
