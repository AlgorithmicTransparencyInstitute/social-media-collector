/**
 * Recursive function that checks that a string contains the target substring.
 *
 * @param source - Source string.
 * @param target - Target string.
 * @param sourceIndex — where to look in the source.
 * @param targetIndex — where to look in the target.
 * @returns true if the source string contains the target string.
 */
const hasNestedSubsequence = (source, target, sourceIndex, targetIndex) => {
  if (sourceIndex === 0) return true;
  if (targetIndex === 0) return false;

  const sIndex = sourceIndex - 1;
  const tIndex = targetIndex - 1;

  return source[sIndex] === target[tIndex]
    ? hasNestedSubsequence(source, target, sIndex, tIndex)
    : hasNestedSubsequence(source, target, sourceIndex, tIndex);
};

export default hasNestedSubsequence;
