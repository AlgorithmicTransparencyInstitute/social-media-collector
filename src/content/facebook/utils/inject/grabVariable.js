import makeScript from './makeScript';
import documentRoot from './documentRoot';

const grabVariable = (fn, args) => {
  const PAGE_VARIABLE_KEY = 'pageVariable';
  const script = document.createElement('script');
  script.textContent = makeScript(PAGE_VARIABLE_KEY, fn, args);
  script.setAttribute('id', PAGE_VARIABLE_KEY);
  documentRoot().appendChild(script);
  script.remove();
  return localStorage.getItem(PAGE_VARIABLE_KEY);
};

export default grabVariable;
