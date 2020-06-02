import { CURRENT_LOCATION } from 'common/keys';
import { getItem, setItem } from '.';

/**
 *  get the current location (a tab name)
 *
 *  @return the current saved location
 */
export const loadCurrent = async () => getItem(CURRENT_LOCATION);

/**
 *  Saves the current location (a tab name)
 *
 *  @param current — A tab name
 */
export const saveCurrent = async current => setItem({ [CURRENT_LOCATION]: current });
