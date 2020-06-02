import actions from 'common/state/permission/actions';
import { USER_SHARE_INSTALLATION_ID } from 'common/keys';
import * as storage from 'common/storage';

import changeListener from 'common/state/permission/changeListener';

jest.mock('common/storage');
jest.mock('common/state/permission/actions');

const store = {
  dispatch: jest.fn()
};

describe('when a known permission changed', () => {
  const id = 'abcd1234';

  beforeAll(() => {
    actions.permissionChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        [USER_SHARE_INSTALLATION_ID]: id
      })
    );

    changeListener(store);
  });

  it('called permissionChanged', () => {
    expect(actions.permissionChanged).toHaveBeenCalled();
  });
});

describe('when an unknown entry changed', () => {
  const value = 'whatever';

  beforeAll(() => {
    actions.permissionChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        not_a_real_key: value
      })
    );

    changeListener(store);
  });

  it('did not call permissionChanged', () => {
    expect(actions.permissionChanged).not.toHaveBeenCalled();
  });
});
