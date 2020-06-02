const removeHidden = node => {
  if (typeof node.getAttribute !== 'function') return;

  const removeIt =
    node.getAttribute('aria-expanded') === 'false' ||
    node.getAttribute('aria-hidden') === 'true' ||
    node.classList.contains('uiPopover') ||
    node.classList.contains('profileLink');

  if (removeIt) node.parentNode.removeChild(node);
};

export default removeHidden;
