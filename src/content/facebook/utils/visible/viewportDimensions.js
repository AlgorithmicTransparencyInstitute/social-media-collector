const viewportDimensions = (
  { documentElement: { clientWidth, clientHeight } } = document,
  { innerHeight, innerWidth } = window
) => ({
  viewWidth: innerWidth || clientWidth,
  viewHeight: innerHeight || clientHeight
});

export default viewportDimensions;
