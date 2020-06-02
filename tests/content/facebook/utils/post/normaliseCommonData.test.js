/* eslint-disable camelcase */

import normaliseCommonData from 'content/facebook/utils/post/normaliseCommonData';

const fb_dtsg = 'fb_dtsg';
const __user = '__user';
const __a = '__a';
const __dyn = '__dyn';
const __csr = '__csr';
const __req = '__req';
const __beoa = '__beoa';
const __pc = '__pc';
const dpr = 'dpr';
const __rev = '__rev';
const __s = '__s';
const __hsi = '__hsi';
const jazoest = 'jazoest';
const __spin_r = '__spin_r';
const __spin_b = '__spin_b';
const __spin_t = '__spin_t';

const data = {
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
    __spin_t,
    some: { extra: 'rubbish ' }
  }
};

const expected = {
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
};

it('returns the expected', () => {
  expect(normaliseCommonData(data)).toEqual(expected);
});
