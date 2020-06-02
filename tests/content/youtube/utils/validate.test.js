import validate from 'content/youtube/utils/validate';

const body = { some: 'body' };
const url = 'http://www.youtube.com';
const hostUrl = 'http://www.youtube.com?v=100';

describe('given bad or missing data', () => {
  [
    ['missing body', { url, hostUrl }],
    ['missing url', { body, hostUrl }],
    ['missing hostUrl', { body, url }],
    ['body wrong type', { body: 'a string', url, hostUrl }],
    ['url wrong type', { body, url: { an: 'object' }, hostUrl }],
    ['hostUrl wrong type', { body, url, hostUrl: { an: 'object' } }]
  ].forEach(([label, data]) => {
    it(label, () => {
      expect(() => {
        validate(data);
      }).toThrow();
    });
  });
});

describe('given good data', () => {
  const data = { body, url, hostUrl };

  it('does not throw an error', () => {
    expect(() => validate(data)).not.toThrow();
  });
});
