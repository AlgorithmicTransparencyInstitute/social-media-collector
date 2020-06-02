import decodeNewValues from 'common/storage/utils/decodeNewValues';
import { encode } from 'common/utils/crypto';

const changes = {
  testHasValue: { newValue: encode('yay') },
  testHasNoValue: {}
};

const result = Object.keys(changes).reduce(decodeNewValues(changes), {});

const expected = {
  testHasValue: 'yay',
  testHasNoValue: undefined
};

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
