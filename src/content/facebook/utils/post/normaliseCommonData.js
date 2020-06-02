/* eslint-disable camelcase */

/**
 *  Take the data injected into the feedscanner and return just the bits we need.
 *  Note: we must get `id` and `client_token` elsewhere.
 *
 *  @param {Object} data — the data as suppied to the feed scanner.
 *  @return {Object} most of the data needed to create GraphQL Queries.
 */
const normaliseCommonData = ({
  paramsPost: {
    fb_dtsg,
    __user,
    __a,
    __dyn,
    __csr,
    __req,
    __beoa,
    __pc,
    dpr,
    __rev,
    __s,
    __hsi,
    jazoest,
    __spin_r,
    __spin_b,
    __spin_t
  }
}) => ({
  fb_dtsg,
  __user,
  __a,
  __dyn,
  __csr,
  __req,
  __beoa,
  __pc,
  dpr,
  __rev,
  __s,
  __hsi,
  jazoest,
  __spin_r,
  __spin_b,
  __spin_t
});

export default normaliseCommonData;
