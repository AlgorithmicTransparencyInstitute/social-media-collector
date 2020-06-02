import adAnalysis from './adAnalysis';
import adReporting from './adReporting';
import makeHandler from './utils/makeHandler';

const handler = makeHandler(adAnalysis, adReporting);

export const start = () => {
  console.debug('Start YouTube scanner', chrome.runtime.id);
  window.addEventListener('message', handler);
};
