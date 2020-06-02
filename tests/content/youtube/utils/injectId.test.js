import * as crypto from 'common/utils/crypto';

import injectId from 'content/youtube/utils/injectId';

jest.mock('common/utils/crypto');

const id = 'some-id';
const type = 'some type';
const title = 'some title';
const advertiser = 'some advertiser';
const adId = 'some ad id';

let result;

beforeAll(() => {
  crypto.hash.mockReturnValue(id);
});

describe('given complete ad data', () => {
  const ad = { type, title, advertiser, adId };

  beforeAll(() => {
    result = injectId(ad);
  });

  it('called hash', () => {
    expect(crypto.hash).toHaveBeenCalled();
  });

  it('attached the id to the ad', () => {
    expect(result).toEqual({ id, ...ad });
  });
});

describe('given incomplete ad data', () => {
  const ad = { type, title, advertiser, adId: null };

  beforeAll(() => {
    result = injectId(ad);
  });

  it('called hash', () => {
    expect(crypto.hash).toHaveBeenCalled();
  });

  it('attached the id to the ad', () => {
    expect(result).toEqual({ id, ...ad });
  });
});
