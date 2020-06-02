const sagaMiddleware = {
  run: jest.fn()
};

const createSagaMiddleware = jest.fn(() => sagaMiddleware);

export default createSagaMiddleware;
