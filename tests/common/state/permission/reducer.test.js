import cc from 'camelcase';
import reducer, { INITIAL_STATE, EMPTY_ITEM } from 'common/state/permission/reducer';
import actions from 'common/state/permission/actions';

describe('initial state', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});

const key = 'language';
const value = 'en';
const error = new Error('oops');

describe('actions', () => {
  [
    [
      'LOAD_PERMISSION',
      [key],
      INITIAL_STATE,
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, loading: true } }
    ],
    [
      'LOAD_PERMISSION_SUCCESS',
      [key, value],
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, loading: true } },
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, value } }
    ],
    [
      'LOAD_PERMISSION_FAILED',
      [key, error],
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, loading: true } },
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, error } }
    ],
    [
      'SAVE_PERMISSION',
      [key, value],
      INITIAL_STATE,
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, saving: true } }
    ],
    [
      'SAVE_PERMISSION_SUCCESS',
      [key, value],
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, saving: true } },
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, value } }
    ],
    [
      'SAVE_PERMISSION_FAILED',
      [key, error],
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, saving: true } },
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, error } }
    ],
    [
      'PERMISSION_CHANGED',
      [key, value],
      { ...INITIAL_STATE },
      { ...INITIAL_STATE, [key]: { ...EMPTY_ITEM, value } }
    ]
  ].forEach(([key, params, initialState, expected]) => {
    const action = actions[cc(key)];

    it(`handles ${key}`, () => {
      expect(reducer(initialState, action(...params))).toEqual(expected);
    });
  });
});
