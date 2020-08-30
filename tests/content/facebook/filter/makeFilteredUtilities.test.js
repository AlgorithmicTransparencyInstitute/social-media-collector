import getFiltersAndPermissions from 'content/facebook/filter/getFiltersAndPermissions';
import makeFilteredAdInfoApplicator from 'content/facebook/filter/makeFilteredAdInfoApplicator';
import makeFilteredSender from 'content/facebook/filter/makeFilteredSender';
import makeFilteredReporter from 'content/facebook/filter/makeFilteredReporter';

import makeFilteredUtilities from 'content/facebook/filter/makeFilteredUtilities';

jest.mock('content/facebook/filter/getFiltersAndPermissions');
jest.mock('content/facebook/filter/makeFilteredAdInfoApplicator');
jest.mock('content/facebook/filter/makeFilteredSender');
jest.mock('content/facebook/filter/makeFilteredReporter');

const filters = ['some', 'filters'];
const permisisons = ['some', 'permissions'];

const send = jest.fn();
const applyAdInfo = jest.fn();
const report = jest.fn();

const expected = { send, applyAdInfo, report };

let result;

beforeAll(async () => {
  getFiltersAndPermissions.mockResolvedValue({ filters, permisisons });
  makeFilteredSender.mockReturnValue(send);
  makeFilteredAdInfoApplicator.mockReturnValue(applyAdInfo);
  makeFilteredReporter.mockReturnValue(report);

  result = await makeFilteredUtilities();
});

it('returned the expected result', () => {
  expect(result).toEqual(expected);
});
