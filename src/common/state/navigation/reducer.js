export const INITIAL_STATE = {
  transitioning: false,
  current: null,
  destination: null,
  error: null
};

const navigate = (state, { destination }) => ({
  ...state,
  transitioning: true,
  destination
});

const navigateSuccess = (state, { current }) => ({
  ...state,
  transitioning: false,
  error: null,
  destination: null,
  current
});

const navigateFailed = (state, error) => ({
  ...state,
  transitioning: false,
  error
});

const init = (state, { current }) => ({
  ...state,
  current
});

const responses = {
  NAVIGATE: navigate,
  NAVIGATE_SUCCESS: navigateSuccess,
  NAVIGATE_FAILED: navigateFailed,
  INIT: init
};

const reducer = (state = INITIAL_STATE, { type, payload, meta }) => {
  if (typeof responses[type] === 'function') return responses[type](state, payload, meta);
  return state;
};

export default reducer;
