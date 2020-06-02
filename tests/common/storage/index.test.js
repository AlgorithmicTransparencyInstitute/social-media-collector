import {
  getItem,
  getItems,
  setItem,
  removeItem,
  clearAll,
  onChanged,
  onChangedKey
} from 'common/storage';
import * as crypto from 'common/utils/crypto';
import decodeNewValues from 'common/storage/utils/decodeNewValues';
import commonListener from 'common/storage/utils/commonListener';

jest.mock('common/utils/crypto');
jest.mock('common/storage/utils/decodeNewValues');
jest.mock('common/storage/utils/commonListener');

const key = 'a key';

const cleanup = () => {
  chrome.storage.local.get.mockReset();
  chrome.storage.local.set.mockReset();
  chrome.storage.local.remove.mockReset();
  chrome.storage.local.clear.mockReset();
  crypto.decode.mockClear();
  crypto.encode.mockClear();
  decodeNewValues.mockClear();
};

let result;

describe('getItem', () => {
  describe('when there is a value to get', () => {
    const expected = 'some value';
    const value = 'some encoded value';

    beforeAll(async () => {
      crypto.decode.mockReturnValue(expected);
      chrome.storage.local.get = jest.fn((_key, f) => f({ [key]: value }));
      result = await getItem(key);
    });

    afterAll(cleanup);

    it('returned the expected value', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('when there is no value to get', () => {
    const defaultValue = 'a default value';

    beforeAll(async () => {
      crypto.decode.mockReturnValue(undefined);
      chrome.storage.local.get = jest.fn((_key, f) => f({}));
      result = await getItem(key, defaultValue);
    });

    afterAll(cleanup);

    it('returned the default value', () => {
      expect(result).toEqual(defaultValue);
    });
  });
});

describe('getItems', () => {
  const key = 'some key';
  const encodedValue = 'some encoded value';
  const value = 'some decoded value';
  const expected = { [key]: value };

  beforeAll(async () => {
    crypto.decode.mockReturnValue(value);
    chrome.storage.local.get = jest.fn((_keys, f) => f({ [key]: encodedValue }));
    result = await getItems([key]);
  });

  afterAll(cleanup);

  it('returned the expected value', () => {
    expect(result).toEqual(expected);
  });
});

describe('setItem', () => {
  const value = 'some value';
  const encodedValue = 'some encoded value';

  describe('when given a key and value', () => {
    beforeAll(async () => {
      crypto.encode.mockReturnValue(encodedValue);
      chrome.storage.local.set = jest.fn((_key, f) => f());
      await setItem(key, value);
    });

    afterAll(cleanup);

    it('called set with the correct values', () => {
      expect(chrome.storage.local.set).toHaveBeenCalledWith(
        { [key]: encodedValue },
        expect.any(Function)
      );
    });
  });

  describe('when given a key: value pair', () => {
    beforeAll(async () => {
      crypto.encode.mockReturnValue(encodedValue);
      chrome.storage.local.set = jest.fn((_key, f) => f());
      await setItem({ [key]: value });
    });

    afterAll(cleanup);

    it('called set with the correct values', () => {
      expect(chrome.storage.local.set).toHaveBeenCalledWith(
        { [key]: encodedValue },
        expect.any(Function)
      );
    });
  });
});

describe('removeItem', () => {
  describe('when given a single key', () => {
    beforeAll(async () => {
      chrome.storage.local.remove = jest.fn((_key, f) => f());
      await removeItem(key);
    });

    afterAll(cleanup);

    it('called remove with the correct values', () => {
      expect(chrome.storage.local.remove).toHaveBeenCalledWith([key], expect.any(Function));
    });
  });

  describe('when given an array of keys', () => {
    beforeAll(async () => {
      chrome.storage.local.remove = jest.fn((_key, f) => f());
      await removeItem([key]);
    });

    afterAll(cleanup);

    it('called remove with the correct values', () => {
      expect(chrome.storage.local.remove).toHaveBeenCalledWith([key], expect.any(Function));
    });
  });
});

describe('clearAll', () => {
  beforeAll(async () => {
    chrome.storage.local.clear = jest.fn(f => f());
    await clearAll();
  });

  afterAll(cleanup);

  it('called clear with the correct values', () => {
    expect(chrome.storage.local.clear).toHaveBeenCalledWith(expect.any(Function));
  });
});

describe('onChanged', () => {
  describe('when there are changes', () => {
    const fn = jest.fn().mockResolvedValue();
    const changes = { test: 'some changes' };

    beforeAll(() => {
      decodeNewValues.mockReturnValue(jest.fn(() => ({})));
      commonListener.mockImplementation(f => f(changes));
      onChanged(fn);
    });

    afterAll(cleanup);

    it('called the function', () => {
      expect(fn).toHaveBeenCalled();
    });
  });

  describe('when there are no changes', () => {
    const fn = jest.fn().mockResolvedValue();
    const changes = null;

    beforeAll(() => {
      decodeNewValues.mockReturnValue(jest.fn(() => ({})));
      commonListener.mockImplementation(f => f(changes));
      onChanged(fn);
    });

    afterAll(cleanup);

    it('did not call the function', () => {
      expect(fn).not.toHaveBeenCalled();
    });
  });
});

describe('onChangedKey', () => {
  const key = 'test';

  describe("when there is a change to the key's value", () => {
    const fn = jest.fn().mockResolvedValue();
    const changes = { [key]: 'some changes' };

    beforeAll(() => {
      commonListener.mockImplementation(f => f(changes));
      onChangedKey(key, fn);
    });

    afterAll(cleanup);

    it('called the function', () => {
      expect(fn).toHaveBeenCalled();
    });
  });

  describe("when there are no changes to the key's value", () => {
    const fn = jest.fn().mockResolvedValue();
    const changes = {};

    beforeAll(() => {
      commonListener.mockImplementation(f => f(changes));
      onChangedKey(key, fn);
    });

    afterAll(cleanup);

    it('did not call the function', () => {
      expect(fn).not.toHaveBeenCalled();
    });
  });

  describe('when there are no changes at all', () => {
    const fn = jest.fn().mockResolvedValue();
    const changes = null;

    beforeAll(() => {
      commonListener.mockImplementation(f => f(changes));
      onChangedKey(key, fn);
    });

    afterAll(cleanup);

    it('did not call the function', () => {
      expect(fn).not.toHaveBeenCalled();
    });
  });
});
