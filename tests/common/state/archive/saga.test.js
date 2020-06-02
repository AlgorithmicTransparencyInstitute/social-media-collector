/* eslint-disable jest/no-test-callback */
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import actions from 'common/state/archive/actions';
import * as archive from 'common/storage/archive';

import { load, save } from 'common/state/archive/saga';

jest.mock('common/storage/archive');

const items = ['some', 'archived', 'items'];

describe('load', () => {
  describe('when it works', () => {
    const it = sagaHelper(load());

    it('loads the archive', result => {
      expect(result).toEqual(call(archive.loadArchive));
      return items;
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.loadArchiveSuccess(items)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(load());
    const error = new Error('oops');

    it('loads the archive', result => {
      expect(result).toEqual(call(archive.loadArchive));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.loadArchiveFailed(error)));
    });
  });
});

describe('save', () => {
  describe('when it works', () => {
    const it = sagaHelper(save({ payload: { archive: items } }));

    it('saves the archive', result => {
      expect(result).toEqual(call(archive.saveArchive, items));
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.saveArchiveSuccess()));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(save({ payload: { archive: items } }));
    const error = new Error('oops');

    it('saves the archive', result => {
      expect(result).toEqual(call(archive.saveArchive, items));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.saveArchiveFailed(error)));
    });
  });
});
