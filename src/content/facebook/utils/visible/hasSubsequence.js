import hasNestedSubsequence from './hasNestedSubsequence';

/**
 * Checks that a string contains the target substring.
 *
 * @param source - Source string.
 * @param target - Target string.
 * @returns true if the source string contains the target string.
 */
const hasSubsequence = (source, target) =>
  hasNestedSubsequence(source, target, source.length, target.length);

export default hasSubsequence;
