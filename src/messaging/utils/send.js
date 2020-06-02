/**
 *  A promisified version of the chrome sendMessage function.
 *
 *  @param the message to send.
 *  @returns a promise that resolves with the message response.
 */
const send = async msg =>
  new Promise(resolve =>
    chrome.runtime.sendMessage(msg, response => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
      resolve(response);
    })
  );

export default send;
