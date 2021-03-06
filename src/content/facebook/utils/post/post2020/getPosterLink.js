export const POSTER = ':scope h4 a';

/**
 *  Get the link identifying who posted this.
 *
 *  @param {HTMLElement} element — The element to use as the search root.
 *  @returns {HTMLElement} The poster link.
 */
const getPosterLink = element => element.querySelector(POSTER);

export default getPosterLink;
