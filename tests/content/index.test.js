import { start } from 'content';

import * as ytAdScanner from 'content/youtube';
import * as fbFeedScanner from 'content/facebook/feedScanner';
import * as hosts from 'common/utils/hosts';

jest.mock('common/utils/hosts');
jest.mock('content/facebook/feedScanner');
jest.mock('content/youtube');

const cleanup = () => {
  hosts.isFacebook.mockReset();
  hosts.isYouTube.mockReset();
  fbFeedScanner.start.mockReset();
  ytAdScanner.start.mockReset();
};

describe('when the host is neither youtube nor facebook', () => {
  beforeAll(() => {
    hosts.isFacebook.mockReturnValue(false);
    hosts.isYouTube.mockReturnValue(false);
    start();
  });

  afterAll(cleanup);

  it('did not start the youtube ad scanner', () => {
    expect(ytAdScanner.start).not.toHaveBeenCalled();
  });

  it('did not start the facebook ad scanner', () => {
    expect(fbFeedScanner.start).not.toHaveBeenCalled();
  });
});

describe('when the host is youtube', () => {
  beforeAll(() => {
    hosts.isFacebook.mockReturnValue(false);
    hosts.isYouTube.mockReturnValue(true);
    start();
  });

  afterAll(cleanup);

  it('started the youtube ad scanner', () => {
    expect(ytAdScanner.start).toHaveBeenCalledTimes(1);
  });

  it('did not start the facebook ad scanner', () => {
    expect(fbFeedScanner.start).not.toHaveBeenCalled();
  });
});

describe('when the host is facebook', () => {
  beforeAll(() => {
    hosts.isFacebook.mockReturnValue(true);
    start();
  });

  afterAll(cleanup);

  it('started the facebook feed scanner', () => {
    expect(fbFeedScanner.start).toHaveBeenCalled();
  });

  it('did not start the youtube ad scanner', () => {
    expect(ytAdScanner.start).not.toHaveBeenCalled();
  });
});
