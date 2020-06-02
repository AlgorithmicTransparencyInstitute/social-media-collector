import defaultLocale from 'common/defaultLocale';

describe('defaultLocale', () => {
  describe('when there is a locale', () => {
    const locales = ['en-AU', 'en-US', 'en'];
    const expected = { languageCode: 'en', countryCode: 'AU' };

    it('returns the first suitable locale', () => {
      expect(defaultLocale(locales)).toEqual(expected);
    });
  });

  describe('when there is not a locale', () => {
    const locales = ['en'];
    const expected = { languageCode: 'en', countryCode: 'US' };

    it('returns english and the USA', () => {
      expect(defaultLocale(locales)).toEqual(expected);
    });
  });
});
