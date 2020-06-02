import hasNested from './hasNested';

/**
 *  A reducer function that excludes elements that overlap.
 */
const notOverlapping = (acc, elem, _i, elements) => {
  const nestedElement = hasNested(elem);
  if (!elements.find(nestedElement)) acc.push(elem);
  return acc;
};

export default notOverlapping;
