import * as r from 'react';
import * as rr from 'react-redux';
import actions from 'common/state/permission/actions';

import usePermission from 'common/hooks/usePermission';

jest.mock('react');
jest.mock('react-redux');
jest.mock('common/state/permission/actions');

const mockDispatch = jest.fn();
const loadPermission = jest.fn();
const savePermission = jest.fn();

const storageKey = 'some-key';
const defaultValue = true;

const doTest = (state, expected) => {
  const evt = { target: { checked: true } };

  let result;

  beforeAll(() => {
    actions.loadPermission = jest.fn(() => ({ type: 'load-permission' }));
    actions.savePermission = jest.fn(() => ({ type: 'save-permission' }));
    rr.useSelector.mockImplementation(fn => fn(state));
    rr.useDispatch.mockReturnValue(mockDispatch);
    r.useCallback
      .mockImplementationOnce(f => {
        f(evt);
        return savePermission;
      })
      .mockImplementationOnce(f => {
        f();
        return loadPermission;
      });
    r.useEffect.mockImplementation(f => f());
    result = usePermission(storageKey, defaultValue);
  });

  it('returns the expected result', () => {
    expect(result).toEqual(expected);
  });
};

beforeAll(() => {
  rr.useDispatch.mockImplementation(() => mockDispatch);
  actions.loadPermission = jest.fn();
});

[
  ['permission is not yet loaded', undefined, null],
  ['permission is loaded', { value: true }, true]
].forEach(([label, v, checked]) => {
  describe(`when ${label}`, () => {
    doTest({ permission: { [storageKey]: v } }, { checked, savePermission });
  });
});
