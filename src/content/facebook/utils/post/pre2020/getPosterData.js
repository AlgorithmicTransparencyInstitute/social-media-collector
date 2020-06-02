import getPosterLink from './getPosterLink';

const getPosterData = element => {
  const link = getPosterLink(element);
  if (!link) return {};

  const url = link.getAttribute('href');
  const isPagePost = link.pathname.endsWith('/');
  const postedBy = isPagePost ? link.pathname.slice(1, -1) : link.pathname.slice(1);

  return { url, isUserPost: !isPagePost, postedBy };
};

export default getPosterData;
