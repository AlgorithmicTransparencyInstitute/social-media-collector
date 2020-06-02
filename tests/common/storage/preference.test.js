import * as storage from 'common/storage';

import { getPreference, savePreference } from 'common/storage/preference';

jest.mock('common/storage');

describe('savePreference', () => {
  it('is setItem', () => {
    expect(savePreference).toBe(storage.setItem);
  });
});

describe('getPreference', () => {
  it('is getItem', () => {
    expect(getPreference).toBe(storage.getItem);
  });
});
