/**
 *  reurns a filter function that tests whether the current element is,
 *  or contains the given element.
 */
const hasNested = element => elt => element !== elt && elt.contains(element);

export default hasNested;
