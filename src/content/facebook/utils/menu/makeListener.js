const MODIFIED = 'DOMSubtreeModified';
const MAX = 3;

export const makeAttacher = element => handler => {
  element.addEventListener(MODIFIED, handler);
};

export const makeDetacher = element => handler => {
  element.removeEventListener(MODIFIED, handler);
};

export const makeListener = (fn, attach, detach) => async (element, maxAttempts = MAX) => {
  let attempts = 0;

  return new Promise(resolve => {
    const onModified = () => {
      const done = result => {
        detach(onModified);
        return resolve(result);
      };

      const item = fn(element);
      if (item) return done(item);

      attempts = attempts + 1;
      /* istanbul ignore else */
      if (attempts === maxAttempts) return done(null);
    };

    attach(onModified);
    onModified();
  });
};
