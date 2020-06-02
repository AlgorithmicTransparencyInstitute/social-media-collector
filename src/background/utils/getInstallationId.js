import { v4 } from 'uuid';
import { setItem, getItem } from 'common/storage';
import { INSTALLATION_ID } from 'common/keys';

/**
 *  Create an installation identifier.
 */
const makeInstallationId = async () => {
  const id = `ati:${v4()}`;
  await setItem(INSTALLATION_ID, id);

  return id;
};

/**
 *  Create and save an installation identifier if none exists, otherwise
 *  return the existing id.
 *
 *  @return an installation identifier.
 */
const getInstallationId = async () => {
  const id = await getItem(INSTALLATION_ID);
  return id || makeInstallationId();
};

export default getInstallationId;
