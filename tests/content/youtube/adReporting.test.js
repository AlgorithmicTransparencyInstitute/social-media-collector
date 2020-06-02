import makeReporter from 'content/youtube/utils/makeReporter';
import trimTargeting from 'content/youtube/utils/trimTargeting';

import adReporting from 'content/youtube/adReporting';

jest.mock('content/youtube/utils/makeReporter');
jest.mock('content/youtube/utils/trimTargeting');

const reporter = jest.fn();

const hostVideo = { url: 'http://some.host.video.tes' };

const cleanup = () => {
  reporter.mockClear();
  makeReporter.mockClear();
  trimTargeting.mockClear();
};

const ads = [
  { id: '1', data: 'one' },
  { id: '2', data: 'two' }
];
const recommendations = [
  { id: '3', data: 'three' },
  { id: '4', data: 'four' }
];
const data = { ads, hostVideo, recommendations };
const perms = {
  shareWatched: true,
  shareRecommended: true,
  shareAds: true,
  shareAdTargeting: true
};

beforeAll(() => {
  reporter.mockResolvedValue();
  makeReporter.mockReturnValue(reporter);
  trimTargeting.mockImplementation(i => i);
});

describe('when there are ads and recommendations', () => {
  describe('when all shared', () => {
    beforeAll(() => {
      adReporting(data, perms);
    });

    afterAll(cleanup);

    it('called makeReporter once', () => {
      expect(makeReporter).toHaveBeenCalledTimes(1);
    });

    it('did not call trimTargeting', () => {
      expect(trimTargeting).not.toHaveBeenCalled();
    });

    it('called reporter once', () => {
      expect(reporter).toHaveBeenCalledTimes(1);
    });
  });

  describe('when YT_SHARE_WATCHED_VIDEOS is false', () => {
    beforeAll(() => {
      adReporting(data, { ...perms, shareWatched: false });
    });

    afterAll(cleanup);

    it('called makeReporter once', () => {
      expect(makeReporter).toHaveBeenCalledTimes(1);
    });

    it('did not call trimTargeting', () => {
      expect(trimTargeting).not.toHaveBeenCalled();
    });

    it('called reporter once', () => {
      expect(reporter).toHaveBeenCalledTimes(1);
    });
  });

  describe('when YT_SHARE_RECOMMENDED_VIDEOS is false', () => {
    beforeAll(() => {
      adReporting(data, { ...perms, shareRecommended: false });
    });

    afterAll(cleanup);

    it('called makeReporter once', () => {
      expect(makeReporter).toHaveBeenCalledTimes(1);
    });

    it('did not call trimTargeting', () => {
      expect(trimTargeting).not.toHaveBeenCalled();
    });

    it('called reporter once', () => {
      expect(reporter).toHaveBeenCalledTimes(1);
    });
  });

  describe('when YT_SHARE_ADS is false', () => {
    beforeAll(() => {
      adReporting(data, { ...perms, shareAds: false });
    });

    afterAll(cleanup);

    it('called makeReporter once', () => {
      expect(makeReporter).toHaveBeenCalledTimes(1);
    });

    it('did not call trimTargeting', () => {
      expect(trimTargeting).not.toHaveBeenCalled();
    });

    it('called reporter once', () => {
      expect(reporter).toHaveBeenCalledTimes(1);
    });
  });

  describe('when YT_SHARE_AD_TARGETING is false', () => {
    beforeAll(() => {
      adReporting(data, { ...perms, shareAdTargeting: false });
    });

    afterAll(cleanup);

    it('called makeReporter once', () => {
      expect(makeReporter).toHaveBeenCalledTimes(1);
    });

    it('called trimTargeting twice', () => {
      expect(trimTargeting).toHaveBeenCalledTimes(2);
    });

    it('called reporter once', () => {
      expect(reporter).toHaveBeenCalledTimes(1);
    });
  });
});

describe('when there are no ads or recommendations', () => {
  beforeAll(() => {
    adReporting({ ads: [], hostVideo, recommendations: [] }, perms);
  });

  afterAll(cleanup);

  it('called makeReporter once', () => {
    expect(makeReporter).toHaveBeenCalledTimes(1);
  });

  it('did not call trimTargeting', () => {
    expect(trimTargeting).not.toHaveBeenCalled();
  });

  it('did not call reporter', () => {
    expect(reporter).not.toHaveBeenCalled();
  });
});
