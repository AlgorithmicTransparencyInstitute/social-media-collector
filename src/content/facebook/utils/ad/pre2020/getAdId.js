const REGEX = /\/\w+\/\?id=(\d+)&/;

/**
 *  Get the ad id from the ad targeting URL.
 *
 *  @param url - Ad targeting AJAX URL.
 *  @returns the Ad id or null.
 */
export default function getAdId(url) {
  if (!url) return null;

  const [_ignore, id] = url.match(REGEX) || [];
  return id || null;
}
