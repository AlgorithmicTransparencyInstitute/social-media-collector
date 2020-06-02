import toolbar from 'toolbar';

jest.mock('toolbar/App');
jest.mock('react-redux');

const mockStore = {};
jest.mock('common/store', () => mockStore);

it('renders without crashing', () => {
  expect(JSON.stringify({ ...toolbar, _reactInternalInstance: 'censored' })).toMatchSnapshot();
});
