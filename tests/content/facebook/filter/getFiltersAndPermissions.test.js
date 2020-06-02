import permission from 'content/facebook/filter/permission';
import * as shared from 'content/facebook/filter/shared';

import getFiltersAndPermissions from 'content/facebook/filter/getFiltersAndPermissions';

jest.mock('content/facebook/filter/permission');
jest.mock('content/facebook/filter/shared');

const showCollectionStatus = true;
const sharePublicUser = false;
const sharePublicPage = true;
const shareSponsored = true;
const shareAdTargeting = true;

const canSharePublicUser = jest.fn();
const canSharePublicPage = jest.fn();
const canShareSponsored = jest.fn();
const canShareAdTargeting = jest.fn();
const cannotShareAdTargeting = jest.fn();
const cannotShare = jest.fn();

const expected = {
  filters: {
    canSharePublicUser,
    canSharePublicPage,
    canShareSponsored,
    canShareAdTargeting,
    cannotShareAdTargeting,
    cannotShare
  },
  permissions: {
    showCollectionStatus,
    sharePublicUser,
    sharePublicPage,
    shareSponsored,
    shareAdTargeting
  }
};

let result;

beforeAll(async () => {
  permission.mockResolvedValue({
    showCollectionStatus,
    sharePublicUser,
    sharePublicPage,
    shareSponsored,
    shareAdTargeting
  });
  shared.shareablePublicUserPosts.mockReturnValue(canSharePublicUser);
  shared.shareablePublicPagePosts.mockReturnValue(canSharePublicPage);
  shared.shareableSponsoredPosts
    .mockReturnValueOnce(canShareSponsored)
    .mockReturnValueOnce(canShareAdTargeting)
    .mockReturnValueOnce(cannotShareAdTargeting);
  shared.unsharable.mockReturnValue(cannotShare);

  result = await getFiltersAndPermissions();
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
