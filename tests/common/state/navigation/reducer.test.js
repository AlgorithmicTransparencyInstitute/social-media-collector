import cc from 'camelcase';
import reducer, { INITIAL_STATE } from 'common/state/navigation/reducer';
import actions from 'common/state/navigation/actions';

describe('initial state', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});

const current = 'some-tab';
const destination = 'some-new-tab';
const error = new Error('oops');

describe('actions', () => {
  [
    [
      'NAVIGATE',
      [destination],
      INITIAL_STATE,
      { ...INITIAL_STATE, transitioning: true, destination }
    ],
    [
      'NAVIGATE_SUCCESS',
      [current],
      { ...INITIAL_STATE, transitioning: true, destination },
      { ...INITIAL_STATE, transitioning: false, destination: null, current }
    ],
    [
      'NAVIGATE_FAILED',
      [error],
      { ...INITIAL_STATE, transitioning: true, destination },
      { ...INITIAL_STATE, transitioning: false, destination, error }
    ],
    ['INIT', [current], INITIAL_STATE, { ...INITIAL_STATE, current }]
  ].forEach(([key, params, initialState, expected]) => {
    const action = actions[cc(key)];

    it(`handles ${key}`, () => {
      expect(reducer(initialState, action(...params))).toEqual(expected);
    });
  });
});
