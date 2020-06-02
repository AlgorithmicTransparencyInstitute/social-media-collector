import { BS, CS, sendToBackground, start } from 'messaging';

import messageListener from 'messaging/messageListener';
import send from 'messaging/utils/send';
import makeMessage from 'messaging/utils/makeMessage';

jest.mock('messaging/messageListener');
jest.mock('messaging/utils/send');
jest.mock('messaging/utils/makeMessage');

const cleanup = () => {
  makeMessage.mockClear();
  send.mockClear();
  chrome.runtime.onMessage.addListener.mockReset();
};

const key = 'a key';
const data = 'some data';
const message = 'a valid message';

describe('constants', () => {
  it('has BS', () => {
    expect(BS).toEqual('BS');
  });

  it('has CS', () => {
    expect(CS).toEqual('CS');
  });
});

describe('start', () => {
  beforeAll(() => {
    start();
  });

  afterAll(cleanup);

  it('called chrome.runtime.onMessage.addListener with the messageListener', () => {
    expect(chrome.runtime.onMessage.addListener).toHaveBeenCalledWith(messageListener);
  });
});

describe('sendToBackground', () => {
  describe('with valid message data', () => {
    beforeAll(async () => {
      makeMessage.mockReturnValue(message);
      send.mockResolvedValue();
      await sendToBackground(key, data);
    });

    afterAll(cleanup);

    it('called makeMessage with the correct params', () => {
      expect(makeMessage).toHaveBeenCalledWith(CS, BS, key, data, undefined);
    });

    it('invoked the send function with the message', () => {
      expect(send).toHaveBeenCalledWith(message);
    });
  });

  describe('with invalid message data', () => {
    beforeAll(async () => {
      makeMessage.mockReturnValue(undefined);
      await sendToBackground(key, data);
    });

    afterAll(cleanup);

    it('did not invoke the send function', () => {
      expect(send).not.toHaveBeenCalled();
    });
  });
});
