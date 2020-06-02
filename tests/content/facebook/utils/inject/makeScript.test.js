import makeScript from 'content/facebook/utils/inject/makeScript';

const key = 'a-key';
const fn = () => {};
const args = [1, 2, 3];

it('returns a string', () => {
  expect(typeof makeScript(key, fn, args)).toBe('string');
});
