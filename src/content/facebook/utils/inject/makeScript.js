/**
 *  Given a function and arguments, construct a script that injects the
 *  result of the function's execution into the nominated local storage variable
 *
 *  @param key — The key to store the result of the function.
 *  @param fn — The function to execute.
 *  @param args — The arguments to pass to the function.
 *  @return a string that can be injected into the browser's script.
 */
const makeScript = (key, fn, args) =>
  `localStorage.setItem('${key}', (${fn}).apply(this, ${JSON.stringify(args)}));`;

export default makeScript;
