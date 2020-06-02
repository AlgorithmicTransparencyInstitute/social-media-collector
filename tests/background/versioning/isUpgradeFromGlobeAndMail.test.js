import isUpgradeFromGlobeAndMail from 'background/versioning/isUpgradeFromGlobeAndMail';

const cleanup = () => {
  localStorage.getItem.mockReset();
};

let result;

describe('user has consented to a numbered version', () => {
  beforeAll(() => {
    result = isUpgradeFromGlobeAndMail(1);
  });

  afterAll(cleanup);

  it('returned false', () => {
    expect(result).toEqual(false);
  });
});

describe('user has not consented to a numbered version', () => {
  describe('there is no "redux" in local storage', () => {
    beforeAll(() => {
      localStorage.getItem.mockReturnValue(null);
      result = isUpgradeFromGlobeAndMail(0);
    });

    afterAll(cleanup);

    it('returned false', () => {
      expect(result).toEqual(false);
    });
  });

  describe('there is "redux" in local storage', () => {
    describe('terms were accepted', () => {
      const store = JSON.stringify({ terms: true });

      beforeAll(() => {
        localStorage.getItem.mockReturnValue(store);
        result = isUpgradeFromGlobeAndMail(0);
      });

      afterAll(cleanup);

      it('called getItem with "redux"', () => {
        expect(localStorage.getItem).toHaveBeenCalledWith('redux');
      });

      it('returned true', () => {
        expect(result).toEqual(true);
      });
    });

    describe('terms were not accepted', () => {
      const store = JSON.stringify({ terms: false });

      beforeAll(() => {
        localStorage.getItem.mockReturnValue(store);
        result = isUpgradeFromGlobeAndMail(0);
      });

      afterAll(cleanup);

      it('called getItem with "redux"', () => {
        expect(localStorage.getItem).toHaveBeenCalledWith('redux');
      });

      it('returned false', () => {
        expect(result).toEqual(false);
      });
    });

    describe('redux content was junk', () => {
      const store = 'not a valid piece of json';

      beforeAll(() => {
        localStorage.getItem.mockReturnValue(store);
        result = isUpgradeFromGlobeAndMail(0);
      });

      afterAll(cleanup);

      it('called getItem with "redux"', () => {
        expect(localStorage.getItem).toHaveBeenCalledWith('redux');
      });

      it('returned false', () => {
        expect(result).toEqual(false);
      });
    });
  });
});
