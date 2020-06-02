import send from 'messaging/utils/send';

const message = 'some message';

const cleanup = () => {
  chrome.runtime.sendMessage.clearMocks();
  chrome.runtime.lastError = undefined;
};

describe('with no error', () => {
  beforeAll(async () => {
    chrome.runtime.sendMessage = jest.fn((msg, callback) => callback(msg));
    await send(message);
  });

  afterAll(cleanup);

  it('called chrome.runtime.sendMessage with the message', () => {
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(message, expect.any(Function));
  });
});

describe('with an error', () => {
  const error = new Error('oops');

  beforeAll(async () => {
    chrome.runtime.sendMessage = jest.fn((msg, callback) => callback(msg));
    chrome.runtime.lastError = error;
    await send(message);
  });

  afterAll(cleanup);

  it('called chrome.runtime.sendMessage with the message', () => {
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(message, expect.any(Function));
  });

  it('called logger.error', () => {
    expect(console.error).toHaveBeenCalledWith(error.message);
  });
});
