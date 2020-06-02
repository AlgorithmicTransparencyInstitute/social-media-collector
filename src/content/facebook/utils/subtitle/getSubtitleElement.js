/* look for both subtitle and misspelled subtilte */
const selectors = [
  ":scope [data-testid='story-subtitle']",
  ":scope [data-testid='story-subtilte']",
  ":scope [data-testid='story-label']",
  ":scope [data-testid='fb-testid_feed-subtilte']"
].join(', ');

/**
 *  Get the subtitle element of a post.
 *
 *  @param element - A facebook post element.
 *  @returns The subtitle element or null if there is no subtitle element.
 */
const getSubtitleElement = element => element.querySelector(selectors);

export default getSubtitleElement;
