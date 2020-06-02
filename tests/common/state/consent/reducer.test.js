import cc from 'camelcase';
import reducer, { INITIAL_STATE } from 'common/state/consent/reducer';
import { CURRENT_CONSENT_VERSION } from 'common/storage/consent';
import actions from 'common/state/consent/actions';

describe('initial state', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});

const version = 1;
const acceptedAt = new Date().getTime();
const viewedAt = new Date().getTime();
const error = new Error('oops');

describe('actions', () => {
  [
    ['LOAD_CONSENT', [], INITIAL_STATE, { ...INITIAL_STATE, loading: true }],
    [
      'LOAD_CONSENT_SUCCESS',
      [version, acceptedAt, viewedAt],
      { ...INITIAL_STATE, loading: true },
      {
        ...INITIAL_STATE,
        loading: false,
        version,
        acceptedAt,
        viewedAt,
        granted: 'old'
      }
    ],
    [
      'LOAD_CONSENT_SUCCESS',
      [0, acceptedAt, viewedAt],
      { ...INITIAL_STATE, loading: true },
      {
        ...INITIAL_STATE,
        loading: false,
        version: 0,
        acceptedAt,
        viewedAt,
        granted: 'none'
      }
    ],
    [
      'LOAD_CONSENT_SUCCESS',
      [CURRENT_CONSENT_VERSION, acceptedAt, viewedAt],
      { ...INITIAL_STATE, loading: true },
      {
        ...INITIAL_STATE,
        version: CURRENT_CONSENT_VERSION,
        acceptedAt,
        viewedAt,
        granted: 'current'
      }
    ],
    [
      'LOAD_CONSENT_SUCCESS',
      [],
      { ...INITIAL_STATE, loading: true },
      {
        ...INITIAL_STATE,
        granted: 'none'
      }
    ],
    [
      'LOAD_CONSENT_FAILED',
      [error],
      { ...INITIAL_STATE, loading: true },
      { ...INITIAL_STATE, loading: false, error }
    ],
    ['SAVE_CONSENT', [], INITIAL_STATE, { ...INITIAL_STATE, saving: true }],
    [
      'SAVE_CONSENT_SUCCESS',
      [acceptedAt],
      { ...INITIAL_STATE, saving: true, viewedAt },
      {
        ...INITIAL_STATE,
        viewedAt,
        saving: false,
        version: CURRENT_CONSENT_VERSION,
        acceptedAt,
        granted: 'current'
      }
    ],
    [
      'SAVE_CONSENT_FAILED',
      [error],
      { ...INITIAL_STATE, saving: true },
      { ...INITIAL_STATE, saving: false, error }
    ],
    ['VIEWED_CONSENT', [], INITIAL_STATE, { ...INITIAL_STATE, saving: true }],
    [
      'VIEWED_CONSENT_SUCCESS',
      [viewedAt],
      { ...INITIAL_STATE, saving: true },
      {
        ...INITIAL_STATE,
        viewedAt,
        saving: false
      }
    ],
    [
      'VIEWED_CONSENT_FAILED',
      [error],
      { ...INITIAL_STATE, saving: true },
      { ...INITIAL_STATE, saving: false, error }
    ],
    [
      'CONSENT_CHANGED',
      [version, acceptedAt, viewedAt],
      { ...INITIAL_STATE },
      {
        ...INITIAL_STATE,
        version,
        acceptedAt,
        viewedAt,
        granted: 'old'
      }
    ],
    [
      'CONSENT_CHANGED',
      [NaN, NaN, NaN],
      { ...INITIAL_STATE },
      {
        ...INITIAL_STATE,
        granted: 'none'
      }
    ]
  ].forEach(([key, params, initialState, expected]) => {
    const action = actions[cc(key)];

    it(`handles ${key}`, () => {
      expect(reducer(initialState, action(...params))).toEqual(expected);
    });
  });
});
