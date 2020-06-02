export const INITIAL_STATE = {};
export const EMPTY_ITEM = {
  loading: false,
  saving: false,
  error: null,
  value: null
};

const keyState = (key, state) => state[key] || EMPTY_ITEM;

const loadPermission = (state, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    loading: true
  }
});

const loadPermissionSuccess = (state, { key, value }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    loading: false,
    error: null,
    value
  }
});

const loadPermissionFailed = (state, error, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    loading: false,
    error
  }
});

const savePermission = (state, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    saving: true
  }
});

const savePermissionSuccess = (state, { key, value }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    saving: false,
    error: null,
    value
  }
});

const savePermissionFailed = (state, error, { key }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    saving: false,
    error
  }
});

const permissionChanged = (state, { key, value }) => ({
  ...state,
  [key]: {
    ...keyState(key, state),
    value
  }
});

const responses = {
  LOAD_PERMISSION: loadPermission,
  LOAD_PERMISSION_SUCCESS: loadPermissionSuccess,
  LOAD_PERMISSION_FAILED: loadPermissionFailed,
  SAVE_PERMISSION: savePermission,
  SAVE_PERMISSION_SUCCESS: savePermissionSuccess,
  SAVE_PERMISSION_FAILED: savePermissionFailed,
  PERMISSION_CHANGED: permissionChanged
};

const reducer = (state = INITIAL_STATE, { type, payload, meta }) => {
  if (typeof responses[type] === 'function') return responses[type](state, payload, meta);
  return state;
};

export default reducer;
