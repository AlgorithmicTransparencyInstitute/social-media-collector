import actions from 'common/state/consent/actions';
import { CONSENT, CONSENT_ACCEPTED_AT, CONSENT_VIEWED_AT } from 'common/keys';
import * as storage from 'common/storage';

import changeListener from 'common/state/consent/changeListener';

jest.mock('common/storage');
jest.mock('common/state/consent/actions');

const store = {
  dispatch: jest.fn()
};

describe('with lots of data', () => {
  const version = 1;
  const acceptedAt = new Date().getTime();
  const viewedAt = new Date().getTime();

  beforeAll(() => {
    actions.consentChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        [CONSENT]: version,
        [CONSENT_ACCEPTED_AT]: acceptedAt,
        [CONSENT_VIEWED_AT]: viewedAt
      })
    );

    changeListener(store);
  });

  it('called consentChanged', () => {
    expect(actions.consentChanged).toHaveBeenCalled();
  });
});

describe('with no data', () => {
  const version = undefined;
  const acceptedAt = undefined;
  const viewedAt = undefined;

  beforeAll(() => {
    actions.consentChanged = jest.fn();
    storage.onChanged.mockImplementation(async fn =>
      fn({
        [CONSENT]: version,
        [CONSENT_ACCEPTED_AT]: acceptedAt,
        [CONSENT_VIEWED_AT]: viewedAt
      })
    );

    changeListener(store);
  });

  it('called consentChanged', () => {
    expect(actions.consentChanged).not.toHaveBeenCalled();
  });
});
