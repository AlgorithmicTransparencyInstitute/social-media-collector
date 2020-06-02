import tagMessage, {
  AD_AND_TARGETING_SHARED,
  AD_SHARED_BUT_NOT_TARGETING,
  NOT_SHARING_ADS,
  AD_SHARED_BUT_NO_TARGETING_DATA_AVAILABLE,
  PUBLIC_USER_SHARED,
  PUBLIC_PAGE_SHARED,
  PUBLIC_NOT_SHARED,
  PRIVATE_NOT_SHARED
} from 'content/facebook/ui/tagMessage';

describe('when sponsored', () => {
  const isSponsored = true;

  describe('when there is ad targeting data', () => {
    const payload = { adTargetingData: 'some data' };
    describe('when ad sharing is allowed', () => {
      describe('when ad targeting is allowed', () => {
        const post = { isSponsored, payload };
        const permissions = { shareSponsored: true, shareAdTargeting: true };

        it('returns AD_AND_TARGETING_SHARED', () => {
          expect(tagMessage(post, permissions)).toEqual(AD_AND_TARGETING_SHARED);
        });
      });

      describe('when ad targeting is not allowed', () => {
        const post = { isSponsored, payload };
        const permissions = { shareSponsored: true, shareAdTargeting: false };

        it('returns AD_SHARED_BUT_NOT_TARGETING', () => {
          expect(tagMessage(post, permissions)).toEqual(AD_SHARED_BUT_NOT_TARGETING);
        });
      });
    });

    describe('when ad sharing is not allowed', () => {
      const post = { isSponsored, payload };
      const permissions = { shareSponsored: false };

      it('returns NOT_SHARING_ADS', () => {
        expect(tagMessage(post, permissions)).toEqual(NOT_SHARING_ADS);
      });
    });
  });

  describe('when there is no ad targeting data', () => {
    const payload = {};
    const post = { isSponsored, payload };

    describe('when ad sharing is allowed', () => {
      const permissions = { shareSponsored: true };

      it('returns AD_SHARED_BUT_NO_TARGETING_DATA_AVAILABLE', () => {
        expect(tagMessage(post, permissions)).toEqual(AD_SHARED_BUT_NO_TARGETING_DATA_AVAILABLE);
      });
    });

    describe('when ad sharing is not allowed', () => {
      const permissions = { shareSponsored: false };

      it('returns NOT_SHARING_ADS', () => {
        expect(tagMessage(post, permissions)).toEqual(NOT_SHARING_ADS);
      });
    });
  });
});

describe('when not sponsored', () => {
  const isSponsored = false;
  const isPublic = true;

  describe('when it is a public user post', () => {
    const isUserPost = true;

    const post = { isSponsored, isPublic, isUserPost };

    describe('when sharing public user posts is allowed', () => {
      const permissions = { sharePublicUser: true };

      it('returns PUBLIC_USER_SHARED', () => {
        expect(tagMessage(post, permissions)).toEqual(PUBLIC_USER_SHARED);
      });
    });

    describe('when sharing public user posts is not allowed', () => {
      const permissions = { sharePublicUser: false };

      it('returns PUBLIC_NOT_SHARED', () => {
        expect(tagMessage(post, permissions)).toEqual(PUBLIC_NOT_SHARED);
      });
    });
  });

  describe('when it is a public page post', () => {
    const isUserPost = false;

    const post = { isSponsored, isPublic, isUserPost };

    describe('when sharing public page posts is allowed', () => {
      const permissions = { sharePublicPage: true };

      it('returns PUBLIC_PAGE_SHARED', () => {
        expect(tagMessage(post, permissions)).toEqual(PUBLIC_PAGE_SHARED);
      });
    });

    describe('when sharing public page posts is not allowed', () => {
      const permissions = { sharePublicPage: false };

      it('returns PUBLIC_NOT_SHARED', () => {
        expect(tagMessage(post, permissions)).toEqual(PUBLIC_NOT_SHARED);
      });
    });
  });

  describe('when not public', () => {
    const isPublic = false;
    const post = { isSponsored, isPublic };

    it('returns PRIVATE_NOT_SHARED', () => {
      expect(tagMessage(post, {})).toEqual(PRIVATE_NOT_SHARED);
    });
  });
});
