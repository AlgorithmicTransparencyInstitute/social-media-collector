import viewportDimensions from './viewportDimensions';

/**
 *  Determines if an element is within the viewport.
 *  Modified from https://stackoverflow.com/a/7557433
 *  @param element - A DOM element.
 *  @returns true if the element is visible in the viewport.
 */
const isElementInViewport = element => {
  const { top, left, right, width, height, bottom } = element.getBoundingClientRect();
  const { viewWidth, viewHeight } = viewportDimensions();

  return (
    top > -height && left > -width && bottom < viewHeight + height && right < viewWidth + width
  );
};

export default isElementInViewport;
