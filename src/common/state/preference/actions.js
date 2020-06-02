import { createActions } from 'redux-actions';

const actions = createActions({
  LOAD_PREFERENCE: key => ({ key }),
  LOAD_PREFERENCE_SUCCESS: (key, value) => ({ key, value }),
  LOAD_PREFERENCE_FAILED: [(key, error) => error, (key, _error) => ({ key })],
  SAVE_PREFERENCE: (key, value) => ({ key, value }),
  SAVE_PREFERENCE_SUCCESS: (key, value) => ({ key, value }),
  SAVE_PREFERENCE_FAILED: [(key, error) => error, (key, _error) => ({ key })],
  PREFERENCE_CHANGED: (key, value) => ({ key, value })
});

export default actions;
