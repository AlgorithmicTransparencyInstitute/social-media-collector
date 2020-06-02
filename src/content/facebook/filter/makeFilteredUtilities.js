import getFiltersAndPermissions from './getFiltersAndPermissions';
import makeFilteredAdInfoApplicator from './makeFilteredAdInfoApplicator';
import makeFilteredSender from './makeFilteredSender';
import makeFilteredReporter from './makeFilteredReporter';

const makeFilteredUtilities = async version => {
  const { filters, permissions } = await getFiltersAndPermissions();

  return {
    send: makeFilteredSender({ filters }),
    applyFilters: makeFilteredAdInfoApplicator({ filters, version }),
    report: makeFilteredReporter({ filters, permissions, version })
  };
};

export default makeFilteredUtilities;
