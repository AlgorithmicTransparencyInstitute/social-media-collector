(function() {
  const inject = () => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('assets/runs_on_yt.js');
    script.onload = function() {
      this.remove();
    };
    (document.head || document.documentElement).appendChild(script);

    console.log('Injected XHR Monkey Patch script.');
  };

  inject();
})();
