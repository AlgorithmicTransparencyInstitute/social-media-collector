import * as storage from 'common/storage';
import { ARCHIVE, ARCHIVE_INDEX } from 'common/keys';

import {
  loadArchive,
  saveArchive,
  addItemToArchive,
  addItemsToArchive
} from 'common/storage/archive';

jest.mock('common/storage');

const cleanup = () => {
  storage.setItem.mockClear();
  storage.getItem.mockClear();
  storage.getItems.mockClear();
};

const observedAt = new Date('2020-02-02T00:00:00Z').getTime();
const i1 = `${ARCHIVE}_1`;
const i2 = `${ARCHIVE}_2`;
const i3 = `${ARCHIVE}_3`;

const archive = {
  [i1]: {
    id: '1',
    data: 'some first data',
    observedAt
  },
  [i2]: {
    id: '2',
    data: 'some second data',
    observedAt
  },
  [i3]: {
    id: '3',
    data: 'some third data',
    observedAt
  }
};

const index = Object.keys(archive);

describe('saveArchive', () => {
  const expected = {
    [ARCHIVE_INDEX]: [i1, i2, i3],
    ...archive
  };

  beforeAll(async () => {
    storage.setItem.mockResolvedValue();
    await saveArchive(archive);
  });

  afterAll(cleanup);

  it('called setItem with ARCHIVE_INDEX and the archive', () => {
    expect(storage.setItem).toHaveBeenCalledWith(expected);
  });
});

describe('loadArchive', () => {
  let result;

  describe('when there is nothing to load', () => {
    const expected = {};

    beforeAll(async () => {
      storage.getItem.mockResolvedValue([]);
      result = await loadArchive();
    });

    afterAll(cleanup);

    it('called getItem with ARCHIVE_INDEX and a default of []', () => {
      expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
    });

    it('did not called getItems', () => {
      expect(storage.getItems).not.toHaveBeenCalled();
    });

    it('returned an empty archive', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('when there is something to load', () => {
    describe('when the index is okay', () => {
      beforeAll(async () => {
        storage.getItem.mockResolvedValue(index);
        storage.getItems.mockResolvedValue(archive);
        result = await loadArchive();
      });

      afterAll(cleanup);

      it('called getItem with ARCHIVE_INDEX and a default of []', () => {
        expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
      });

      it('called getItems with the index', () => {
        expect(storage.getItems).toHaveBeenCalledWith(index);
      });

      it('returned the archive', () => {
        expect(result).toEqual(archive);
      });
    });

    describe('when there are nulls in the index', () => {
      beforeAll(async () => {
        storage.getItem.mockResolvedValue([...index, null]);
        storage.getItems.mockResolvedValue(archive);
        result = await loadArchive();
      });

      afterAll(cleanup);

      it('called getItem with ARCHIVE_INDEX and a default of []', () => {
        expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
      });

      it('called getItems with the index', () => {
        expect(storage.getItems).toHaveBeenCalledWith(index);
      });

      it('returned the archive', () => {
        expect(result).toEqual(archive);
      });
    });
  });
});

describe('addItemToArchive', () => {
  describe('when item is not already in the archive', () => {
    const item = { id: '123', data: 'some new data', observedAt };
    const expected = {
      [ARCHIVE_INDEX]: [i1, i2, i3, `${ARCHIVE}_123`],
      [`${ARCHIVE}_123`]: item
    };

    beforeAll(async () => {
      storage.getItem.mockResolvedValue(index);
      storage.setItem.mockResolvedValue();
      await addItemToArchive(item);
    });

    afterAll(cleanup);

    it('called getItem with ARCHIVE_INDEX', () => {
      expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
    });

    it('called setItem with ARCHIVE_INDEX and the updated archive', () => {
      expect(storage.setItem).toHaveBeenCalledWith(expected);
    });
  });

  describe('when the same item is already in the archive', () => {
    const item = { ...archive[i1] };

    beforeAll(async () => {
      storage.getItem.mockResolvedValue(index);
      storage.setItem.mockResolvedValue();
      await addItemToArchive(item);
    });

    afterAll(cleanup);

    it('called getItem with ARCHIVE_INDEX', () => {
      expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
    });

    it('did not call setItem', () => {
      expect(storage.setItem).not.toHaveBeenCalled();
    });
  });
});

describe('addItemsToArchive', () => {
  describe('when the archive is empty', () => {
    const item = { id: '123', data: 'some new data', observedAt };
    const expected = {
      [ARCHIVE_INDEX]: [`${ARCHIVE}_123`],
      [`${ARCHIVE}_123`]: item
    };

    beforeAll(async () => {
      storage.getItem.mockResolvedValue([]);
      storage.setItem.mockResolvedValue();
      await addItemsToArchive([item]);
    });

    afterAll(cleanup);

    it('called getItem with ARCHIVE_INDEX', () => {
      expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
    });

    it('called setItem with ARCHIVE_INDEX and the updated archive', () => {
      expect(storage.setItem).toHaveBeenCalledWith(expected);
    });
  });

  describe('when the items are not already in the archive', () => {
    const item = { id: '123', data: 'some new data' };
    const expected = {
      [ARCHIVE_INDEX]: [i1, i2, i3, `${ARCHIVE}_123`],
      [`${ARCHIVE}_123`]: item
    };

    beforeAll(async () => {
      storage.getItem.mockResolvedValue(index);
      storage.setItem.mockResolvedValue();
      await addItemsToArchive([item]);
    });

    afterAll(cleanup);

    it('called getItem with ARCHIVE_INDEX', () => {
      expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
    });

    it('called setItem with ARCHIVE_INDEX and the updated archive', () => {
      expect(storage.setItem).toHaveBeenCalledWith(expected);
    });
  });

  describe('when the items are already in the archive', () => {
    const item = { ...archive[i1] };

    beforeAll(async () => {
      storage.getItem.mockResolvedValue(index);
      storage.setItem.mockResolvedValue();
      await addItemsToArchive([item]);
    });

    afterAll(cleanup);

    it('called getItem with ARCHIVE_INDEX', () => {
      expect(storage.getItem).toHaveBeenCalledWith(ARCHIVE_INDEX, []);
    });

    it('did not call setItem', () => {
      expect(storage.setItem).not.toHaveBeenCalled();
    });
  });
});
