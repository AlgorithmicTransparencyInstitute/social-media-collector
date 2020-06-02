import validSourceOrTarget from './validSourceOrTarget';

const makeMessage = (source, target, key, data, options = {}) =>
  validSourceOrTarget(source) && validSourceOrTarget(target) && key && data
    ? {
        source,
        target,
        key,
        data,
        options
      }
    : undefined;

export default makeMessage;
