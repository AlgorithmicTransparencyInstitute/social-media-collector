const handler = jest.fn();

const makeHandler = jest.fn(() => handler);

export default makeHandler;
