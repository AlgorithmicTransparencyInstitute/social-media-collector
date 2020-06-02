import datesToISO from 'common/utils/datesToISO';

const post = {
  id: 'some-id',
  observedAt: new Date().getTime(),
  ignoredAt: new Date().toISOString()
};

const expected = {
  ...post,
  observedAt: new Date(post.observedAt).toISOString()
};

it('converts the numerical date values to ISO strings', () => {
  expect(datesToISO(post)).toEqual(expected);
});
