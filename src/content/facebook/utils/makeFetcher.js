const makeFetcher = ({ content: { fetch: cFetch } = {}, fetch: wFetch } = window) =>
  cFetch || wFetch;

export default makeFetcher;
