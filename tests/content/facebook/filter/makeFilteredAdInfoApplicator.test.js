import * as mfp from 'content/facebook/utils/post/makeFilteredProcess';

import makeFilteredAdInfoApplicator from 'content/facebook/filter/makeFilteredAdInfoApplicator';

jest.mock('content/facebook/utils/post/makeFilteredProcess');

const canShareAdTargeting = jest.fn();
const cannotShareAdTargeting = jest.fn();
const applyAdTargeting = jest.fn();
const applyAdId = jest.fn();
const version = 'pre2020';

const filters = {
  canShareAdTargeting,
  cannotShareAdTargeting,
  applyAdTargeting,
  applyAdId
};

let applyFilters;

const cleanup = () => {
  mfp.makeFilteredApplyAdTargeting.mockClear();
  mfp.makeFilteredApplyAdId.mockClear();
  applyFilters = undefined;
};

beforeAll(() => {
  mfp.makeFilteredApplyAdTargeting.mockReturnValue(applyAdTargeting);
  mfp.makeFilteredApplyAdId.mockReturnValue(applyAdId);
});

describe('makes a function', () => {
  beforeAll(() => {
    applyFilters = makeFilteredAdInfoApplicator({ filters, version });
  });

  afterAll(cleanup);

  it('called makeFilteredApplyAdTargeting with canShareAdTargeting', () => {
    expect(mfp.makeFilteredApplyAdTargeting).toHaveBeenCalledWith(canShareAdTargeting, version);
  });

  it('called makeFilteredApplyAdId with cannotShareAdTargeting', () => {
    expect(mfp.makeFilteredApplyAdId).toHaveBeenCalledWith(cannotShareAdTargeting, version);
  });

  it('returns a function', () => {
    expect(typeof applyFilters).toEqual('function');
  });
});

describe('when the function runs', () => {
  const posts = ['one', 'two', 'three'];

  beforeAll(async () => {
    applyFilters = makeFilteredAdInfoApplicator({ filters, version });
    await applyFilters(posts);
  });

  afterAll(cleanup);

  it('called applyAdTargeting with posts', () => {
    expect(applyAdTargeting).toHaveBeenCalledWith(posts);
  });

  it('called applyAdId with posts', () => {
    expect(applyAdId).toHaveBeenCalledWith(posts);
  });
});
