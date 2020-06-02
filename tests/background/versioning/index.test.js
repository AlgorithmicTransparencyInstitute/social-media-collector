import isUpgradeFromGlobeAndMail from 'background/versioning/isUpgradeFromGlobeAndMail';
import isUpgradeFrom2to3 from 'background/versioning/isUpgradeFrom2to3';
import setDefaultGlobeAndMailPermissions from 'background/versioning/setDefaultGlobeAndMailPermissions';
import setDefaultV3Permissions from 'background/versioning/setDefaultV3Permissions';
import tooSoon from 'background/versioning/tooSoon';
import * as consent from 'common/storage/consent';
import * as page from 'common/utils/page';

import { start } from 'background/versioning';

jest.mock('common/storage/consent');
jest.mock('background/versioning/isUpgradeFromGlobeAndMail');
jest.mock('background/versioning/setDefaultGlobeAndMailPermissions');
jest.mock('background/versioning/isUpgradeFrom2to3');
jest.mock('background/versioning/setDefaultV3Permissions');
jest.mock('background/versioning/tooSoon');
jest.mock('common/utils/page');

const openTerms = jest.fn();

const cleanup = () => {
  console.debug.mockClear();
  consent.checkConsent.mockReset();
  consent.grantConsent.mockReset();
  consent.getConsentViewedAt.mockReset();
  setDefaultGlobeAndMailPermissions.mockReset();
  isUpgradeFromGlobeAndMail.mockClear();
  setDefaultV3Permissions.mockReset();
  isUpgradeFrom2to3.mockClear();
  page.openPage.mockClear();
  openTerms.mockClear();
  tooSoon.mockClear();
};

beforeAll(() => {
  page.openPage.mockReturnValue(openTerms);
});

describe('if it is an upgrade from a globe and mail version', () => {
  const version = 0;

  describe('we have not shown the user the terms in the last 24 hours', () => {
    const viewedAt = new Date().getTime() - 100 * 24 * 60 * 60 * 2;

    beforeAll(async () => {
      consent.checkConsent.mockResolvedValue(version);
      consent.grantConsent.mockResolvedValue();
      consent.getConsentViewedAt.mockResolvedValue(viewedAt);
      setDefaultGlobeAndMailPermissions.mockResolvedValue();
      isUpgradeFromGlobeAndMail.mockReturnValue(true);
      tooSoon.mockReturnValue(false);

      await start();
    });

    afterAll(cleanup);

    it('called checkConsent once', () => {
      expect(consent.checkConsent).toHaveBeenCalledTimes(1);
    });

    it('called isUpgradeFromGlobeAndMail with the version', () => {
      expect(isUpgradeFromGlobeAndMail).toHaveBeenCalledWith(version);
    });

    it('called setDefaultGlobeAndMailPermissions once', () => {
      expect(setDefaultGlobeAndMailPermissions).toHaveBeenCalledTimes(1);
    });

    it('called grantConsent with 1', () => {
      expect(consent.grantConsent).toHaveBeenCalledWith(1);
    });

    it('called openPage with terms', () => {
      expect(page.openPage).toHaveBeenCalledWith('terms');
    });

    it('called tooSoon', () => {
      expect(tooSoon).toHaveBeenCalled();
    });

    it('called openTerms', () => {
      expect(openTerms).toHaveBeenCalled();
    });

    it('did not call isUpgradeFrom2to3', () => {
      expect(isUpgradeFrom2to3).not.toHaveBeenCalled();
    });
  });

  describe('we have shown the user the terms in the last 24 hours', () => {
    const viewedAt = new Date().getTime();

    beforeAll(async () => {
      consent.checkConsent.mockResolvedValue(version);
      consent.grantConsent.mockResolvedValue();
      setDefaultGlobeAndMailPermissions.mockResolvedValue();
      isUpgradeFromGlobeAndMail.mockReturnValue(true);
      consent.getConsentViewedAt.mockResolvedValue(viewedAt);
      tooSoon.mockReturnValue(true);
      await start();
    });

    afterAll(cleanup);

    it('called checkConsent once', () => {
      expect(consent.checkConsent).toHaveBeenCalledTimes(1);
    });

    it('called isUpgradeFromGlobeAndMail with the version', () => {
      expect(isUpgradeFromGlobeAndMail).toHaveBeenCalledWith(version);
    });

    it('called setDefaultGlobeAndMailPermissions once', () => {
      expect(setDefaultGlobeAndMailPermissions).toHaveBeenCalledTimes(1);
    });

    it('called grantConsent with 1', () => {
      expect(consent.grantConsent).toHaveBeenCalledWith(1);
    });

    it('did not call isUpgradeFrom2to3', () => {
      expect(isUpgradeFrom2to3).not.toHaveBeenCalled();
    });

    it('called tooSoon with terms', () => {
      expect(tooSoon).toHaveBeenCalled();
    });

    it('did not call openPage', () => {
      expect(page.openPage).not.toHaveBeenCalled();
    });
  });
});

