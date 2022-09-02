import validate from './validate';
import permissions from './permissions';

/**
 *  Make an asynchronous event handler using the supplied analysis and reporting functions.
 *
 *  @param analyse — An analysis function
 *  @param report — An asyncronous reporting function
 *  @returns an asynchronous event handler
 */
const makeHandler = (analyse, report) => async ({ source, data }) => {
  // Only handle messages from myself
  if (source === window) {
    try {
      validate(data);
      console.time('yt-scanner');
      console.debug('content script received data', data);
      const perms = await permissions();
      console.debug('permissions', perms);
      const payload = await analyse(data, perms);
      console.debug('payload', payload);
      const response = await report(payload, perms);
      console.debug('report completed', response);
      console.timeEnd('yt-scanner');
    } catch (err) {
      if (err.message !== 'Invalid Data') {
        console.debug('Unexpected error');
        console.error(err);
        console.timeEnd('yt-scanner');
      }
    }
  }
};

export default makeHandler;
