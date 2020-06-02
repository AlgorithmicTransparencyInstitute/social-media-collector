import cc from 'camelcase';
import reducer, { INITIAL_STATE } from 'common/state/archive/reducer';
import actions from 'common/state/archive/actions';
import { ARCHIVE, ARCHIVE_INDEX } from 'common/keys';

describe('initial state', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});

const archive = {
  [`${ARCHIVE}_1`]: {
    id: '1',
    data: 'some first data'
  },
  [`${ARCHIVE}_2`]: {
    id: '2',
    data: 'some second data'
  },
  [`${ARCHIVE}_3`]: {
    id: '3',
    data: 'some third data'
  }
};
const index = Object.keys(archive);
const error = new Error('oops');

describe('actions', () => {
  [
    ['LOAD_ARCHIVE', [], INITIAL_STATE, { ...INITIAL_STATE, loading: true }],
    [
      'LOAD_ARCHIVE_SUCCESS',
      [archive],
      { ...INITIAL_STATE, loading: true },
      { ...INITIAL_STATE, loading: false, items: archive, index }
    ],
    [
      'LOAD_ARCHIVE_FAILED',
      [error],
      { ...INITIAL_STATE, loading: true },
      { ...INITIAL_STATE, loading: false, error }
    ],
    ['SAVE_ARCHIVE', [archive], INITIAL_STATE, { ...INITIAL_STATE, saving: true }],
    [
      'SAVE_ARCHIVE_SUCCESS',
      [archive],
      { ...INITIAL_STATE, saving: true },
      {
        ...INITIAL_STATE,
        saving: false
      }
    ],
    [
      'SAVE_ARCHIVE_FAILED',
      [error],
      { ...INITIAL_STATE, saving: true },
      { ...INITIAL_STATE, saving: false, error }
    ],
    [
      'ARCHIVE_CHANGED',
      [{ ...archive, [ARCHIVE_INDEX]: index }],
      {
        ...INITIAL_STATE,
        index: [`${ARCHIVE}_1`],
        items: { [`${ARCHIVE}_1`]: archive[`${ARCHIVE}_1`] }
      },
      {
        ...INITIAL_STATE,
        items: archive,
        index
      },
      'including index'
    ],
    [
      'ARCHIVE_CHANGED',
      [{ [`${ARCHIVE}_1`]: archive[`${ARCHIVE}_1`] }],
      {
        ...INITIAL_STATE,
        index: [`${ARCHIVE}_1`],
        items: { [`${ARCHIVE}_1`]: archive[`${ARCHIVE}_1`] }
      },
      {
        ...INITIAL_STATE,
        items: { [`${ARCHIVE}_1`]: archive[`${ARCHIVE}_1`] },
        index: [`${ARCHIVE}_1`]
      },
      'but not index'
    ]
  ].forEach(([key, params, initialState, expected, qualifier]) => {
    const action = actions[cc(key)];
    const label = qualifier ? `${key} (${qualifier})` : key;

    it(`handles ${label}`, () => {
      expect(reducer(initialState, action(...params))).toEqual(expected);
    });
  });
});
