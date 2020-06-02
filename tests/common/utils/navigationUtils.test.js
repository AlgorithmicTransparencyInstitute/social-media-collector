import { makeItems } from 'common/utils/navigationUtils';

const archive = {
  something: 'amazing'
};

const items = {
  test: 'just a test'
};

describe('when there is an archive in the items', () => {
  const itemMaker = makeItems({ ...items, archive });

  describe('without any overrides', () => {
    const expected = { ...items, archive };

    it('returns the expected result', () => {
      expect(itemMaker()).toEqual(expected);
    });
  });

  describe('with overrides', () => {
    const fields = { archive: { something: 'different' } };
    const expected = { ...items, ...fields };

    it('returns the expected result', () => {
      expect(itemMaker(fields)).toEqual(expected);
    });
  });
});

describe('when there is no archive in the items', () => {
  const itemMaker = makeItems(items);

  describe('without any overrides', () => {
    const expected = items;

    it('returns the expected result', () => {
      expect(itemMaker()).toEqual(expected);
    });
  });

  describe('with overrides', () => {
    const expected = items;

    it('returns the expected result', () => {
      expect(itemMaker({ whatever: 'somet stuff that is ignored' })).toEqual(expected);
    });
  });
});
