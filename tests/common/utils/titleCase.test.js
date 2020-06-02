import titleCase from 'common/utils/titleCase';

const raw = 'raw';
const expected = 'Raw';

it('capitalises the first letter', () => {
  expect(titleCase(raw)).toEqual(expected);
});
