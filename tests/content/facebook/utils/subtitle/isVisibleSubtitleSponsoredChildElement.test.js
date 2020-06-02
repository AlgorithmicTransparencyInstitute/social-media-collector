import isVisibleSubtitleSponsoredChildElement from 'content/facebook/utils/subtitle/isVisibleSubtitleSponsoredChildElement';

let result;

describe('when no element', () => {
  beforeAll(() => {
    result = isVisibleSubtitleSponsoredChildElement();
  });

  it('returns false', () => {
    expect(result).toBeFalsy();
  });
});

describe('when there is an element', () => {
  describe('when offsetHeight is <= 0', () => {
    const element = { offsetHeight: 0 };

    beforeAll(() => {
      result = isVisibleSubtitleSponsoredChildElement(element);
    });

    it('returns false', () => {
      expect(result).toBeFalsy();
    });
  });

  describe('when offsetHeight > 0', () => {
    const offsetHeight = 1;

    describe('when offsetWidth is <= 0', () => {
      const element = { offsetHeight, offsetWidth: 0 };

      beforeAll(() => {
        result = isVisibleSubtitleSponsoredChildElement(element);
      });

      it('returns false', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('when offsetWidth is > 0', () => {
      const offsetWidth = 1;
      const getBoundingClientRect = jest.fn();
      const element = { offsetHeight, offsetWidth, getBoundingClientRect };

      describe('when bounding height is <= 0', () => {
        beforeAll(() => {
          getBoundingClientRect.mockReturnValue({ height: 0 });
          result = isVisibleSubtitleSponsoredChildElement(element);
        });

        it('returns false', () => {
          expect(result).toBeFalsy();
        });
      });

      describe('when bounding height is > 0', () => {
        const height = 1;

        describe('when bounding width is <= 0', () => {
          beforeAll(() => {
            getBoundingClientRect.mockReturnValue({ height, width: 0 });
            result = isVisibleSubtitleSponsoredChildElement(element);
          });

          it('returns false', () => {
            expect(result).toBeFalsy();
          });
        });

        describe('when bounding width is > 0', () => {
          const width = 1;
          const getComputedStyle = jest.fn();
          const win = { getComputedStyle };

          beforeAll(() => {
            getBoundingClientRect.mockReturnValue({ height, width });
          });

          describe('when computedStyle is missing display', () => {
            beforeAll(() => {
              getComputedStyle.mockReturnValue({});
              result = isVisibleSubtitleSponsoredChildElement(element, 0, [element], win);
            });

            it('returns false', () => {
              expect(result).toBeFalsy();
            });
          });

          describe('when computedStyle has display', () => {
            describe('when computedStyle is missing opacity', () => {
              beforeAll(() => {
                getComputedStyle.mockReturnValue({ display: 'hello' });
                result = isVisibleSubtitleSponsoredChildElement(element, 0, [element], win);
              });

              it('returns false', () => {
                expect(result).toBeFalsy();
              });
            });

            describe('when computedStyle has opacity', () => {
              describe('when display is not "none"', () => {
                describe('when opacity is > zero', () => {
                  beforeAll(() => {
                    getComputedStyle.mockReturnValue({
                      display: 'hello',
                      opacity: 1.1
                    });
                    result = isVisibleSubtitleSponsoredChildElement(element, 0, [element], win);
                  });

                  it('returns true', () => {
                    expect(result).toBe(true);
                  });
                });

                describe('when opacity is not > zero', () => {
                  beforeAll(() => {
                    getComputedStyle.mockReturnValue({
                      display: 'hello',
                      opacity: '0.0'
                    });
                    result = isVisibleSubtitleSponsoredChildElement(element, 0, [element], win);
                  });

                  it('returns false', () => {
                    expect(result).toBeFalsy();
                  });
                });
              });

              describe('when display is "none"', () => {
                beforeAll(() => {
                  getComputedStyle.mockReturnValue({
                    display: 'none',
                    opacity: 3.3
                  });
                  result = isVisibleSubtitleSponsoredChildElement(element, 0, [element], win);
                });

                it('returns false', () => {
                  expect(result).toBeFalsy();
                });
              });
            });
          });
        });
      });
    });
  });
});
