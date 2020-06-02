import makePayload from './makePayload';
import post from './post';

/**
 *  Uploads observation data to the server.
 *
 *  @param data The data to send to the server.
 */
export const uploadObservation = async data => {
  const payload = await makePayload(data);
  return post(payload);
};
