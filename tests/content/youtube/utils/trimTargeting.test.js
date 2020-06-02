import trimTargeting from 'content/youtube/utils/trimTargeting';

const reasons = ['some', 'other', 'reasons'];

const expected = { other: 'ad data' };

const data = {
  ...expected,
  reasons
};

it('returns the expected result', () => {
  expect(trimTargeting(data)).toEqual(expected);
});
