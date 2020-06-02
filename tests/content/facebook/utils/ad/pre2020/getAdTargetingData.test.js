import makeFetcher from 'content/facebook/utils/makeFetcher';

import getAdTargetingData from 'content/facebook/utils/ad/pre2020/getAdTargetingData';

import { adTargetingUrl } from '../__fixtures__/adTargetingRequestData';

const adTargetingResponse = require('../__fixtures__/adTargetingResponse.json');
const graphQLQuery = require('../__fixtures__/graphQLQuery.json');

jest.mock('content/facebook/utils/makeFetcher');

const someResponse = { top: 'data' };
const { jsmods } = adTargetingResponse;
const graphQlUrl = 'https://www.facebook.com/api/graphql/';

const fbDtsg = 'AQEn6ynEozdS%3AAQEFzVMWtzHM';

// TODO: Work out where we get this from.
const docId = '2597540430315658';

let result;

beforeAll(async () => {
  fetch.mockResponse(`for (;;);${JSON.stringify(someResponse)}`);
  makeFetcher.mockReturnValue(fetch);
  result = await getAdTargetingData({ jsmods, adTargetingUrl, docId, fbDtsg });
});

afterAll(() => {
  fetch.resetMocks();
});

it('generated the correct query data', () => {
  expect(result).toEqual(someResponse);
});

it('called fetch with the correct values', () => {
  expect(fetch).toHaveBeenCalledWith(graphQlUrl, graphQLQuery);
});
