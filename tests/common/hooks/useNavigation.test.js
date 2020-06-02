import * as r from 'react';
import * as rr from 'react-redux';
import actions from 'common/state/navigation/actions';

import useNavigation from 'common/hooks/useNavigation';

jest.mock('react');
jest.mock('react-redux');
jest.mock('common/state/navigation/actions');

const mockDispatch = jest.fn();

const doTest = (state, expected) => {
  let result;

  beforeAll(() => {
    actions.navigate = jest.fn(destination => ({
      type: 'NAVIGATE',
      paylod: { destination }
    }));
    rr.useSelector.mockImplementation(fn => fn(state));
    rr.useDispatch.mockReturnValue(mockDispatch);
    r.useCallback.mockImplementation(f => {
      f();
    });
    result = useNavigation();
  });

  it('returns the expected result', () => {
    expect(result).toEqual(expected);
  });
};

[
  ['there is no current tab', null],
  ['there is a current tab', 'some-tab']
].forEach(([label, current]) => {
  describe(`when ${label}`, () => {
    doTest({ navigation: { current } }, { current, goto: expect.func });
  });
});
