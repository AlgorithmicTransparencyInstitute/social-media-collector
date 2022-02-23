/* eslint-disable no-prototype-builtins */

const extractAdReasons = async ({ button: { buttonRenderer } }) => {
  const endpointType = ['navigationEndpoint', 'serviceEndpoint'].find(l =>
    buttonRenderer.hasOwnProperty(l)
  );

  if (!buttonRenderer[endpointType].openPopupAction) {
    // What's happening at a high level is that the adReasons are stored in
    // the JSON, so we can just grab it from there.
    const adInfo = buttonRenderer[endpointType].adInfoDialogEndpoint.dialog.adInfoDialogRenderer;
    const reasons = adInfo.adReasons.map(l => l.simpleText);
    return { reasons };
  }

  // What's happening at a high level is that the adReasons are stored as HTML
  // at this URL. We do a AJAX on it and then querySelector for the reasons.
  const url =
    buttonRenderer[endpointType].openPopupAction.popup.aboutThisAdRenderer.url
      .privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;
  const resp = await fetch(url);
  const html = await resp.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const reasonsHtml = doc.querySelectorAll('.Xkwrgc');
  const reasons = [];
  for (const node of reasonsHtml) {
    reasons.push(node.innerText);
  }
  return { reasons };
};

export default extractAdReasons;
