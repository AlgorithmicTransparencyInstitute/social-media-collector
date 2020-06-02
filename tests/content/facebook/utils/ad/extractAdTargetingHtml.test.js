import extractAdTargetingHtml from 'content/facebook/utils/ad/extractAdTargetingHtml';

const { jsmods } = require('./__fixtures__/adTargetingResponse.json');

const expected = jsmods.markup[0][1].__html;

describe('with expected data', () => {
  it('extracts the correct html data', () => {
    expect(extractAdTargetingHtml(jsmods)).toEqual(expected);
  });
});

describe('with weird data', () => {
  const weird = { markup: [[]] };

  it('returns null', () => {
    expect(extractAdTargetingHtml(weird)).toBeNull();
  });
});
