import * as debounce from 'debounce';

import * as consent from 'common/storage/consent';

import buildInitialPosts from 'content/facebook/utils/post/buildInitialPosts';
import normaliseCommonData from 'content/facebook/utils/post/normaliseCommonData';
import makeFilteredUtilities from 'content/facebook/filter/makeFilteredUtilities';

import { start, getCommonData, reset as resetScanner } from 'content/facebook/feedScanner';

jest.mock('debounce');
jest.mock('common/storage/consent');
jest.mock('content/facebook/utils/post/buildInitialPosts');
jest.mock('content/facebook/utils/post/normaliseCommonData');
jest.mock('content/facebook/filter/makeFilteredUtilities');

const applyFilters = jest.fn();
const send = jest.fn();
const report = jest.fn();
const commonData = { __some: 'common', __data: { cool: 'and normal' } };

const paramsReadyData = {
  source: window,
  data: { type: 'asyncParams', other: 'data' }
};

const post = {};
const version = 'pre2020';

let anEventHandler;

const eventListener = jest.fn((name, handler) => {
  if (name === 'message') anEventHandler = handler;
});

const eventSender = jest.fn(() => {
  anEventHandler(paramsReadyData);
});

const cleanup = () => {
  debounce.debounce.mockClear();
  consent.checkConsent.mockClear();
  buildInitialPosts.mockClear();
  normaliseCommonData.mockClear();
  makeFilteredUtilities.mockClear();
  applyFilters.mockReset();
  send.mockReset();
  report.mockReset();
  window.addEventListener.mockClear();
  console.error.mockReset();
  console.debug.mockReset();
  console.time.mockReset();
  console.timeEnd.mockReset();
  anEventHandler = undefined;
  resetScanner();
};

beforeAll(() => {
  window.addEventListener = eventListener;
  window.postMessage = eventSender;
  window.removeEventListener = jest.fn();
  normaliseCommonData.mockReturnValue(commonData);
});

describe('when consent is granted', () => {
  beforeAll(() => {
    consent.checkConsent.mockResolvedValue(consent.CURRENT_CONSENT_VERSION);
  });

  describe('when there are visible posts', () => {
    // note we await start as it behaves like an async function even though it isn't.
    beforeAll(async () => {
      buildInitialPosts.mockReturnValue({ version, posts: [post] });
      applyFilters.mockResolvedValue();
      send.mockResolvedValue();
      report.mockResolvedValue();
      makeFilteredUtilities.mockReturnValue({ applyFilters, send, report });
      await start();
    });

    afterAll(cleanup);

    it('called debounce once', () => {
      expect(debounce.debounce).toHaveBeenCalledTimes(1);
    });

    it('called checkConsent once', () => {
      expect(consent.checkConsent).toHaveBeenCalledTimes(1);
    });

    it('called buildInitialPosts once', () => {
      expect(buildInitialPosts).toHaveBeenCalledTimes(1);
    });

    it('called makeFilteredUtilities once with version', () => {
      expect(makeFilteredUtilities).toHaveBeenCalledTimes(1);
      expect(makeFilteredUtilities).toHaveBeenCalledWith(version);
    });

    it('called applyFilters with posts', () => {
      expect(applyFilters).toHaveBeenCalledWith([post]);
    });

    it('called send with posts', () => {
      expect(send).toHaveBeenCalledWith([post]);
    });

    it('called report with posts', () => {
      expect(report).toHaveBeenCalledWith([post]);
    });
  });

  describe('when the are no visible posts', () => {
    beforeAll(async () => {
      buildInitialPosts.mockReturnValue({ version, posts: [] });
      await start();
    });

    afterAll(cleanup);

    it('called debounce once', () => {
      expect(debounce.debounce).toHaveBeenCalledTimes(1);
    });

    it('called checkConsent once', () => {
      expect(consent.checkConsent).toHaveBeenCalledTimes(1);
    });

    it('called buildInitialPosts once', () => {
      expect(buildInitialPosts).toHaveBeenCalledTimes(1);
    });

    it('did not call makeFilteredUtilities', () => {
      expect(makeFilteredUtilities).not.toHaveBeenCalled();
    });
  });
});

describe('when consent is denied', () => {
  beforeAll(async () => {
    consent.checkConsent.mockResolvedValue(0);
    await start();
  });

  afterAll(cleanup);

  it('called debounce once', () => {
    expect(debounce.debounce).toHaveBeenCalledTimes(1);
  });

  it('called checkConsent once', () => {
    expect(consent.checkConsent).toHaveBeenCalledTimes(1);
  });

  it('did not call buildInitialPosts', () => {
    expect(buildInitialPosts).not.toHaveBeenCalled();
  });
});

describe('start when started', () => {
  beforeAll(async () => {
    // common data is retrieved before any consents are checked.
    consent.checkConsent.mockResolvedValue(0);
    await start();
    await start();
  });

  afterAll(cleanup);

  it('logged an error', () => {
    expect(console.error).toHaveBeenCalledWith('scanner has already started');
  });
});

describe('#getCommonData', () => {
  describe('when started', () => {
    beforeAll(async () => {
      // common data is retrieved before any consents are checked.
      consent.checkConsent.mockResolvedValue(0);
      await start();
    });

    afterAll(cleanup);

    it('returns the expected data', () => {
      expect(getCommonData()).toEqual(commonData);
    });
  });

  describe('when not started', () => {
    it('throws an error', () => expect(() => getCommonData()).toThrow());
  });
});
