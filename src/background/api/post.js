const { API_URL } = process.env;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const URL = `${API_URL}/observation`;

/**
 *  General purpose utility to post data to the server.
 *
 *  @param payload — The data to send.
 *  @return JSON response data.
 */
const post = async payload => {
  const body = JSON.stringify(payload);
  const method = 'POST';
  console.debug('payload', payload);

  /* istanbul ignore if */
  if (!API_URL) {
    // running in offline mode.
    console.debug('running offline so no response received');
    return;
  }

  const metadata = { body, method, headers };
  const response = await fetch(URL, metadata);

  console.debug('server responded with status', response.status, response.statusText);
};

export default post;
