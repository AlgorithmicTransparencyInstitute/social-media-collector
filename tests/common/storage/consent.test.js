import * as storage from 'common/storage';
import { CONSENT, CONSENT_ACCEPTED_AT, CONSENT_VIEWED_AT } from 'common/keys';

import {
  checkConsent,
  getConsentAcceptedAt,
  getConsentViewedAt,
  grantConsent,
  viewedConsent,
  CURRENT_CONSENT_VERSION
} from 'common/storage/consent';

jest.mock('common/storage');

const cleanup = () => {
  storage.setItem.mockClear();
  storage.getItem.mockClear();
};

const timestamp = new Date().getTime();

let result;

describe('grantConsent', () => {
  describe('with no params', () => {
    beforeAll(async () => {
      storage.setItem.mockResolvedValue();
      result = await grantConsent();
    });

    afterAll(cleanup);

    it('called setItem with CONSENT and the CURRENT_CONSENT_VERSION', () => {
      expect(storage.setItem).toHaveBeenCalledWith({
        [CONSENT]: CURRENT_CONSENT_VERSION,
        [CONSENT_ACCEPTED_AT]: expect.any(Number)
      });
    });

    it('returned a timestamp', () => {
      expect(typeof result).toEqual('number');
    });
  });

  describe('with a supplied version', () => {
    const version = 1;

    beforeAll(async () => {
      storage.setItem.mockResolvedValue();
      await grantConsent(version);
    });

    afterAll(cleanup);

    it('called setItem with CONSENT and the version', () => {
      expect(storage.setItem).toHaveBeenCalledWith({
        [CONSENT]: version,
        [CONSENT_ACCEPTED_AT]: expect.any(Number)
      });
    });

    it('returned a timestamp', () => {
      expect(typeof result).toEqual('number');
    });
  });
});

describe('checkConsent', () => {
  describe('without a response', () => {
    beforeAll(async () => {
      result = storage.getItem.mockResolvedValue(undefined);
      result = await checkConsent();
    });

    afterAll(cleanup);

    it('called getItem with CONSENT and 0', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CONSENT, 0);
    });

    it('returned 0', () => {
      expect(result).toEqual(0);
    });
  });

  describe('with a truthy response', () => {
    beforeAll(async () => {
      storage.getItem.mockResolvedValue(true);
      result = await checkConsent();
    });

    afterAll(cleanup);

    it('called getItem with CONSENT and 0', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CONSENT, 0);
    });

    it('returned 1', () => {
      expect(result).toEqual(1);
    });
  });

  describe('with a number less than the current consent version', () => {
    const cv = CURRENT_CONSENT_VERSION - 1;

    beforeAll(async () => {
      storage.getItem.mockResolvedValue(cv);
      result = await checkConsent();
    });

    afterAll(cleanup);

    it('called getItem with CONSENT and 0', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CONSENT, 0);
    });

    it('returned the returned consent version', () => {
      expect(result).toEqual(cv);
    });
  });

  describe('with the current consent version', () => {
    beforeAll(async () => {
      storage.getItem.mockResolvedValue(CURRENT_CONSENT_VERSION);
      result = await checkConsent();
    });

    afterAll(cleanup);

    it('called getItem with CONSENT and 0', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CONSENT, 0);
    });

    it('returned the current consent version', () => {
      expect(result).toEqual(CURRENT_CONSENT_VERSION);
    });
  });

  describe('with a number greater than the current consent version', () => {
    beforeAll(async () => {
      storage.getItem.mockResolvedValue(CURRENT_CONSENT_VERSION + 1);
      result = await checkConsent();
    });

    afterAll(cleanup);

    it('called getItem with CONSENT and 0', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CONSENT, 0);
    });

    it('returned the current consent version', () => {
      expect(result).toEqual(CURRENT_CONSENT_VERSION);
    });
  });
});

describe('getConsentAcceptedAt', () => {
  beforeAll(async () => {
    storage.getItem.mockResolvedValue(timestamp);
    result = await getConsentAcceptedAt();
  });

  afterAll(cleanup);

  it('called getItem with the timestamp key', () => {
    expect(storage.getItem).toHaveBeenCalledWith(CONSENT_ACCEPTED_AT);
  });

  it('returned the correct result', () => {
    expect(result).toEqual(timestamp);
  });
});

describe('viewedConsent', () => {
  beforeAll(async () => {
    result = storage.setItem.mockResolvedValue();
    result = await viewedConsent();
  });

  afterAll(cleanup);

  it('called setItem with CONSENT_VIEWED_AT and a number', () => {
    expect(storage.setItem).toHaveBeenCalledWith({
      [CONSENT_VIEWED_AT]: expect.any(Number)
    });
  });

  it('returned a timestamp', () => {
    expect(typeof result).toEqual('number');
  });
});

describe('getConsentViewedAt', () => {
  beforeAll(async () => {
    storage.getItem.mockResolvedValue(timestamp);
    result = await getConsentViewedAt();
  });

  afterAll(cleanup);

  it('called getItem with the timestamp key', () => {
    expect(storage.getItem).toHaveBeenCalledWith(CONSENT_VIEWED_AT);
  });

  it('returned the correct result', () => {
    expect(result).toEqual(timestamp);
  });
});
