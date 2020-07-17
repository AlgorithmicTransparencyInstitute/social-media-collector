export const POSTER_SHARED_A_LINK =
  '.userContentWrapper .userContentWrapper h6 a, .userContentWrapper .userContentWrapper h5 a';
export const POSTER_NO_SHARE = '.userContentWrapper h6 a, .userContentWrapper h5 a';

/**
 *  Get the link identifying who posted this.
 *
 *  @param {HTMLElement} element — The element to use as the search root.
 *  @returns {HTMLElement} The poster link.
 */
const getPosterLink = element =>
  element.querySelector(POSTER_SHARED_A_LINK) || element.querySelector(POSTER_NO_SHARE);

export default getPosterLink;
