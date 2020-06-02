import { uploadObservation } from 'background/api';

import makePayload from 'background/api/makePayload';
import post from 'background/api/post';

jest.mock('background/api/makePayload');
jest.mock('background/api/post');

const data = 'some data';
const payload = 'some payload';

makePayload.mockResolvedValue(payload);
post.mockResolvedValue();

const cleanup = () => {
  makePayload.mockClear();
  post.mockClear();
};

describe('uploadObservation', () => {
  beforeAll(async () => {
    await uploadObservation(data);
  });

  afterAll(cleanup);

  it('called makePayload with the data', () => {
    expect(makePayload).toHaveBeenCalledWith(data);
  });

  it('called post with the correct payload', () => {
    expect(post).toHaveBeenCalledWith(payload);
  });
});
