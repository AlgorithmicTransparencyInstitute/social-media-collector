import * as r from 'react';
import * as rr from 'react-redux';
import actions from 'common/state/archive/actions';

import useArchive from 'common/hooks/useArchive';

jest.mock('react');
jest.mock('react-redux');
jest.mock('common/state/archive/actions');

const mockDispatch = jest.fn();
const loadArchive = jest.fn();

const id = 'some-id';
const oldest = new Date().getTime();
const observedAt = oldest;
const loading = false;
const saving = false;

const doTest = (label, state, expected) => {
  describe(`when ${label}`, () => {
    let result;

    beforeAll(() => {
      actions.loadArchive.mockImplementation(() => ({ type: 'load-archive' }));
      rr.useSelector.mockImplementation(fn => fn(state));
      rr.useDispatch.mockReturnValue(mockDispatch);
      r.useCallback.mockImplementation(() => {
        return loadArchive;
      }, []);
      r.useEffect.mockImplementation(f => f());
      result = useArchive();
    });

    it('returns the expected result', () => {
      expect(result).toEqual(expected);
    });
  });
};

beforeAll(() => {
  rr.useDispatch.mockImplementation(() => mockDispatch);
  actions.loadArchive = jest.fn();
});

[
  ['archive is empty', {}],
  ['archive an items', { [id]: { id, observedAt } }],
  [
    'archive some items',
    {
      [id]: { id, observedAt },
      '2': { id: '2', observedAt }
    }
  ]
].forEach(([label, items]) => {
  const index = Object.keys(items);
  const state = { archive: { items, index, loading, saving } };
  const od = index && index.length ? items[id].observedAt : undefined;
  const expected = { items, index, loading, saving, oldest: od };

  describe(`when ${label}`, () => {
    doTest(label, state, expected);
  });
});
