import linearAdSequenceRenderer from 'content/youtube/utils/ads/linearAdSequenceRenderer';

const linearAds = 'w00t! ads';

const data = { linearAdSequenceRenderer: { linearAds } };

it('returns the expected result', () => {
  expect(linearAdSequenceRenderer(data)).toEqual(linearAds);
});
