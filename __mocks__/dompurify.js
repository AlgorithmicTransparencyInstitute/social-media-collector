const DOMPurify = {
  sanitize: jest.fn(html => html),
  addHook: jest.fn(),
  removeHook: jest.fn()
};

export default DOMPurify;
