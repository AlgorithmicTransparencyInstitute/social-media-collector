import * as storage from 'common/storage';
import { CURRENT_LOCATION } from 'common/keys';

import { loadCurrent, saveCurrent } from 'common/storage/navigation';

jest.mock('common/storage');

const cleanup = () => {
  storage.setItem.mockClear();
  storage.getItem.mockClear();
};

const current = 'some-tab';

let result;

describe('saveCurrent', () => {
  beforeAll(async () => {
    storage.setItem.mockResolvedValue();
    await saveCurrent(current);
  });

  afterAll(cleanup);

  it('called setItem with CURRENT_LOCATION and current', () => {
    expect(storage.setItem).toHaveBeenCalledWith({
      [CURRENT_LOCATION]: current
    });
  });
});

describe('loadCurrent', () => {
  describe('without a response', () => {
    beforeAll(async () => {
      result = storage.getItem.mockResolvedValue(undefined);
      result = await loadCurrent();
    });

    afterAll(cleanup);

    it('called getItem with CURRENT_LOCATION', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CURRENT_LOCATION);
    });

    it('returned null', () => {
      expect(result).toBeUndefined();
    });
  });

  describe('with a response', () => {
    beforeAll(async () => {
      storage.getItem.mockResolvedValue(current);
      result = await loadCurrent();
    });

    afterAll(cleanup);

    it('called getItem with CURRENT_LOCATION', () => {
      expect(storage.getItem).toHaveBeenCalledWith(CURRENT_LOCATION);
    });

    it('returned current', () => {
      expect(result).toEqual(current);
    });
  });
});
