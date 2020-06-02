import { ARCHIVE, ARCHIVE_INDEX } from 'common/keys';
import { getItem, getItems, setItem } from '.';

const toIndex = id => `${ARCHIVE}_${id}`;

/*
  ARCHIVE_INDEX is an array of ids
  ARCHIVE_{id} holds the actual item.
*/

/**
 *  get the index of archived items from storage.
 *
 *  @return an array of observations
 */
export const loadArchiveIndex = async () => getItem(ARCHIVE_INDEX, []);

/**
 *  get all of the archived items from storage.
 *
 *  @return an array of observations
 */
export const loadArchive = async () => {
  const index = await loadArchiveIndex();
  const filtered = index.filter(Boolean);
  if (index.length !== filtered.length) {
    console.debug('there were nulls so resaving index');
    await setItem(ARCHIVE_INDEX, filtered);
  }
  if (filtered.length) return getItems(filtered);
  return {};
};

/**
 *  Saves the archived items to local storage.
 *
 *  @param archive — An map of items
 */
export const saveArchive = async archive => {
  const ids = Object.keys(archive).filter(Boolean);
  const items = ids.reduce(
    (acc, elem) => {
      const item = archive[elem];
      acc[toIndex(item.id)] = item;
      return acc;
    },
    { [ARCHIVE_INDEX]: ids }
  );
  await setItem(items);
};

/**
 *  adds an item to the archive
 *
 *  @param item — An item to add to the archive
 */
export const addItemToArchive = async item => {
  const { id } = item;
  const index = await loadArchiveIndex();
  const i = toIndex(id);

  if (!index.includes(i)) {
    await setItem({
      [ARCHIVE_INDEX]: [...index, i],
      [i]: item
    });
  }
};

/**
 *  adds an array of items to the archive
 *
 *  @param items — An array of items to add to the archive
 */
export const addItemsToArchive = async items => {
  const index = await loadArchiveIndex();
  const [archive, newIndex] = items.reduce(
    ([acc, i], elem) => {
      const iid = toIndex(elem.id);
      if (!index.includes(iid)) {
        i = [...i, iid];
        acc[iid] = elem;
      }
      return [acc, i];
    },
    [{}, []]
  );

  if (newIndex.length) {
    archive[ARCHIVE_INDEX] = [...index, ...newIndex];
    await setItem(archive);
  }
};
