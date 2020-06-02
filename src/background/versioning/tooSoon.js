const A_DAY = 1000 * 60 * 60 * 24;

const tooSoon = (date, target = new Date().getTime(), howSoonIsTooSoon = A_DAY) =>
  target - date < howSoonIsTooSoon;

export default tooSoon;
