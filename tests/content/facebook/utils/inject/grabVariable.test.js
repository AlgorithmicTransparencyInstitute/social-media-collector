import makeScript from 'content/facebook/utils/inject/makeScript';
import documentRoot from 'content/facebook/utils/inject/documentRoot';

import grabVariable from 'content/facebook/utils/inject/grabVariable';

jest.mock('content/facebook/utils/inject/makeScript');
jest.mock('content/facebook/utils/inject/documentRoot');

const setAttribute = jest.fn();
const remove = jest.fn();
const fn = jest.fn();
const args = ['some', 'args'];
const textContent = 'some text content';
const appendChild = jest.fn();

const script = {
  textContent: null,
  setAttribute,
  remove
};

const createElement = jest.fn(() => script);

const doc = {
  appendChild
};

const cleanup = () => {
  localStorage.clear();
  createElement.mockClear();
  makeScript.mockClear();
  appendChild.mockClear();
  documentRoot.mockClear();
};

beforeAll(() => {
  document.createElement = createElement;
  makeScript.mockReturnValue(textContent);
  documentRoot.mockReturnValue(doc);
  grabVariable(fn, args);
});

afterAll(cleanup);

it('called document.createElement', () => {
  expect(document.createElement).toHaveBeenCalledWith('script');
});
