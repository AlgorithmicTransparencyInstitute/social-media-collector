import attemptToGetMenuOverlayFromMenuIcon from 'content/facebook/utils/menu/pre2020/attemptToGetMenuOverlayFromMenuIcon';
import * as ml from 'content/facebook/utils/menu/makeListener';

import getMenuOverlayFromMenuIcon from 'content/facebook/utils/menu/pre2020/getMenuOverlayFromMenuIcon';

jest.mock('content/facebook/utils/menu/pre2020/attemptToGetMenuOverlayFromMenuIcon');
jest.mock('content/facebook/utils/menu/makeListener');

const attach = jest.fn();
const detach = jest.fn();
const listener = jest.fn();
const querySelector = jest.fn();

const doc = { querySelector };

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
  const container = 'some container element';
  const element = 'some element';
  const menuOverlay = 'some menu overlay element';

  beforeAll(async () => {
    querySelector.mockReturnValue(container);
    listener.mockResolvedValue(menuOverlay);
    result = await getMenuOverlayFromMenuIcon(element, maxAttempts, doc);
  });

  afterAll(cleanup);

  it('called querySelector with the correct selector', () => {
    expect(querySelector).toHaveBeenCalledWith('.uiContextualLayerParent');
  });

  it('called makeAttacher with the container', () => {
    expect(ml.makeAttacher).toHaveBeenCalledWith(container);
  });

  it('called makeDetacher with the container', () => {
    expect(ml.makeDetacher).toHaveBeenCalledWith(container);
  });

  it('called makeListener with the right params', () => {
    expect(ml.makeListener).toHaveBeenCalledWith(
      attemptToGetMenuOverlayFromMenuIcon,
      attach,
      detach
    );
  });

  it('called the listener with the right params', () => {
    expect(listener).toHaveBeenCalledWith(element, maxAttempts);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(menuOverlay);
  });
});

describe('when there is no element', () => {
  beforeAll(async () => {
    const element = null;
    result = await getMenuOverlayFromMenuIcon(element, maxAttempts);
  });

  afterAll(cleanup);

  it('returned null', () => {
    expect(result).toBeNull();
  });
});
