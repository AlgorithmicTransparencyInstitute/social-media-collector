import makePermissionedPostTagger from './makePermissionedPostTagger';

const reportPosts = async (posts, permissions, version) => {
  const report = makePermissionedPostTagger(permissions, version);

  posts.forEach(report);
};

export default reportPosts;
