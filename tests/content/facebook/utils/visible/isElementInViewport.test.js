import viewportDimensions from 'content/facebook/utils/visible/viewportDimensions';

import isElementInViewport from 'content/facebook/utils/visible/isElementInViewport';

jest.mock('content/facebook/utils/visible/viewportDimensions');

const baseBounds = {
  top: 10,
  left: 10,
  right: 10,
  width: 10,
  height: 10,
  bottom: 10
};

const baseDimensions = {
  viewWidth: 10,
  viewHeight: 10
};

[
  ['all good', baseBounds, baseDimensions, true],
  ['top overspill', { ...baseBounds, height: -11 }, baseDimensions, false],
  ['left overspill', { ...baseBounds, width: -11 }, baseDimensions, false],
  ['bottom underspill', { ...baseBounds, bottom: 25 }, baseDimensions, false],
  ['right underspill', { ...baseBounds, right: 25 }, baseDimensions, false]
].forEach(([label, bounds, dimensions, expected]) => {
  describe(`when ${label}`, () => {
    let result;

    beforeAll(() => {
      const element = { getBoundingClientRect: jest.fn(() => bounds) };
      viewportDimensions.mockReturnValue(dimensions);
      result = isElementInViewport(element);
    });

    it(`returns ${expected}`, () => {
      expect(result).toBe(expected);
    });
  });
});
