import * as per from 'common/storage/permission';

import permission from 'content/facebook/filter/permission';

jest.mock('common/storage/permission');

const expected = {
  showCollectionStatus: true,
  sharePublicUser: true,
  sharePublicPage: true,
  shareSponsored: true,
  shareAdTargeting: true
};

let result;

beforeAll(async () => {
  per.checkPermission.mockResolvedValue(true);
  result = await permission();
});

it('returns the expected result', () => {
  expect(result).toEqual(expected);
});
