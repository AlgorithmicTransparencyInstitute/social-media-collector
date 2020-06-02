import * as messaging from 'messaging';
import makeItemId from 'common/utils/makeItemId';
import makePost from 'content/youtube/utils/makePost';
import * as archive from 'common/storage/archive';

import makeReporter from 'content/youtube/utils/makeReporter';

jest.mock('messaging');
jest.mock('common/utils/makeItemId');
jest.mock('content/youtube/utils/makePost');
jest.mock('common/storage/archive');

const postMaker = jest.fn();

const itemId = 'some-item-id';
const hostVideo = { url: 'http://some.host.video.tes' };

const cleanup = () => {
  makeItemId.mockClear();
  makePost.mockClear();
  messaging.sendToBackground.mockClear();
  postMaker.mockClear();
  archive.loadArchiveIndex.mockClear();
  archive.addItemsToArchive.mockClear();
};

let reporter;

beforeAll(() => {
  makeItemId.mockReturnValue(itemId);
  postMaker.mockImplementation(p => p);
  makePost.mockReturnValue(postMaker);
  messaging.sendToBackground.mockResolvedValue();
});

describe('when there are ads and recommendations', () => {
  const ads = [
    { id: '1', data: 'one' },
    { id: '2', data: 'two' }
  ];
  const recommendations = [
    { id: '3', data: 'three' },
    { id: '4', data: 'four' }
  ];

  const data = [...ads, ...recommendations];

  describe('when the archive is empty', () => {
    beforeAll(async () => {
      archive.loadArchiveIndex.mockResolvedValue([]);
      archive.addItemsToArchive.mockResolvedValue();
      reporter = makeReporter(hostVideo);
      await reporter(data);
    });

    afterAll(cleanup);

    it('called makeItemId once', () => {
      expect(makeItemId).toHaveBeenCalledTimes(1);
    });

    it('called makePost with the correct data', () => {
      expect(makePost).toHaveBeenCalledWith(hostVideo, itemId);
    });

    it('called postMaker the right number of times', () => {
      expect(postMaker).toHaveBeenCalledTimes(data.length);
    });
  });

  describe('when the archive has all the items', () => {
    beforeAll(async () => {
      archive.loadArchiveIndex.mockResolvedValue(['1', '2', '3', '4']);
      archive.addItemsToArchive.mockResolvedValue();
      reporter = makeReporter(hostVideo);
      await reporter(data);
    });

    afterAll(cleanup);

    it('called makeItemId once', () => {
      expect(makeItemId).toHaveBeenCalledTimes(1);
    });

    it('called makePost with the correct data', () => {
      expect(makePost).toHaveBeenCalledWith(hostVideo, itemId);
    });

    it('called postMaker the right number of times', () => {
      expect(postMaker).toHaveBeenCalledTimes(data.length);
    });
  });
});

describe('when there are no ads or recommendations', () => {
  beforeAll(async () => {
    reporter = makeReporter(hostVideo);
    await reporter([]);
  });

  afterAll(cleanup);

  it('did not call postMaker', () => {
    expect(postMaker).not.toHaveBeenCalled();
  });
});
