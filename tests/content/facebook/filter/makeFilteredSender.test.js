import * as mfp from 'content/facebook/utils/post/makeFilteredProcess';

import makeFilteredSender from 'content/facebook/filter/makeFilteredSender';

jest.mock('content/facebook/utils/post/makeFilteredProcess');

const canShareSponsored = jest.fn();
const canSharePublicUser = jest.fn();
const canSharePublicPage = jest.fn();

const filters = {
  canShareSponsored,
  canSharePublicUser,
  canSharePublicPage
};

const sendSponsored = jest.fn();
const sponsoredProcessed = jest.fn();

const sendPublicUser = jest.fn();
const publicUserProcessed = jest.fn();

const sendPublicPage = jest.fn();
const publicPageProcessed = jest.fn();

let send;

const cleanup = () => {
  mfp.makeFilteredPostSender.mockReset();
  mfp.makeFilteredApplyAdId.mockReset();
  send = undefined;
};

describe('makes a function', () => {
  beforeAll(() => {
    mfp.makeFilteredPostSender
      .mockReturnValueOnce(sendSponsored)
      .mockReturnValueOnce(sendPublicUser)
      .mockReturnValueOnce(sendPublicPage);
    mfp.makeFilteredFlagPostAsProcessed
      .mockReturnValueOnce(sponsoredProcessed)
      .mockReturnValueOnce(publicUserProcessed)
      .mockReturnValueOnce(publicPageProcessed);

    send = makeFilteredSender({ filters });
  });

  afterAll(cleanup);

  it('called makeFilteredPostSender with canShareSponsored', () => {
    expect(mfp.makeFilteredPostSender).toHaveBeenCalledWith(canShareSponsored);
  });

  it('called makeFilteredFlagPostAsProcessed with canShareSponsored', () => {
    expect(mfp.makeFilteredFlagPostAsProcessed).toHaveBeenCalledWith(canShareSponsored);
  });

  it('called makeFilteredPostSender with canSharePublicUser', () => {
    expect(mfp.makeFilteredPostSender).toHaveBeenCalledWith(canSharePublicUser);
  });

  it('called makeFilteredPostSender with canSharePublicPage', () => {
    expect(mfp.makeFilteredPostSender).toHaveBeenCalledWith(canSharePublicPage);
  });

  it('called makeFilteredFlagPostAsProcessed with canSharePublicUser', () => {
    expect(mfp.makeFilteredFlagPostAsProcessed).toHaveBeenCalledWith(canSharePublicUser);
  });

  it('returns a function', () => {
    expect(typeof send).toEqual('function');
  });
});

describe('when the function runs', () => {
  const posts = ['one', 'two', 'three'];

  beforeAll(async () => {
    mfp.makeFilteredPostSender
      .mockReturnValueOnce(sendSponsored)
      .mockReturnValueOnce(sendPublicUser)
      .mockReturnValueOnce(sendPublicPage);
    mfp.makeFilteredFlagPostAsProcessed
      .mockReturnValueOnce(sponsoredProcessed)
      .mockReturnValueOnce(publicUserProcessed)
      .mockReturnValueOnce(publicPageProcessed);

    send = makeFilteredSender({ filters });

    sendSponsored.mockResolvedValue();
    sponsoredProcessed.mockResolvedValue();
    sendPublicUser.mockResolvedValue();
    publicUserProcessed.mockResolvedValue();
    sendPublicPage.mockResolvedValue();
    publicPageProcessed.mockResolvedValue();
    await send(posts);
  });

  it('called sendSponsored with posts', () => {
    expect(sendSponsored).toHaveBeenCalledWith(posts);
  });

  it('called sponsoredProcessed with posts', () => {
    expect(sponsoredProcessed).toHaveBeenCalledWith(posts);
  });

  it('called sendPublicUser with posts', () => {
    expect(sendPublicUser).toHaveBeenCalledWith(posts);
  });

  it('called sendPublicPage with posts', () => {
    expect(sendPublicPage).toHaveBeenCalledWith(posts);
  });

  it('called publicUserProcessed with posts', () => {
    expect(publicUserProcessed).toHaveBeenCalledWith(posts);
  });

  it('called publicPageProcessed with posts', () => {
    expect(publicPageProcessed).toHaveBeenCalledWith(posts);
  });
});
