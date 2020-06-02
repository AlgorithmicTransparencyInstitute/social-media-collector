import validSourceOrTarget from 'messaging/utils/validSourceOrTarget';
import { BS, CS } from 'messaging';

describe('when the supplied item is neitehr CS or BS', () => {
  it('returns false', () => {
    expect(validSourceOrTarget('something')).toBe(false);
  });
});

describe(`when the supplied item is ${CS}`, () => {
  it('returns true', () => {
    expect(validSourceOrTarget(CS)).toBe(true);
  });
});

describe(`when the supplied item is ${BS}`, () => {
  it('returns true', () => {
    expect(validSourceOrTarget(BS)).toBe(true);
  });
});
