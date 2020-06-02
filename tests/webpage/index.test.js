import webpage from 'webpage';

jest.mock('webpage/App');
jest.mock('react-redux');

const mockStore = {};
jest.mock('common/store', () => mockStore);

it('renders without crashing', () => {
  expect(JSON.stringify({ ...webpage, _reactInternalInstance: 'censored' })).toMatchSnapshot();
});
