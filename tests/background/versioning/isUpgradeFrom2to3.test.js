import isUpgradeFrom2to3 from 'background/versioning/isUpgradeFrom2to3';

let result;

describe("user has consented version that's not v2", () => {
  beforeAll(() => {
    result = isUpgradeFrom2to3(1);
  });

  it('returned false', () => {
    expect(result).toEqual(false);
  });
});

describe('user consented to a version that is v2', () => {
  beforeAll(() => {
    result = isUpgradeFrom2to3(2);
  });

  it('returned true', () => {
    expect(result).toEqual(true);
  });
});
