import { createActions } from 'redux-actions';

const actions = createActions({
  LOAD_PERMISSION: (key, defaultValue) => ({ key, defaultValue }),
  LOAD_PERMISSION_SUCCESS: (key, value) => ({ key, value }),
  LOAD_PERMISSION_FAILED: [(key, error) => error, (key, _error) => ({ key })],
  SAVE_PERMISSION: (key, value) => ({ key, value }),
  SAVE_PERMISSION_SUCCESS: (key, value) => ({ key, value }),
  SAVE_PERMISSION_FAILED: [(key, error) => error, (key, _error) => ({ key })],
  PERMISSION_CHANGED: (key, value) => ({ key, value })
});

export default actions;
