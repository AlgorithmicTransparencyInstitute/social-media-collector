import tagMessage from 'content/facebook/ui/tagMessage';

import tagPostElement from 'content/facebook/ui/pre2020/tagPostElement';

jest.mock('content/facebook/ui/tagMessage');

const id = '1234567898765';
const closest = jest.fn();
const createElement = jest.fn();
const querySelector = jest.fn();
const getAttribute = jest.fn();
const setAttribute = jest.fn();
const prepend = jest.fn();

const elem = { closest };
const doc = { createElement };
const post = { elem, id };
const permissions = {};

const cleanup = () => {
  closest.mockClear();
  getAttribute.mockReset();
  querySelector.mockReset();
  createElement.mockReset();
  prepend.mockReset();
};

describe('has wrapper', () => {
  const wrapper = { querySelector, prepend };

  beforeAll(() => {
    closest.mockReturnValue(wrapper);
  });

  describe('has no oldTag', () => {
    const span = { setAttribute, innerHTML: null };

    beforeAll(() => {
      closest.mockReturnValue(wrapper);
      querySelector.mockReturnValue();
      createElement.mockReturnValue(span);
      tagPostElement(post, permissions, doc);
    });

    afterAll(cleanup);

    it('called tagMessage', () => {
      expect(tagMessage).toHaveBeenCalledWith(post, permissions);
    });

    it('called prepend', () => {
      expect(prepend).toHaveBeenCalled();
    });
  });

  describe('has an oldTag', () => {
    const oldTag = { getAttribute };

    beforeAll(() => {
      getAttribute.mockReturnValue(id);
      querySelector.mockReturnValue(oldTag);
      tagPostElement(post, permissions);
    });

    afterAll(cleanup);

    it('did not call createElement', () => {
      expect(createElement).not.toHaveBeenCalled();
    });
  });
});

describe('has no wrapper', () => {
  beforeAll(() => {
    closest.mockReturnValue();
    tagPostElement(post, permissions);
  });

  afterAll(cleanup);

  it('did not call querySelector', () => {
    expect(querySelector).not.toHaveBeenCalled();
  });
});
