import getAdTargetingQueryParams from 'content/facebook/utils/ad/getAdTargetingQueryParams';
import extractJsmods from 'content/facebook/utils/ad/extractJsmods';

import getAdTargetingJsmods from 'content/facebook/utils/ad/pre2020/getAdTargetingJsmods';

jest.mock('content/facebook/utils/ad/getAdTargetingQueryParams');
jest.mock('content/facebook/utils/ad/extractJsmods');

const open = jest.fn();
const send = jest.fn();

const makeMockXHRequest = () => {
  const mockXHRequest = function() {
    this.readyState = 4;
    this.open = open;
    this.send = send.mockImplementation(() => {
      this.onreadystatechange();
    });
  };

  window.XMLHttpRequest = jest.fn().mockImplementation(mockXHRequest);
};

let result;

describe('when url is null', () => {
  beforeAll(async () => {
    result = await getAdTargetingJsmods(null);
  });

  it('returned null', () => {
    expect(result).toBeNull();
  });
});

describe('when url is not null', () => {
  const FB_BASE = 'https://www.facebook.com';
  const url = 'https://some-ad-targeting-url.tes';
  const queryParams = '?param=blah';
  const adTargetingUrl = `${FB_BASE}${queryParams}`;
  const jsmods = 'some-js-mods';

  beforeAll(async () => {
    makeMockXHRequest();
    extractJsmods.mockReturnValue(jsmods);
    getAdTargetingQueryParams.mockReturnValue(queryParams);
    result = await getAdTargetingJsmods(url);
  });

  it('called xhr.open with the correct params', () => {
    expect(open).toHaveBeenCalledWith('GET', adTargetingUrl, true);
  });

  it('returned the correct result', () => {
    expect(result).toEqual({ adTargetingUrl, jsmods });
  });
});
