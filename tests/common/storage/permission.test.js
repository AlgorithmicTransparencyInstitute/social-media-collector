import * as storage from 'common/storage';

import { checkPermission, savePermission } from 'common/storage/permission';

jest.mock('common/storage');

const cleanup = () => {
  storage.setItem.mockClear();
  storage.getItem.mockClear();
};

const key = 'a key';

let result;

describe('savePermission', () => {
  beforeAll(async () => {
    storage.setItem.mockResolvedValue();
    await savePermission(key, 'true');
  });

  afterAll(cleanup);

  it('called setItem with the key and true', () => {
    expect(storage.setItem).toHaveBeenCalledWith(key, true);
  });
});

describe('checkPermission', () => {
  describe('when no default is provided', () => {
    describe('when the key is defined in build-config', () => {
      const knownKey = 'show_debug_data'; // see jest.init.js and common.keys for the known keys when testing.

      beforeAll(async () => {
        storage.getItem.mockResolvedValue(true);
        result = await checkPermission(knownKey);
      });

      afterAll(cleanup);

      it('called getItem with the knownKey and true', () => {
        expect(storage.getItem).toHaveBeenCalledWith(knownKey, true);
      });

      it('returned the correct value', () => {
        expect(result).toEqual(true);
      });
    });

    describe('when the key is not defined in build-config', () => {
      beforeAll(async () => {
        storage.getItem.mockResolvedValue(true);
        result = await checkPermission(key);
      });

      afterAll(cleanup);

      it('called getItem with the key and false', () => {
        expect(storage.getItem).toHaveBeenCalledWith(key, false);
      });

      it('returned the correct value', () => {
        expect(result).toEqual(true);
      });
    });
  });

  describe('when a default is provided', () => {
    const defaultValue = false;

    beforeAll(async () => {
      storage.getItem.mockResolvedValue(defaultValue);
      result = await checkPermission(key, defaultValue);
    });

    afterAll(cleanup);

    it('called getItem with the key and defaultValue', () => {
      expect(storage.getItem).toHaveBeenCalledWith(key, defaultValue);
    });

    it('returned the correct value', () => {
      expect(result).toEqual(defaultValue);
    });
  });
});
