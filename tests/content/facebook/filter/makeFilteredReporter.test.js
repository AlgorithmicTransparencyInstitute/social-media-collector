import * as mfp from 'content/facebook/utils/post/makeFilteredProcess';

import makeFilteredReporter from 'content/facebook/filter/makeFilteredReporter';

jest.mock('content/facebook/utils/post/makeFilteredProcess');

const showCollectionStatus = true;
const sharePublicUser = true;
const sharePublicPage = true;
const shareSponsored = true;
const shareAdTargeting = true;

const permissions = {
  showCollectionStatus,
  sharePublicUser,
  sharePublicPage,
  shareSponsored,
  shareAdTargeting
};

const canShareSponsored = jest.fn();
const canSharePublicUser = jest.fn();
const canSharePublicPage = jest.fn();
const cannotShare = jest.fn();

const filters = {
  canShareSponsored,
  canSharePublicUser,
  canSharePublicPage,
  cannotShare
};

const reportSponsored = jest.fn();
const reportPublicUser = jest.fn();
const reportPublicPage = jest.fn();
const reportPrivate = jest.fn();

const version = 'pre2020';

let report;

const cleanup = () => {
  mfp.makeFilteredPostReporter.mockReset();
  report = undefined;
};

describe('makes a function', () => {
  beforeAll(() => {
    mfp.makeFilteredPostReporter
      .mockReturnValueOnce(reportSponsored)
      .mockReturnValueOnce(reportPublicUser)
      .mockReturnValueOnce(reportPublicPage)
      .mockReturnValueOnce(reportPrivate);

    report = makeFilteredReporter({ filters, permissions, version });
  });

  afterAll(cleanup);

  it('called makeFilteredPostReporter with canShareSponsored', () => {
    expect(mfp.makeFilteredPostReporter).toHaveBeenCalledWith(canShareSponsored, version);
  });

  it('called makeFilteredPostReporter with canSharePublicUser', () => {
    expect(mfp.makeFilteredPostReporter).toHaveBeenCalledWith(canSharePublicUser, version);
  });

  it('called makeFilteredPostReporter with canSharePublicPage', () => {
    expect(mfp.makeFilteredPostReporter).toHaveBeenCalledWith(canSharePublicPage, version);
  });

  it('called makeFilteredPostReporter with cannotShare', () => {
    expect(mfp.makeFilteredPostReporter).toHaveBeenCalledWith(cannotShare, version);
  });

  it('returns a function', () => {
    expect(typeof report).toEqual('function');
  });
});

describe('when the function runs', () => {
  const posts = ['one', 'two', 'three'];

  beforeAll(async () => {
    mfp.makeFilteredPostReporter
      .mockReturnValueOnce(reportSponsored)
      .mockReturnValueOnce(reportPublicUser)
      .mockReturnValueOnce(reportPublicPage)
      .mockReturnValueOnce(reportPrivate);

    report = makeFilteredReporter({ filters, permissions, version });

    reportSponsored.mockResolvedValue();
    reportPublicUser.mockResolvedValue();
    reportPublicPage.mockResolvedValue();
    reportPrivate.mockResolvedValue();
    await report(posts);
  });

  afterAll(cleanup);

  it('called reportSponsored with posts and the relevant permissions', () => {
    expect(reportSponsored).toHaveBeenCalledWith(posts, {
      shareSponsored,
      shareAdTargeting
    });
  });

  it('called reportPublicUser with posts', () => {
    expect(reportPublicUser).toHaveBeenCalledWith(posts, { sharePublicUser });
  });

  it('called reportPublicPage with posts', () => {
    expect(reportPublicPage).toHaveBeenCalledWith(posts, { sharePublicPage });
  });
});

describe('when showCollectionStatus is false', () => {
  beforeAll(async () => {
    report = makeFilteredReporter({
      filters,
      permissions: { ...permissions, showCollectionStatus: false }
    });
  });

  afterAll(cleanup);

  it('did not call makeFilteredPostReporter', () => {
    expect(mfp.makeFilteredPostReporter).not.toHaveBeenCalled();
  });
});
