/* eslint-disable jest/no-test-callback */
import sagaHelper from 'redux-saga-testing';
import { all, call, put } from 'redux-saga/effects';
import actions from 'common/state/consent/actions';
import * as consent from 'common/storage/consent';

import { load, save, viewed } from 'common/state/consent/saga';

jest.mock('common/storage/consent');

const version = 1;
const acceptedAt = new Date().getTime();
const viewedAt = new Date().getTime();

describe('load', () => {
  describe('when it works', () => {
    const it = sagaHelper(load());

    it('checks the consent data', result => {
      expect(result).toEqual(
        all([
          call(consent.checkConsent),
          call(consent.getConsentAcceptedAt),
          call(consent.getConsentViewedAt)
        ])
      );
      return [version, acceptedAt, viewedAt];
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.loadConsentSuccess(version, acceptedAt, viewedAt)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(load());
    const error = new Error('oops');

    it('checks the consent data', result => {
      expect(result).toEqual(
        all([
          call(consent.checkConsent),
          call(consent.getConsentAcceptedAt),
          call(consent.getConsentViewedAt)
        ])
      );
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.loadConsentFailed(error)));
    });
  });
});

describe('save', () => {
  describe('when it works', () => {
    const timestamp = new Date().getTime();
    const it = sagaHelper(save());

    it('does the checks the consent', result => {
      expect(result).toEqual(call(consent.grantConsent));
      return timestamp;
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.saveConsentSuccess(timestamp)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(save());
    const error = new Error('oops');

    it('does the checks the consent', result => {
      expect(result).toEqual(call(consent.grantConsent));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.saveConsentFailed(error)));
    });
  });
});

describe('viewed', () => {
  describe('when it works', () => {
    const timestamp = new Date().getTime();
    const it = sagaHelper(viewed());

    it('sets the viewedAt date', result => {
      expect(result).toEqual(call(consent.viewedConsent));
      return timestamp;
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.viewedConsentSuccess(timestamp)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(viewed());
    const error = new Error('oops');

    it('does the checks the consent', result => {
      expect(result).toEqual(call(consent.viewedConsent));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.viewedConsentFailed(error)));
    });
  });
});
