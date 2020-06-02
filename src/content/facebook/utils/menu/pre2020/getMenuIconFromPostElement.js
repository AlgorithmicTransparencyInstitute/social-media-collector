const POPOVER = ':scope .uiPopover';
const LINK = ':scope a';

/**
 *  Identify the menu icon of a FB feed post.
 *
 *  @param element - A facebook post element.
 *  @returns The Menu icon element belonging to the post, or null.
 */
const getMenuIconFromPostElement = element => {
  const popover = element.querySelector(POPOVER);

  return popover ? popover.querySelector(LINK) : null;
};

export default getMenuIconFromPostElement;
