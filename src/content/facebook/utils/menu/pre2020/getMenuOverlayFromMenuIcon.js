import attemptToGetMenuOverlayFromMenuIcon from './attemptToGetMenuOverlayFromMenuIcon';
import { makeAttacher, makeDetacher, makeListener } from '../makeListener';

const PARENT = '.uiContextualLayerParent';

/**
 *  Get the menu overlay element of a Facebook feed post.
 *
 *  @param element - Menu icon element for opening the menu.
 *  @param maxAttempts - Maximum number of attempts.  (Defaults to 3)
 *  @param doc — The document (used for testing, defaults to window.document)
 *  @returns The UI overlay element for the menu or null.
 */
const getMenuOverlayFromMenuIcon = async (
  element,
  maxAttempts,
  /* istanbul ignore next */
  doc = document
) => {
  if (!element) return null;

  const container = doc.querySelector(PARENT);

  const attach = makeAttacher(container);
  const detach = makeDetacher(container);
  const listener = makeListener(attemptToGetMenuOverlayFromMenuIcon, attach, detach);

  return listener(element, maxAttempts);
};

export default getMenuOverlayFromMenuIcon;
