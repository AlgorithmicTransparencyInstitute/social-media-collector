import commonListener from 'common/storage/utils/commonListener';

chrome.storage.onChanged.addListener = jest.fn();

const fn = jest.fn();

const cleanup = () => {
  chrome.storage.onChanged.addListener.mockClear();
  fn.mockClear();
  console.error.mockClear();
  chrome.runtime.lastError = undefined;
};

describe('when there is an error', () => {
  const error = new Error('oops');

  beforeAll(() => {
    chrome.runtime.lastError = error;
    chrome.storage.onChanged.addListener.mockImplementation(f => f());
    commonListener(fn);
  });

  afterAll(cleanup);

  it('logged an error', () => {
    expect(console.error).toHaveBeenCalledWith(error.message);
  });

  it('did not call the function', () => {
    expect(fn).not.toHaveBeenCalled();
  });
});

describe('when the areaName is wrong', () => {
  beforeAll(() => {
    chrome.storage.onChanged.addListener.mockImplementation(f => f({}, 'wrong'));
    commonListener(fn);
  });

  afterAll(cleanup);

  it('did not call the function', () => {
    expect(fn).not.toHaveBeenCalled();
  });
});

describe('when the areaName is local', () => {
  const changes = { test: 'testing' };

  beforeAll(() => {
    chrome.storage.onChanged.addListener.mockImplementation(f => f(changes, 'local'));
    commonListener(fn);
  });

  afterAll(cleanup);

  it('called the function with the changes', () => {
    expect(fn).toHaveBeenCalledWith(changes);
  });
});
