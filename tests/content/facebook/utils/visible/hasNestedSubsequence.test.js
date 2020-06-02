import hasNestedSubsequence from 'content/facebook/utils/visible/hasNestedSubsequence';

const source = 'source';
const target = 'target';

describe('when sourceIndex is not 1', () => {
  const sourceIndex = 1;

  describe('when targetIndex is not 0', () => {
    describe('when source and target align', () => {
      it('returns true', () => {
        expect(hasNestedSubsequence(source, source, source.length, source.length)).toBe(true);
      });
    });

    describe('when source and target do not align', () => {
      it('returns false', () => {
        expect(hasNestedSubsequence(source, target, source.length, target.length)).toBe(false);
      });
    });
  });

  describe('when targetIndex is 0', () => {
    const targetIndex = 0;

    it('returns false', () => {
      expect(hasNestedSubsequence(source, target, sourceIndex, targetIndex)).toBe(false);
    });
  });
});

describe('when sourceIndex is 0', () => {
  const sourceIndex = 0;

  it('returns true', () => {
    expect(hasNestedSubsequence(source, target, sourceIndex, 1001)).toBe(true);
  });
});
