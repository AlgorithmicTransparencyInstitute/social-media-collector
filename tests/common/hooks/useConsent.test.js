import * as r from 'react';
import * as rr from 'react-redux';
import actions from 'common/state/consent/actions';

import useConsent from 'common/hooks/useConsent';

jest.mock('react');
jest.mock('react-redux');
jest.mock('common/state/consent/actions');

const mockDispatch = jest.fn();
const loadConsent = jest.fn();
const saveConsent = jest.fn();
const viewedConsent = jest.fn();

const doTest = (state, expected) => {
  let result;

  beforeAll(() => {
    actions.loadConsent = jest.fn(() => ({ type: 'load-consent' }));
    actions.saveConsent = jest.fn(() => ({ type: 'save-consent' }));
    actions.viewedConsent = jest.fn(() => ({ type: 'viewed-consent' }));

    rr.useSelector.mockImplementation(fn => fn(state));
    rr.useDispatch.mockReturnValue(mockDispatch);
    r.useCallback
      .mockImplementationOnce(f => {
        f();
        return loadConsent;
      })
      .mockImplementationOnce(f => {
        f();
        return saveConsent;
      })
      .mockImplementationOnce(f => {
        f();
        return viewedConsent;
      });
    r.useEffect.mockImplementation(f => f());
    result = useConsent();
  });

  it('returns the expected result', () => {
    expect(result).toEqual(expected);
  });
};

beforeAll(() => {
  rr.useDispatch.mockImplementation(() => mockDispatch);
  actions.loadConsent = jest.fn();
});

const vAt = 1580357035847;
const gAt = 1580357071898;

[
  ['consent is not yet loaded', null, null, null],
  ['granted is none', 'none', null, null],
  ['granted is old', 'old', gAt, vAt],
  ['granted is current', 'current', gAt, vAt]
].forEach(([label, granted, acceptedAt, viewedAt]) => {
  describe(`when ${label}`, () => {
    doTest(
      { consent: { granted, acceptedAt, viewedAt } },
      { granted, acceptedAt, viewedAt, saveConsent, viewedConsent }
    );
  });
});
