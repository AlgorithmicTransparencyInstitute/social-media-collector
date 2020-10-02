/**
 *  Is the sponsored subtitle span element visible?
 *
 *  @param element - A subtitle span element.
 *  @param win — The window object (used in testing, defaults to window)
 *  @returns true if the span element is visible.
 */
const isVisibleSubtitleSponsoredChildElement = (element, _i, _elements, win = window) => {
  if (!element || element.offsetHeight <= 0 || element.offsetWidth <= 0) return false;

  const { height, width, x, y } = element.getBoundingClientRect();
  if (height <= 0 || width <= 0 || x < 0 || y < 0) return false;

  const { display, opacity } = win.getComputedStyle(element);

  return display && opacity && display !== 'none' && parseFloat(opacity) > 0.0;
};

export default isVisibleSubtitleSponsoredChildElement;
