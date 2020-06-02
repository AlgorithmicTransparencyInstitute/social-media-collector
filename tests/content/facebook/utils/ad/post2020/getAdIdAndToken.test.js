import getAdIdAndToken from 'content/facebook/utils/ad/post2020/getAdIdAndToken';

const getAttribute = jest.fn();
const element = { getAttribute };

const type = 'reactData';
const label = 'some-label';
const adId = 'some-ad-id';
const clientToken = 'some-client-token';
const data = { adId, clientToken };

const evt = {
  source: window,
  data: { type, label, data }
};

let anEventHandler;

const eventListener = jest.fn((name, handler) => {
  if (name === 'message') anEventHandler = handler;
});

const eventSender = jest.fn(() => {
  anEventHandler(evt);
});

let result;

beforeAll(async () => {
  element.getAttribute.mockReturnValue(label);
  window.addEventListener = eventListener;
  window.postMessage = eventSender;
  window.removeEventListener = jest.fn();
  result = await getAdIdAndToken(element);
});

it('returned the expected result', () => {
  expect(result).toEqual(data);
});
