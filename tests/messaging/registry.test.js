import { handleRequest, registerListener, reset, count } from 'messaging/registry';
import makeListener from 'messaging/utils/makeListener';
import matchingListener from 'messaging/utils/matchingListener';

jest.mock('messaging/utils/makeListener');
jest.mock('messaging/utils/matchingListener');

describe('registerListener and handleRequest', () => {
  const source = 'CS';
  const target = 'BS';
  const key = 'some key';
  const fn = jest.fn();
  const data = 'some data';
  const options = {};
  const listener = { fn };

  const req = {
    source,
    target,
    key,
    data,
    options
  };

  let response;

  const cleanup = () => {
    fn.mockClear();
    makeListener.mockClear();
    matchingListener.mockClear();
    reset();
    response = undefined;
    console.debug.mockClear();
  };

  describe('when the registerListener input is junk', () => {
    beforeAll(() => {
      makeListener.mockReturnValue(null);
      registerListener(source, target, key, fn);
    });

    afterAll(cleanup);

    it('did not register a listener', () => {
      expect(console.debug).not.toHaveBeenCalled();
    });
  });

  describe('when handleRequest gets an unknown listener', () => {
    let result;

    beforeAll(async () => {
      matchingListener.mockReturnValue(() => false);
      result = await handleRequest(req);
    });

    afterAll(cleanup);

    it('returned undefined', () => {
      expect(result).toBeUndefined();
    });
  });

  describe('when there is no matching listener', () => {
    beforeAll(async () => {
      makeListener.mockReturnValue(listener);
      matchingListener.mockReturnValue(() => false);
      registerListener(source, target, key, fn);
      matchingListener.mockReturnValue(() => true);
      fn.mockResolvedValue(true);
      response = await handleRequest(req);
    });

    afterAll(cleanup);

    it('added a handler', () => {
      expect(count()).toEqual(1);
    });

    it('invoked the handler', () => {
      expect(fn).toHaveBeenCalledWith(data, options);
    });

    it('returned the expected result', () => {
      expect(response).toBe(true);
    });
  });

  describe('when there is a matching listener', () => {
    const originalHandler = jest.fn().mockResolvedValue(false);

    beforeAll(async () => {
      makeListener.mockReturnValue(listener);
      matchingListener.mockReturnValue(() => false);
      registerListener(source, target, key, originalHandler);
      matchingListener.mockReturnValue(() => true);
      registerListener(source, target, key, fn);
      fn.mockResolvedValue(true);
      response = await handleRequest(req);
    });

    afterAll(cleanup);

    it('only added one handler', () => {
      expect(count()).toEqual(1);
    });

    it('did not invoke the original handler', () => {
      expect(originalHandler).not.toHaveBeenCalled();
    });

    it('invoked the new handler', () => {
      expect(fn).toHaveBeenCalledWith(data, options);
    });

    it('returned the expected result', () => {
      expect(response).toBe(true);
    });
  });
});
