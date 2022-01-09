export const closePage = () => {
  window.close();
};

export const openPage = to => {
  const url = chrome.runtime.getURL(`webpage/index.html#${to}`);

  return () => {
    if (typeof window === 'undefined') {
      console.error(
        'openPage function got broken in manifest v3 b/c window was not defined in service worker. Trying to open URL:',
        url
      );
    } else {
      window.open(url);
    }
  };
};
