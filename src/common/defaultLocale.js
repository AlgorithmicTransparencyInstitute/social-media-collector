/**
 *  Determine the browser default locale but finding the first well formed
 *  locale element in the navigator.languages string.
 *
 *  see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages
 *
 *  @param locales — The array of locales (defaults to navigator.languages)
 *  @return the languageCode and countryCode for the default locale.
 */
const defaultLocale = (
  /* istanbul ignore next */
  locales = navigator.languages
) => {
  const [languageCode, countryCode] = (locales.find(loc => loc.includes('-')) || 'en-US').split(
    '-'
  );
  return { languageCode, countryCode };
};

export default defaultLocale;
