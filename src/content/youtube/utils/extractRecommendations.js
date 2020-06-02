import extractRecommendationData from './extractRecommendationData';

const EMPTY_BODY = { response: {} };

const hasResults = response =>
  response &&
  response.contents &&
  response.contents.twoColumnWatchNextResults &&
  response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;

const results = ({
  contents: {
    twoColumnWatchNextResults: {
      secondaryResults: {
        secondaryResults: { results: r }
      }
    }
  }
}) => r;

// TODO: needs host video too.
const extractRecommendations = ({ body, hostUrl }) => {
  const { response } = body[3] || EMPTY_BODY;

  return hasResults(response)
    ? results(response)
        .map(({ compactAutoplayRenderer, compactVideoRenderer }) => {
          const data = compactAutoplayRenderer
            ? compactAutoplayRenderer.contents[0].compactVideoRenderer
            : compactVideoRenderer;

          return extractRecommendationData(data, hostUrl);
        })
        .filter(Boolean)
    : [];
};

export default extractRecommendations;
