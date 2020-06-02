import { makeAttacher, makeDetacher, makeListener } from 'content/facebook/utils/menu/makeListener';

describe('make attacher', () => {
  const addEventListener = jest.fn();
  const element = { addEventListener };
  const handler = jest.fn();

  beforeAll(() => {
    const attach = makeAttacher(element);
    attach(handler);
  });

  it('called element.addEventListener with the correct key and handler', () => {
    expect(addEventListener).toHaveBeenCalledWith('DOMSubtreeModified', handler);
  });
});

describe('make detacher', () => {
  const removeEventListener = jest.fn();
  const element = { removeEventListener };
  const handler = jest.fn();

  beforeAll(() => {
    const detach = makeDetacher(element);
    detach(handler);
  });

  it('called element.removeEventListener with the correct key and handler', () => {
    expect(removeEventListener).toHaveBeenCalledWith('DOMSubtreeModified', handler);
  });
});

describe('makeListener', () => {
  const fn = jest.fn();
  const attach = jest.fn();
  const detach = jest.fn();
  const listener = makeListener(fn, attach, detach);
  const element = 'some element';

  let result;

  const cleanup = () => {
    fn.mockClear();
    attach.mockClear();
    detach.mockClear();
    result = undefined;
  };

  describe('if an item is found', () => {
    const item = 'some item';

    beforeAll(async () => {
      fn.mockReturnValue(item);
      result = await listener(element);
    });

    afterAll(cleanup);

    it('calls attach', () => {
      expect(attach).toHaveBeenCalled();
    });

    it('calls fn with the element', () => {
      expect(fn).toHaveBeenCalledWith(element);
    });

    it('calls detach', () => {
      expect(detach).toHaveBeenCalled();
    });

    it('returns the item', () => {
      expect(result).toEqual(item);
    });
  });

  describe('if an item is not found', () => {
    const max = 1;

    beforeAll(async () => {
      fn.mockReturnValue();
      result = await listener(element, max);
    });

    afterAll(cleanup);

    it('calls attach', () => {
      expect(attach).toHaveBeenCalled();
    });

    it('calls fn with the element', () => {
      expect(fn).toHaveBeenCalledWith(element);
    });

    it('calls detach', () => {
      expect(detach).toHaveBeenCalled();
    });

    it('returns null', () => {
      expect(result).toBeNull();
    });
  });
});
