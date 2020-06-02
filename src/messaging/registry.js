import matchingListener from './utils/matchingListener';
import makeListener from './utils/makeListener';

const listeners = [];

/**
 *  Relays a request to the correct registered listener.
 *
 *  @param req — The request from the content script.
 *  @returns the result of the request.
 */
export const handleRequest = async req => {
  const listener = listeners.find(matchingListener(req));
  if (listener) return listener.fn(req.data, req.options);
};

/**
 *  registers a listener. If the source and key supplied are the same as
 *  a listener with the same source and key, the listener will be replaced.
 *
 *  @param source — one of 'BS' or 'CS'
 *  @param target — one of 'BS' or 'CS'
 *  @param key — the listener's unique key.
 *  @param fn — the asynchronous handler function.
 */
export const registerListener = (source, target, key, fn) => {
  const listener = makeListener(source, target, key, fn);
  if (!listener) return;

  const index = listeners.findIndex(matchingListener(listener));
  if (index === -1) listeners.push(listener);
  else listeners[index] = listener;

  console.debug('registered listener', JSON.stringify(listener));
};

/**
 * Cleans the register of all listeners
 */
export const reset = () => {
  listeners.length = 0;
};

/**
 * @return The number of listeners
 */
export const count = () => listeners.length;
