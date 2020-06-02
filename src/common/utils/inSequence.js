const inSequence = (previous, next) => previous.then(() => next);

export default inSequence;
