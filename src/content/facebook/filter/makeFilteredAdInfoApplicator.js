import {
  makeFilteredApplyAdTargeting,
  makeFilteredApplyAdId
} from '../utils/post/makeFilteredProcess';

const makeFilteredAdInfoApplicator = ({
  filters: { canShareAdTargeting, cannotShareAdTargeting },
  version
}) => {
  const applyAdTargeting = makeFilteredApplyAdTargeting(canShareAdTargeting, version);
  const applyAdId = makeFilteredApplyAdId(cannotShareAdTargeting, version);

  return async posts => Promise.all([applyAdTargeting(posts), applyAdId(posts)]);
};

export default makeFilteredAdInfoApplicator;
