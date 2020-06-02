import messageListener from './messageListener';
import send from './utils/send';
import makeMessage from './utils/makeMessage';

export const BS = 'BS';
export const CS = 'CS';

export const sendToBackground = async (key, data, options) => {
  const msg = makeMessage(CS, BS, key, data, options);

  if (msg) return send(msg);
};

export const start = () => {
  chrome.runtime.onMessage.addListener(messageListener);
};
