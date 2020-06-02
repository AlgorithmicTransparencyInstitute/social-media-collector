import attemptToGetMenuItemFromMenuOverlay from 'content/facebook/utils/menu/attemptToGetMenuItemFromMenuOverlay';
import * as ml from 'content/facebook/utils/menu/makeListener';

import getMenuItemFromMenuOverlay from 'content/facebook/utils/menu/getMenuItemFromMenuOverlay';

jest.mock('content/facebook/utils/menu/attemptToGetMenuItemFromMenuOverlay');
jest.mock('content/facebook/utils/menu/makeListener');

const attach = jest.fn();
const detach = jest.fn();
const listener = jest.fn();

const cleanup = () => {
  ml.makeAttacher.mockClear();
  ml.makeDetacher.mockClear();
  ml.makeListener.mockClear();
};

beforeAll(() => {
  ml.makeAttacher.mockReturnValue(attach);
  ml.makeDetacher.mockReturnValue(detach);
  ml.makeListener.mockReturnValue(listener);
});

const maxAttempts = 1;

let result;

describe('when there is an element', () => {
  const element = 'some element';
  const menuItem = 'some menu item';

  beforeAll(async () => {
    listener.mockResolvedValue(menuItem);
    result = await getMenuItemFromMenuOverlay(element, maxAttempts);
  });

  afterAll(cleanup);

  it('called makeAttacher with the element', () => {
    expect(ml.makeAttacher).toHaveBeenCalledWith(element);
  });

  it('called makeDetacher with the element', () => {
    expect(ml.makeDetacher).toHaveBeenCalledWith(element);
  });

  it('called makeListener with the right params', () => {
    expect(ml.makeListener).toHaveBeenCalledWith(
      attemptToGetMenuItemFromMenuOverlay,
      attach,
      detach
    );
  });

  it('called the listener with the right params', () => {
    expect(listener).toHaveBeenCalledWith(element, maxAttempts);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(menuItem);
  });
});

describe('when there is no element', () => {
  beforeAll(async () => {
    const element = null;
    result = await getMenuItemFromMenuOverlay(element, maxAttempts);
  });

  afterAll(cleanup);

  it('returned null', () => {
    expect(result).toBeNull();
  });
});
