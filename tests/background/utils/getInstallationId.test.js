import * as uuid from 'uuid';
import * as storage from 'common/storage';
import { INSTALLATION_ID } from 'common/keys';

import getInstallationId from 'background/utils/getInstallationId';

jest.mock('uuid');
jest.mock('common/storage');

const id = 'abcd1234';
const expected = `ati:${id}`;

let result;

const cleanup = () => {
  storage.getItem.mockClear();
  storage.setItem.mockClear();
  uuid.v4.mockClear();
};

describe('when there is no installation id stored', () => {
  beforeAll(async () => {
    storage.getItem.mockResolvedValue(undefined);
    storage.setItem.mockResolvedValue();
    uuid.v4.mockReturnValue(id);
    result = await getInstallationId();
  });

  afterAll(cleanup);

  it('called getItem with INSTALLATION_ID', () => {
    expect(storage.getItem).toHaveBeenCalledWith(INSTALLATION_ID);
  });

  it('called uuid.v4', () => {
    expect(uuid.v4).toHaveBeenCalled();
  });

  it('called setItem with INSTALLATION_ID and the id', () => {
    expect(storage.setItem).toHaveBeenCalledWith(INSTALLATION_ID, expected);
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('when there is an installation id stored', () => {
  beforeAll(async () => {
    storage.getItem.mockResolvedValue(expected);
    result = await getInstallationId();
  });

  afterAll(cleanup);

  it('called getItem with INSTALLATION_ID', () => {
    expect(storage.getItem).toHaveBeenCalledWith(INSTALLATION_ID);
  });

  it('did not call uuid.v4', () => {
    expect(uuid.v4).not.toHaveBeenCalled();
  });

  it('did not call setItem', () => {
    expect(storage.setItem).not.toHaveBeenCalled();
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});
