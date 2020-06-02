import extractAdReasons from 'content/youtube/utils/extractAdReasons';

const someReason = 'some reason';
const someTitle = 'some title';

const adInfoDialogRenderer = {
  adReasons: [{ simpleText: someReason }],
  title: { simpleText: someTitle }
};

const data = {
  button: {
    buttonRenderer: {
      navigationEndpoint: {
        adInfoDialogEndpoint: { dialog: { adInfoDialogRenderer } }
      }
    }
  }
};

const expected = { reasons: [someReason], title: someTitle };

it('returns the expected result', () => {
  expect(extractAdReasons(data)).toEqual(expected);
});
