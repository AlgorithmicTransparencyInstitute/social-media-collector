export const debounce = jest.fn(fn => {
  fn()
    .then(() => {})
    .catch(console.log);
});
