import {
  shareablePublicUserPosts,
  shareablePublicPagePosts,
  shareableSponsoredPosts,
  unsharable
} from 'content/facebook/filter/shared';

describe('shareablePublicPagePosts', () => {
  const posts = [
    { isPublic: true, id: 1, isUserPost: false },
    { isPublic: true, id: 2, isUserPost: true },
    { isPublic: false, id: 3, isUserPost: true },
    { isPublic: true, id: 4, isProcessed: true, isUserPost: true }
  ];

  describe('can share is true', () => {
    const expected = [posts[0]];

    it('filters the posts correctly', () => {
      expect(posts.filter(shareablePublicPagePosts(true))).toEqual(expected);
    });
  });

  describe('can share is false', () => {
    const expected = [];

    it('filters the posts correctly', () => {
      expect(posts.filter(shareablePublicPagePosts(false))).toEqual(expected);
    });
  });
});

describe('shareablePublicUserPosts', () => {
  const posts = [
    { isPublic: true, id: 1, isUserPost: true },
    { isPublic: true, id: 2, isUserPost: false },
    { isPublic: false, id: 3, isUserPost: false },
    { isPublic: true, id: 4, isProcessed: true, isUserPost: false }
  ];

  describe('can share is true', () => {
    const expected = [posts[0]];

    it('filters the posts correctly', () => {
      expect(posts.filter(shareablePublicUserPosts(true))).toEqual(expected);
    });
  });

  describe('can share is false', () => {
    const expected = [];

    it('filters the posts correctly', () => {
      expect(posts.filter(shareablePublicUserPosts(false))).toEqual(expected);
    });
  });
});

describe('shareableSponsoredPosts', () => {
  const posts = [
    { isSponsored: true, id: 1 },
    { isSponsored: false, id: 2 },
    { isSponsored: true, id: 3, isProcessed: true }
  ];

  describe('can share is true', () => {
    const expected = [posts[0]];

    it('filters the posts correctly', () => {
      expect(posts.filter(shareableSponsoredPosts(true))).toEqual(expected);
    });
  });

  describe('can share is false', () => {
    const expected = [];

    it('filters the posts correctly', () => {
      expect(posts.filter(shareableSponsoredPosts(false))).toEqual(expected);
    });
  });
});

describe('unsharable', () => {
  const posts = [
    { isPublic: true, isSponsored: true, id: 1 },
    { isPublic: false, isSponsored: false, id: 2 },
    { isPublic: true, isSponsored: false, id: 3, isUserPost: true },
    { isPublic: true, isSponsored: false, id: 4, isUserPost: false },
    { isPublic: false, isSponsored: false, id: 5, isProcessed: true }
  ];

  describe('all true', () => {
    const permissions = {
      sharePublicUser: true,
      sharePublicPage: true,
      shareSponsored: true
    };

    const expected = [posts[1]];

    it('filters the posts correctly', () => {
      expect(posts.filter(unsharable(permissions))).toEqual(expected);
    });
  });

  describe('all false', () => {
    const permissions = {
      sharePublicUser: false,
      sharePublicPage: false,
      shareSponsored: false
    };
    const expected = posts.slice(0, -1);

    it('filters the posts correctly', () => {
      expect(posts.filter(unsharable(permissions))).toEqual(expected);
    });
  });
});
