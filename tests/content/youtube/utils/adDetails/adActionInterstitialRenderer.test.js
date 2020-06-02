import adActionInterstitialRenderer from 'content/youtube/utils/adDetails/adActionInterstitialRenderer';

const headline = 'hey!';
const description = 'there!';

const data = {
  adActionInterstitialRenderer: {
    headline: { text: headline },
    description: { text: description }
  }
};

const expected = {
  type: 'adActionInterstitial',
  advertiser: `${headline} ${description}`,
  adId: null
};

let result;

beforeAll(() => {
  result = adActionInterstitialRenderer(data);
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
