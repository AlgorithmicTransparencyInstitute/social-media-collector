/**
 *  The actual graph of data lives in the page itself and not this content script
 *  so we need to send a message to a script we left there previously, and wait for it to get back to us.
 *
 *  @param {string} label — The unique label extracted from the dom element.
 *  @returns {Promise} resolves to the adId and clientToken if available.
 */
const getGraph = async label =>
  new Promise(resolve => {
    const listener = evt => {
      /* istanbul ignore if */
      if (evt.source !== window) return true;
      const { type, label: l, data } = evt.data;
      /* istanbul ignore else */
      if (type === 'reactData' && label === l) {
        window.removeEventListener('message', listener);
        resolve(data);
        return true;
      }
    };

    window.addEventListener('message', listener);
    window.postMessage({ type: 'getReactData', label }, '*');
  });

/**
 *  Get the associated `adId` and `clientToken` for the given element.
 *
 *  @param {HTMLElement} element — The element.
 *  @return {object} The `adId` and `clientToken`.
 */
async function getAdIdAndToken(element) {
  var label = element.querySelectorAll('a[tabindex="0"]')[1].innerText;
  return getGraph(label);
}

export default getAdIdAndToken;
