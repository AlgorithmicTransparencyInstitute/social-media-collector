/* eslint-disable no-useless-escape */
(function() {
  if (process.env.IS_DEBUG === 'true') {
    console.debug('Creating data grab script.');
  }

  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('assets/runs_on_fb.js');
  script.onload = function() {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);

  if (process.env.IS_DEBUG === 'true') {
    console.debug('Created data grab script.');
  }
})();
