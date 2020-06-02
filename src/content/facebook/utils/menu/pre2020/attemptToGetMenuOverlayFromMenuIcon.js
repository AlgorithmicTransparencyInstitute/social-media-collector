/**
 *  Make a selector given the id.
 *
 *  @param id — The id of the data owner
 *  @return the constructed selector
 */
const makeSelector = id => `.uiLayer[data-ownerid='${id}']`;

/**
 *  Try to get the menu element of a FB feed post from its icon element.
 *
 *  @param element - Menu icon element
 *  @param doc - A document object (used for testing. defaults to current document)
 *  @returns the UI overlay element for the menu.
 */
const attemptToGetMenuOverlayFromMenuIcon = (
  element,
  /* istanbul ignore next */
  doc = document
) => doc.querySelector(makeSelector(element.getAttribute('id')));

export default attemptToGetMenuOverlayFromMenuIcon;
