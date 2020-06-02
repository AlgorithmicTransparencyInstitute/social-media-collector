const MENU = ":scope ul[role='menu']";
const FEED = ":scope li[data-feed-option-name='FeedAdSeenReasonOption']";

/**
 *  A single attempt to identify the menu item element corresponding
 *  to "why am I seeing this [ad]?"
 *
 *  @param element - Menu overloay element associated with a Facebook feed post.
 *  @return The Menu item element or null.
 */
const attemptToGetMenuItemFromMenuOverlay = element => {
  const ul = element.querySelector(MENU);
  if (ul) return ul.querySelector(FEED);

  return null;
};

export default attemptToGetMenuItemFromMenuOverlay;
