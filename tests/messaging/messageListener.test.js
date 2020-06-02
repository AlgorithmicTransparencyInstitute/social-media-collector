import * as registry from 'messaging/registry';
import messageListener from 'messaging/messageListener';

jest.mock('messaging/registry');

const req = 'some request';
const sendResponse = jest.fn();
const response = 'some response';

const cleanup = () => {
  registry.handleRequest.mockReset();
  sendResponse.mockClear();
  console.error.mockClear();
};

describe("when it's all good", () => {
  beforeAll(async () => {
    registry.handleRequest.mockResolvedValue(response);
    sendResponse.mockResolvedValue();
    await messageListener(req, 'something', sendResponse);
  });

  afterAll(cleanup);

  it('called handleRequest with the request', () => {
    expect(registry.handleRequest).toHaveBeenCalledWith(req);
  });

  it('called sendResponse with the response', () => {
    expect(sendResponse).toHaveBeenCalledWith(response);
  });
});

describe('when handleRequest throws an error', () => {
  const error = new Error('oops');

  beforeAll(async () => {
    registry.handleRequest.mockImplementation(async () => {
      throw error;
    });
    await messageListener(req, 'something', sendResponse);
  });

  afterAll(cleanup);

  it('caught and logged the error', () => {
    expect(console.error).toHaveBeenCalledWith(error);
  });
});
