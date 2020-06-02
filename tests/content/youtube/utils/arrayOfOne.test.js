import arrayOfOne from 'content/youtube/utils/arrayOfOne';

const item = 'some item';

it('returns an empty array', () => {
  expect(arrayOfOne(item)).toEqual([item]);
});
