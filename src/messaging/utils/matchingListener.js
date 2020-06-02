const matchingListener = listener => ({ source, key }) =>
  source === listener.source && key === listener.key;

export default matchingListener;
