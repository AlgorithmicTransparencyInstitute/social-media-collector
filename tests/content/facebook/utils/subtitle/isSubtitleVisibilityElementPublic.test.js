import isSubtitleVisibilityElementPublic from 'content/facebook/utils/subtitle/isSubtitleVisibilityElementPublic';

let result;

const doTest = ([label, aria, dtc, expected]) => {
  describe(`when ${label}`, () => {
    const getAttribute = jest.fn();
    const element = { getAttribute };

    beforeAll(() => {
      getAttribute.mockReturnValueOnce(aria).mockReturnValueOnce(dtc);
      result = isSubtitleVisibilityElementPublic(element);
    });

    it('called element.getAttribute with aria-label', () => {
      expect(getAttribute).toHaveBeenCalledWith('aria-label');
    });

    if (aria) {
      it('called element.getAttribute with data-tooltip-content', () => {
        expect(getAttribute).toHaveBeenCalledWith('data-tooltip-content');
      });
    } else {
      it('did not call element.getAttribute again', () => {
        expect(getAttribute).toHaveBeenCalledTimes(1);
      });
    }

    it('returned the expected result', () => {
      expect(result).toEqual(expected);
    });
  });
};

[
  ['both public', 'public', 'public', true],
  ['aria label missing', '', '', false],
  ['tooltip missing', 'public', '', false]
].forEach(doTest);
