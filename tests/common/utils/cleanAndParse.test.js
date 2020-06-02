import cleanAndParse from 'common/utils/cleanAndParse';

const data = { some: 'amazing', data: true };
const input = `for (;;);${JSON.stringify(data)}`;

it('cleans and parses', () => {
  expect(cleanAndParse(input)).toEqual(data);
});
