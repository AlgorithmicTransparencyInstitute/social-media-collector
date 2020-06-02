/**
 *  Return the text inside of a subtitle span element or the value of its
 *  "data-content" attribute.
 *
 *  @param element - A subtitle span element.
 *  @returns Text or value of the "data-content" attribute of the element.
 */
const getVisibleSubtitleSponsoredChildElementText = element => {
  const str = element.textContent;
  if (str && str.length) return str;

  const data = element.getAttribute('data-content');

  return data && data.length ? data : '';
};

export default getVisibleSubtitleSponsoredChildElementText;
