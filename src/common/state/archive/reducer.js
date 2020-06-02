import { ARCHIVE_INDEX } from 'common/keys';

export const INITIAL_STATE = {
  loading: false,
  saving: false,
  error: null,
  items: {},
  index: []
};

const loadArchive = state => ({
  ...state,
  loading: true
});

const loadArchiveSuccess = (state, { archive }) => ({
  ...state,
  loading: false,
  error: null,
  items: { ...archive },
  index: Object.keys(archive)
});

const loadArchiveFailed = (state, error) => ({
  ...state,
  loading: false,
  error
});

const saveArchive = state => ({
  ...state,
  saving: true
});

const saveArchiveSuccess = state => ({
  ...state,
  saving: false,
  error: null
});

const saveArchiveFailed = (state, error) => ({
  ...state,
  saving: false,
  error
});

const archiveChanged = (state, { archive: { [ARCHIVE_INDEX]: index, ...archive } }) => {
  const items = Object.keys(archive).reduce(
    (acc, elem) => {
      acc[elem] = { ...archive[elem] };
      return acc;
    },
    { ...state.items }
  );

  return {
    ...state,
    items,
    index: index || state.index
  };
};

const responses = {
  LOAD_ARCHIVE: loadArchive,
  LOAD_ARCHIVE_SUCCESS: loadArchiveSuccess,
  LOAD_ARCHIVE_FAILED: loadArchiveFailed,
  SAVE_ARCHIVE: saveArchive,
  SAVE_ARCHIVE_SUCCESS: saveArchiveSuccess,
  SAVE_ARCHIVE_FAILED: saveArchiveFailed,
  ARCHIVE_CHANGED: archiveChanged
};

const reducer = (state = INITIAL_STATE, { type, payload, meta }) => {
  if (typeof responses[type] === 'function') return responses[type](state, payload, meta);
  return state;
};

export default reducer;
