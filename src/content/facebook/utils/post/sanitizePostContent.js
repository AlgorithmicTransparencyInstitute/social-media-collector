import DOMPurify from 'dompurify';
import removeHidden from './removeHidden';

const sanitizePostContent = (html, isUserPost) => {
  if (!isUserPost) return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

  DOMPurify.addHook('uponSanitizeElement', removeHidden);

  const sanitised = DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOW_DATA_ATTR: false
  });

  DOMPurify.removeHook('uponSanitizeElement');

  return sanitised;
};

export default sanitizePostContent;
