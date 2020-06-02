import validSourceOrTarget from './validSourceOrTarget';

const makeListener = (source, target, key, fn) =>
  validSourceOrTarget(source) && validSourceOrTarget(target) && key && typeof fn === 'function'
    ? { source, target, key, fn }
    : undefined;

export default makeListener;
