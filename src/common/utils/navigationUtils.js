import { ITEMS } from '../navigation';

export const makeItems = (items = ITEMS) => (fields = {}) => {
  const makeItem = field => ({ ...items[field], ...fields[field] });

  // TODO: Inject news badge counts too.
  return items.archive
    ? {
        ...items,
        archive: makeItem('archive')
      }
    : items;
};
