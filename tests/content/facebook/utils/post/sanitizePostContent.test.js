import DOMPurify from 'dompurify';
import removeHidden from 'content/facebook/utils/post/removeHidden';

import sanitizePostContent from 'content/facebook/utils/post/sanitizePostContent';

jest.mock('dompurify');
jest.mock('content/facebook/utils/post/removeHidden');

const html = '<div>some html</div>';

const cleanup = () => {
  DOMPurify.addHook.mockClear();
  DOMPurify.removeHook.mockClear();
};

describe('if is user post', () => {
  const isUserPost = true;

  beforeAll(() => {
    sanitizePostContent(html, isUserPost);
  });

  afterAll(cleanup);

  it('called DOMPurify.addHook', () => {
    expect(DOMPurify.addHook).toHaveBeenCalledWith('uponSanitizeElement', removeHidden);
  });

  it('called DOMPurify.sanitize with the correct params', () => {
    expect(DOMPurify.sanitize).toHaveBeenCalledWith(html, {
      USE_PROFILES: { html: true },
      ALLOW_DATA_ATTR: false
    });
  });

  it('called DOMPurify.removeHook', () => {
    expect(DOMPurify.removeHook).toHaveBeenCalledWith('uponSanitizeElement');
  });
});

describe('if is not user post', () => {
  const isUserPost = false;

  beforeAll(() => {
    sanitizePostContent(html, isUserPost);
  });

  afterAll(cleanup);

  it('dod not call DOMPurify.addHook', () => {
    expect(DOMPurify.addHook).not.toHaveBeenCalled();
  });

  it('called DOMPurify.sanitize with the correct params', () => {
    expect(DOMPurify.sanitize).toHaveBeenCalledWith(html, {
      USE_PROFILES: { html: true }
    });
  });
});
