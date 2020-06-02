import { makeFilteredPostReporter } from '../utils/post/makeFilteredProcess';

/* istanbul ignore next */
const noop = () => {};

const makeFilteredReporter = ({
  filters: { canShareSponsored, canSharePublicUser, canSharePublicPage, cannotShare },
  permissions: {
    showCollectionStatus,
    sharePublicUser,
    sharePublicPage,
    shareSponsored,
    shareAdTargeting
  },
  version
}) => {
  if (!showCollectionStatus) return noop;

  const reportSponsored = makeFilteredPostReporter(canShareSponsored, version);
  const reportPublicUser = makeFilteredPostReporter(canSharePublicUser, version);
  const reportPublicPage = makeFilteredPostReporter(canSharePublicPage, version);
  const reportUnshared = makeFilteredPostReporter(cannotShare, version);

  return posts => {
    reportSponsored(posts, { shareSponsored, shareAdTargeting });
    reportPublicUser(posts, { sharePublicUser });
    reportPublicPage(posts, { sharePublicPage });
    reportUnshared(posts, {});
  };
};

export default makeFilteredReporter;
