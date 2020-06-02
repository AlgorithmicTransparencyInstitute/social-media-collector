import * as r from 'react';
import * as rr from 'react-redux';
import actions from 'common/state/preference/actions';

import usePreference from 'common/hooks/usePreference';

jest.mock('react');
jest.mock('react-redux');
jest.mock('common/state/preference/actions');

const mockDispatch = jest.fn();
const loadPreference = jest.fn();
const savePreference = jest.fn();

const storageKey = 'some-key';

const doTest = (state, expected) => {
  const evt = { target: { value: 'some-value' } };

  let result;

  beforeAll(() => {
    actions.loadPreference = jest.fn(() => ({ type: 'load-preference' }));
    actions.savePreference = jest.fn(() => ({ type: 'save-preference' }));
    rr.useSelector.mockImplementation(fn => fn(state));
    rr.useDispatch.mockReturnValue(mockDispatch);
    r.useCallback
      .mockImplementationOnce(f => {
        f(evt);
        return savePreference;
      })
      .mockImplementationOnce(f => {
        f();
        return loadPreference;
      });
    r.useEffect.mockImplementation(f => f());
    result = usePreference(storageKey);
  });

  it('returns the expected result', () => {
    expect(result).toEqual(expected);
  });
};

beforeAll(() => {
  rr.useDispatch.mockImplementation(() => mockDispatch);
  actions.loadPreference = jest.fn();
});

[
  ['preference is not yet loaded', undefined, ''],
  ['preference is loaded', { value: 'some value' }, 'some value']
].forEach(([label, v, selected]) => {
  describe(`when ${label}`, () => {
    doTest({ preference: { [storageKey]: v } }, { selected, savePreference });
  });
});
