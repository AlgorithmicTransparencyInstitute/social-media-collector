import { getItem, setItem } from 'common/storage';

/**
 *  Get the value of the preference with the given key.
 *
 *  @param key — The key to check
 *  @param defaultValue — An optional default value
 *  @return the preference value, or default if there was no preference set and a default was provided.
 */
export const getPreference = getItem;

/**
 *  Saves the preference with the given key and value supplied.
 *
 *  @param key — The key of the preference to save
 *  @param value — The value to save.
 */
export const savePreference = setItem;
