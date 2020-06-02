import post from 'background/api/post';

const { API_URL } = process.env;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const payload = { some: 'awesome data' };
const body = JSON.stringify(payload);

beforeAll(async () => {
  fetch.mockResponseOnce(JSON.stringify(''), { status: 201 });
  await post(payload);
});

afterAll(() => {
  fetch.resetMocks();
});

it('invoked fetch with the correct params', () => {
  expect(fetch).toHaveBeenCalledWith(`${API_URL}/observation`, {
    body,
    method: 'POST',
    headers
  });
});
