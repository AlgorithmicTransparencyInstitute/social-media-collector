export const closePage = () => {
  window.close();
};

export const openPage = to => {
  const url = chrome.runtime.getURL(`webpage/index.html#${to}`);

  return () => {
    window.open(url);
  };
};
