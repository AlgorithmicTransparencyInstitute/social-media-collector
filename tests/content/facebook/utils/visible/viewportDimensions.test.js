import viewportDimensions from 'content/facebook/utils/visible/viewportDimensions';

const clientWidth = 0;
const clientHeight = 1;
const innerHeight = 10;
const innerWidth = 11;

const doc = {
  documentElement: {
    clientWidth,
    clientHeight
  }
};

const win = {
  innerHeight,
  innerWidth
};

describe('there are window dimensions', () => {
  const expected = {
    viewWidth: innerWidth,
    viewHeight: innerHeight
  };

  it('returns the expected viewport dimensions', () => {
    expect(viewportDimensions(doc, win)).toEqual(expected);
  });
});

describe('there are no window dimensions', () => {
  const expected = {
    viewWidth: clientWidth,
    viewHeight: clientHeight
  };

  it('returns the expected viewport dimensions', () => {
    expect(viewportDimensions(doc, {})).toEqual(expected);
  });
});

describe('with defaults', () => {
  let result;

  beforeAll(() => {
    result = viewportDimensions();
  });

  it('returned an object with a viewHeight', () => {
    expect(result).toHaveProperty('viewHeight');
  });

  it('returned an object with a viewWidth', () => {
    expect(result).toHaveProperty('viewWidth');
  });
});
