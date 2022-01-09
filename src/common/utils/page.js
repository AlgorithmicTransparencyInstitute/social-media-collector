export const closePage = () => {
  window.close();
};

export const getPageURL = function(to) {
  return chrome.runtime.getURL(`webpage/index.html#${to}`);
};

export const openPage = to => {
  const url = getPageURL(to);

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
