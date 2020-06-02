import makeItemId from 'common/utils/makeItemId';
import * as uuid from 'uuid';

jest.mock('uuid');

const id = '12334567890';

beforeAll(() => {
  uuid.v4.mockReturnValue(id);
});

it('makes an item id', () => {
  expect(makeItemId()).toEqual(`item:${id}`);
});
