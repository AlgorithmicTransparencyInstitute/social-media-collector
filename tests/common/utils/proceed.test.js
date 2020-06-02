import proceed from 'common/utils/proceed';

const consents = [null, 'none', 'old', 'current'];

const doGrantedTest = granted => {
  describe(`when granted is '${granted}'`, () => {
    const doTest = (whenGrantedIs, whenGrantedIsNot, expected) => {
      if (whenGrantedIs) {
        describe(`when whenGrantedIs is '${whenGrantedIs}'`, () => {
          it(`returns ${expected}`, () => {
            expect(proceed(granted, whenGrantedIs, null)).toEqual(expected);
          });
        });
      } else if (whenGrantedIsNot) {
        describe(`when whenGrantedIsNot is '${whenGrantedIsNot}'`, () => {
          it(`returns ${expected}`, () => {
            expect(proceed(granted, null, whenGrantedIsNot)).toEqual(expected);
          });
        });
      } else {
        describe('did not provide whenGrantedIsNot or whenGrantedIs', () => {
          it('returns false', () => {
            expect(proceed(granted, null, null)).toBe(false);
          });
        });
      }
    };

    consents.forEach(whenGrantedIs => {
      if (whenGrantedIs) {
        doTest(whenGrantedIs, null, Boolean(granted) && whenGrantedIs === granted);
      } else {
        consents.forEach(whenGrantedIsNot => {
          doTest(null, whenGrantedIsNot, Boolean(granted) && whenGrantedIsNot !== granted);
        });
      }
    });
  });
};

consents.forEach(doGrantedTest);
