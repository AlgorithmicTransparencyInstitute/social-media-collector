import attemptToGetMenuItemFromMenuOverlay from './attemptToGetMenuItemFromMenuOverlay';
import { makeAttacher, makeDetacher, makeListener } from './makeListener';

/**
 *  Get the menu item "why am I seeing this [ad]?"
 *
 *  @param element - Menu Overlay element of a Facebook feed post.
 *  @param maxAttempts — The maximum number of times to try.
 *  @returns the associated menu item element or null if unsuccessful.
 */
const getMenuItemFromMenuOverlay = async (element, maxAttempts) => {
  if (!element) return null;

  const attach = makeAttacher(element);
  const detach = makeDetacher(element);
  const listener = makeListener(attemptToGetMenuItemFromMenuOverlay, attach, detach);

  return listener(element, maxAttempts);
};

export default getMenuItemFromMenuOverlay;
