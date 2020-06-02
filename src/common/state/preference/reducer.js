export const INITIAL_STATE = {};
export const EMPTY_ITEM = {
  loading: false,
  saving: false,
  error: null,
  value: null
};

const keyState = (key, state) => state[key] || EMPTY_ITEM;

const loadPreference = (state, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    loading: true
  }
});

const loadPreferenceSuccess = (state, { key, value }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    loading: false,
    error: null,
    value
  }
});

const loadPreferenceFailed = (state, error, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    loading: false,
    error
  }
});

const savePreference = (state, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    saving: true
  }
});

const savePreferenceSuccess = (state, { key, value }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    saving: false,
    error: null,
    value
  }
});

const savePreferenceFailed = (state, error, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    saving: false,
    error
  }
});

const preferenceChanged = (state, { key, value }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    value
  }
});

const responses = {
  LOAD_PREFERENCE: loadPreference,
  LOAD_PREFERENCE_SUCCESS: loadPreferenceSuccess,
  LOAD_PREFERENCE_FAILED: loadPreferenceFailed,
  SAVE_PREFERENCE: savePreference,
  SAVE_PREFERENCE_SUCCESS: savePreferenceSuccess,
  SAVE_PREFERENCE_FAILED: savePreferenceFailed,
  PREFERENCE_CHANGED: preferenceChanged
};

const reducer = (state = INITIAL_STATE, { type, payload, meta }) => {
  if (typeof responses[type] === 'function') return responses[type](state, payload, meta);
  return state;
};

export default reducer;
