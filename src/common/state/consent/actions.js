import { createActions } from 'redux-actions';

const actions = createActions({
  LOAD_CONSENT: () => undefined,
  LOAD_CONSENT_SUCCESS: (version, acceptedAt, viewedAt) => ({
    version,
    acceptedAt,
    viewedAt
  }),
  LOAD_CONSENT_FAILED: /* istanbul ignore next */ error => error,
  VIEWED_CONSENT: () => undefined,
  VIEWED_CONSENT_SUCCESS: viewedAt => ({ viewedAt }),
  VIEWED_CONSENT_FAILED: /* istanbul ignore next */ error => error,
  SAVE_CONSENT: () => undefined,
  SAVE_CONSENT_SUCCESS: acceptedAt => ({ acceptedAt }),
  SAVE_CONSENT_FAILED: /* istanbul ignore next */ error => error,
  CONSENT_CHANGED: (version, acceptedAt, viewedAt) => ({
    version,
    acceptedAt,
    viewedAt
  })
});

export default actions;
