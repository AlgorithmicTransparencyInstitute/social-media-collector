import * as hosts from 'common/utils/hosts';

[
  ['isFacebook', 'www.facebook.com', 'www.notfacebook.com'],
  ['isYouTube', 'www.youtube.com', 'www.notyoutube.com']
].forEach(([fn, goodHost, badHost]) => {
  describe(fn, () => {
    describe('given a good host', () => {
      it('returns true', () => {
        expect(hosts[fn](goodHost)).toBe(true);
      });
    });

    describe('given a bad host', () => {
      it('returns false', () => {
        expect(hosts[fn](badHost)).toBe(false);
      });
    });
  });
});
