const commonListener = fn => {
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }
    if (areaName !== 'local') return;
    return fn(changes);
  });
};

export default commonListener;
