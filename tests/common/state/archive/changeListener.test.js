import actions from 'common/state/archive/actions';
import { ARCHIVE, ARCHIVE_INDEX } from 'common/keys';
import * as storage from 'common/storage';

import changeListener from 'common/state/archive/changeListener';

jest.mock('common/storage');
jest.mock('common/state/archive/actions');

const store = {
  dispatch: jest.fn()
};

describe('when archive changed', () => {
  const i1 = `${ARCHIVE}_1`;
  const i2 = `${ARCHIVE}_2`;
  const i3 = `${ARCHIVE}_3`;

  const archive = {
    [i1]: {
      id: '1',
      data: 'some first data'
    },
    [i2]: {
      id: '2',
      data: 'some second data'
    },
    [i3]: {
      id: '3',
      data: 'some third data'
    }
  };
  const index = Object.keys(archive);

  beforeAll(() => {
    actions.archiveChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        [ARCHIVE_INDEX]: index,
        [i1]: archive[i1]
      })
    );

    changeListener(store);
  });

  it('called archiveChanged', () => {
    expect(actions.archiveChanged).toHaveBeenCalled();
  });
});

describe('when something else changed', () => {
  beforeAll(() => {
    actions.archiveChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn => fn({ somethingElse: 'data' }));

    changeListener(store);
  });

  it('did not call archiveChanged', () => {
    expect(actions.archiveChanged).not.toHaveBeenCalled();
  });
});
