/* eslint-disable no-prototype-builtins */

const extractAdReasons = ({ button: { buttonRenderer } }) => {
  const endpointType = ['navigationEndpoint', 'serviceEndpoint'].find(l =>
    buttonRenderer.hasOwnProperty(l)
  );
  const adInfo = buttonRenderer[endpointType].adInfoDialogEndpoint.dialog.adInfoDialogRenderer;
  const reasons = adInfo.adReasons.map(l => l.simpleText);
  const title = adInfo.title.simpleText;
  return { reasons, title };
};

export default extractAdReasons;
