import { start } from 'content/youtube';
import adAnalysis from 'content/youtube/adAnalysis';
import adReporting from 'content/youtube/adReporting';
import makeHandler from 'content/youtube/utils/makeHandler';

jest.mock('content/youtube/adAnalysis');
jest.mock('content/youtube/adReporting');
jest.mock('content/youtube/utils/makeHandler');

const cleanup = () => {
  makeHandler.mockClear();
  window.addEventListener.mockReset();
};

beforeAll(() => {
  window.addEventListener = jest.fn();
});

afterAll(cleanup);

it('called makeHandler', () => {
  expect(makeHandler).toHaveBeenCalledWith(adAnalysis, adReporting);
});

describe('start', () => {
  beforeAll(() => {
    start();
  });

  afterAll(cleanup);

  it('called window.addEventListener', () => {
    expect(window.addEventListener).toHaveBeenCalledWith('message', expect.any(Function));
  });
});
