import decodeNewValues from './utils/decodeNewValues';
import commonListener from './utils/commonListener';
import { encode, decode } from '../utils/crypto';

const csl = chrome.storage.local;

const changeValues = fn => results =>
  Object.keys(results).reduce((acc, elem) => {
    acc[elem] = fn(results[elem]);
    return acc;
  }, {});

export const getItem = async (key, defaultValue) =>
  new Promise(resolve =>
    csl.get([key], result => {
      const value = decode(result[key]);
      return resolve(value === null || value === undefined ? defaultValue : value);
    })
  );

export const getItems = async keys =>
  new Promise(resolve => csl.get(keys, result => resolve(changeValues(decode)(result))));

export const setItem = async (key, value) => {
  const data =
    typeof key === 'object' && value === undefined
      ? changeValues(encode)(key)
      : { [key]: encode(value) };

  return new Promise(resolve => csl.set(data, resolve));
};

export const removeItem = async key => {
  const keys = Array.isArray(key) ? key : [key];
  return new Promise(resolve => csl.remove(keys, resolve));
};

export const clearAll = async () => new Promise(resolve => csl.clear(resolve));

export const onChanged = async fn => {
  commonListener(async changes => {
    if (changes) await fn(Object.keys(changes).reduce(decodeNewValues(changes), {}));
  });
};

export const onChangedKey = async (key, fn) => {
  commonListener(async changes => {
    if (!changes || changes[key] === undefined) return;
    await fn(decode(changes[key].newValue));
  });
};