describe('if it is not an upgrade from a globe and mail version', () => {
  const viewedAt = new Date().getTime();

  describe('it is an upgrade from 2 to 3', () => {
    const version = 2;

    beforeAll(async () => {
      consent.checkConsent.mockResolvedValue(version);
      isUpgradeFromGlobeAndMail.mockReturnValue(false);
      isUpgradeFrom2to3.mockReturnValue(true);
      setDefaultV3Permissions.mockResolvedValue();
      consent.getConsentViewedAt.mockResolvedValue(viewedAt);
      tooSoon.mockReturnValue(true);
      await start();
    });

    afterAll(cleanup);

    it('called checkConsent once', () => {
      expect(consent.checkConsent).toHaveBeenCalledTimes(1);
    });

    it('called isUpgradeFromGlobeAndMail with the version', () => {
      expect(isUpgradeFromGlobeAndMail).toHaveBeenCalledWith(version);
    });

    it('did not call setDefaultGlobeAndMailPermissions', () => {
      expect(setDefaultGlobeAndMailPermissions).not.toHaveBeenCalled();
    });

    it('called isUpgradeFrom2to3 with the version', () => {
      expect(isUpgradeFrom2to3).toHaveBeenCalledWith(version);
    });

    it('did not call grantConsent', () => {
      expect(consent.grantConsent).not.toHaveBeenCalled();
    });

    it('did call setDefaultV3Permissions', () => {
      expect(setDefaultV3Permissions).toHaveBeenCalled();
    });
  });

  describe('it is not an upgrade from 2 to 3', () => {
    describe('it is an old version', () => {
      const version = 1;

      beforeAll(async () => {
        consent.checkConsent.mockResolvedValue(version);
        isUpgradeFromGlobeAndMail.mockReturnValue(false);
        isUpgradeFrom2to3.mockReturnValue(false);
        consent.getConsentViewedAt.mockResolvedValue(viewedAt);
        tooSoon.mockReturnValue(true);
        await start();
      });

      afterAll(cleanup);

      it('called checkConsent once', () => {
        expect(consent.checkConsent).toHaveBeenCalledTimes(1);
      });

      it('called isUpgradeFromGlobeAndMail with the version', () => {
        expect(isUpgradeFromGlobeAndMail).toHaveBeenCalledWith(version);
      });

      it('did not call setDefaultGlobeAndMailPermissions', () => {
        expect(setDefaultGlobeAndMailPermissions).not.toHaveBeenCalled();
      });

      it('called isUpgradeFrom2to3 with the version', () => {
        expect(isUpgradeFrom2to3).toHaveBeenCalledWith(version);
      });

      it('did not call grantConsent', () => {
        expect(consent.grantConsent).not.toHaveBeenCalled();
      });

      it('did not call setDefaultV3Permissions', () => {
        expect(setDefaultV3Permissions).not.toHaveBeenCalled();
      });
    });

    describe('it is current version', () => {
      const version = consent.CURRENT_CONSENT_VERSION;

      beforeAll(async () => {
        consent.checkConsent.mockResolvedValue(version);
        await start();
      });

      afterAll(cleanup);

      it('called checkConsent once', () => {
        expect(consent.checkConsent).toHaveBeenCalledTimes(1);
      });

      it('did not call isUpgradeFromGlobeAndMail', () => {
        expect(isUpgradeFromGlobeAndMail).not.toHaveBeenCalled();
      });

      it('did not call setDefaultGlobeAndMailPermissions', () => {
        expect(setDefaultGlobeAndMailPermissions).not.toHaveBeenCalled();
      });

      it('did not call isUpgradeFrom2to3', () => {
        expect(isUpgradeFrom2to3).not.toHaveBeenCalled();
      });

      it('did not call grantConsent', () => {
        expect(consent.grantConsent).not.toHaveBeenCalled();
      });

      it('did not call setDefaultV3Permissions', () => {
        expect(setDefaultV3Permissions).not.toHaveBeenCalled();
      });

      it('did not call openPage', () => {
        expect(page.openPage).not.toHaveBeenCalled();
      });
    });
  });
});
