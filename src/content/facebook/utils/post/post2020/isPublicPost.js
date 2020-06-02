// in some facebooks the icon is an `i` element and in some it is an img.
// exported for tests
export const PUBLIC_ICON = ':scope i[aria-label="Public"],img[alt="Public"]';

/**
 *  Is a Facebook feed post visible globally.
 *
 *
 *  @param {HTMLElement} element - A post element
 *  @returns {Boolean} true if the post's visibility is global.
 */
const isPublicPost = element => Boolean(element.querySelector(PUBLIC_ICON));

export default isPublicPost;
