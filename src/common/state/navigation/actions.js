import { createActions } from 'redux-actions';

const actions = createActions({
  NAVIGATE: destination => ({ destination }),
  NAVIGATE_SUCCESS: current => ({ current }),
  NAVIGATE_FAILED: /* istanbul ignore next */ error => error,
  INIT: current => ({ current })
});

export default actions;
