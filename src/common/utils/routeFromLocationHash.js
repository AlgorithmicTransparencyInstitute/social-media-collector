const routeFromLocationHash = (
  /* istanbul ignore next */
  hash = window.location.hash
) => (hash ? hash.slice(1) : undefined);

export default routeFromLocationHash;
