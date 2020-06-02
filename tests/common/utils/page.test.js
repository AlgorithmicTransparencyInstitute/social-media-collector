import { openPage, closePage } from 'common/utils/page';

describe('openPage', () => {
  const page = 'test';
  const expected = chrome.runtime.getURL(`webpage/index.html#${page}`);

  beforeAll(() => {
    window.open = jest.fn();
    openPage(page)();
  });

  it('called window.open with correct url', () => {
    expect(window.open).toHaveBeenCalledWith(expected);
  });
});

describe('closePage', () => {
  beforeAll(() => {
    window.close = jest.fn();
    closePage();
  });

  it('called window.close', () => {
    expect(window.close).toHaveBeenCalled();
  });
});
