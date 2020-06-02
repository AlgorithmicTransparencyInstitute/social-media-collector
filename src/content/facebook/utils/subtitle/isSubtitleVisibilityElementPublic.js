/**
 *  In some cases the text in the attributes is just the word 'public'
 *  but in other cases it can be 'Shared with: Public' or variations on that
 *
 *  @param str — The string to check
 *  @return true if the downcased string contains the word 'public'
 */
const containsPublic = str => (str ? str.toLowerCase().includes('public') : false);

/**
 *  Is the post visibility public.
 *
 *  @param element - Facebook post visibility element.
 *  @returns true if the post visibility is public.
 */
const isSubtitleVisibilityElementPublic = element =>
  containsPublic(element.getAttribute('aria-label')) &&
  containsPublic(element.getAttribute('data-tooltip-content'));

export default isSubtitleVisibilityElementPublic;
