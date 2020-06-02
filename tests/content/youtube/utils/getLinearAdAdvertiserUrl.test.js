import getLinearAdAdvertiserUrl from 'content/youtube/utils/getLinearAdAdvertiserUrl';

const url = 'https://www.youtube.com';

const renderer = {
  instreamVideoAdRenderer: {
    playerOverlay: {
      instreamAdPlayerOverlayRenderer: {
        visitAdvertiserRenderer: {
          buttonRenderer: {
            text: { runs: [{ text: url }] }
          }
        }
      }
    }
  }
};

it('returns the expected result', () => {
  expect(getLinearAdAdvertiserUrl(renderer)).toEqual(url);
});
