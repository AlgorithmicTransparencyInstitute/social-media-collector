import { createActions } from 'redux-actions';

const actions = createActions({
  LOAD_ARCHIVE: () => undefined,
  LOAD_ARCHIVE_SUCCESS: archive => ({ archive }),
  LOAD_ARCHIVE_FAILED: /* istanbul ignore next */ error => error,
  SAVE_ARCHIVE: archive => ({ archive }),
  SAVE_ARCHIVE_SUCCESS: () => undefined,
  SAVE_ARCHIVE_FAILED: /* istanbul ignore next */ error => error,
  ARCHIVE_CHANGED: archive => ({ archive })
});

export default actions;
