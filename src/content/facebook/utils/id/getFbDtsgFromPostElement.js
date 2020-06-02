export const NAME = ':scope [name=fb_dtsg]';

/**
 *  Get the fbDtsg token value from the parent of the post element.
 *
 *  @param element - A facebook post element.
 *  @returns The fb_dtsg CSRF token associated with the given element.
 *  @deprecated — Use the db_dtsg field in `src/content/facebook/feedscanner#getCommonData()`
 */
const getFbDtsgFromPostElement = element => {
  const fbDtsgElement = element.parentElement.querySelector(NAME);

  return fbDtsgElement ? fbDtsgElement.value : null;
};

export default getFbDtsgFromPostElement;
