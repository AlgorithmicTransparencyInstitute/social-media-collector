/**
 *  Get the first link inside of a post subtitle.
 *  If the link exists but contains no child elements, return an array
 *  containing only the link itself, therwise, return all child <span> elements.
 *  If the link does not exist return null.
 *
 *  @param element - A post subtitle element.
 *  @returns An array containing the first link, a list of span elements, or null.
 */
const getSubtitleSponsoredChildElements = element => {
  const firstLink = element.querySelector(':scope a');
  if (!firstLink) return null;

  return firstLink.children.length === 0 ? [firstLink] : firstLink.querySelectorAll(':scope span');
};

export default getSubtitleSponsoredChildElements;
