import actions from 'common/state/preference/actions';
import { PREF_COUNTRY, PREF_LANGUAGE } from 'common/keys';
import * as storage from 'common/storage';

import changeListener from 'common/state/preference/changeListener';

jest.mock('common/storage');
jest.mock('common/state/preference/actions');

const store = {
  dispatch: jest.fn()
};

describe('when country changed', () => {
  const country = 'AU';

  beforeAll(() => {
    actions.preferenceChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        [PREF_COUNTRY]: country
      })
    );

    changeListener(store);
  });

  it('called preferenceChanged', () => {
    expect(actions.preferenceChanged).toHaveBeenCalled();
  });
});

describe('when langauge changed', () => {
  const language = 'en';

  beforeAll(() => {
    actions.preferenceChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        [PREF_LANGUAGE]: language
      })
    );

    changeListener(store);
  });

  it('called preferenceChanged', () => {
    expect(actions.preferenceChanged).toHaveBeenCalled();
  });
});

describe('when neither langauge nor country changed', () => {
  beforeAll(() => {
    actions.preferenceChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn => fn({}));

    changeListener(store);
  });

  it('did not call preferenceChanged', () => {
    expect(actions.preferenceChanged).not.toHaveBeenCalled();
  });
});
