// { sendToBackground }
import * as messaging from 'messaging';
import { UPLOAD_POSTS } from 'common/actions';
import * as archive from 'common/storage/archive';
import trimPost from 'content/facebook/utils/post/trimPost';

import sendPosts from 'content/facebook/utils/post/sendPosts';

jest.mock('messaging');
jest.mock('common/storage/archive');
jest.mock('content/facebook/utils/post/trimPost');

const cleanup = () => {
  archive.loadArchiveIndex.mockReset();
  archive.addItemsToArchive.mockReset();
  messaging.sendToBackground.mockReset();
  trimPost.mockReset();
};

const id = '123456';
const post = { id };

const doTest = archiveIndex => {
  const label =
    archiveIndex.length === 0
      ? 'an empty array'
      : archiveIndex[0].id === id
      ? 'an array with the supplied post'
      : 'an array with some other post';

  describe(`when loadArchiveIndex returns ${label}`, () => {
    beforeAll(async () => {
      archive.loadArchiveIndex.mockResolvedValue(archiveIndex);
      archive.addItemsToArchive.mockResolvedValue();
      messaging.sendToBackground.mockResolvedValue();
      trimPost.mockImplementation(p => p);
      await sendPosts([post]);
    });

    afterAll(cleanup);

    it('called loadArchiveIndex', () => {
      expect(archive.loadArchiveIndex).toHaveBeenCalled();
    });

    if (archiveIndex && archiveIndex.length && archiveIndex[0] === id) {
      it('did not call addItemsToArchive', () => {
        expect(archive.addItemsToArchive).not.toHaveBeenCalled();
      });

      it('did not call sendToBackground', () => {
        expect(messaging.sendToBackground).not.toHaveBeenCalled();
      });
    } else {
      it('called addItemsToArchive with the trimmed posts', () => {
        expect(archive.addItemsToArchive).toHaveBeenCalledWith([post]);
      });

      it('called sendToBackground with the trimmed posts', () => {
        expect(messaging.sendToBackground).toHaveBeenCalledWith(UPLOAD_POSTS, [post]);
      });
    }
  });
};

[[], ['other'], [id]].forEach(doTest);

describe('when there are no posts', () => {
  beforeAll(async () => {
    await sendPosts();
  });

  afterAll(cleanup);

  it('does nothing', () => {
    expect(archive.loadArchiveIndex).not.toHaveBeenCalled();
  });
});

describe('when the posts array is empty', () => {
  beforeAll(async () => {
    await sendPosts([]);
  });

  afterAll(cleanup);

  it('does nothing', () => {
    expect(archive.loadArchiveIndex).not.toHaveBeenCalled();
  });
});
