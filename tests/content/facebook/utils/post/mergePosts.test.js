import mergePosts from 'content/facebook/utils/post/mergePosts';

const contentHtml = '<div>something</div>';
const adTargetingData = JSON.stringify({ some: 'data' });

const oldPost = {
  id: '123456',
  payload: { contentHtml }
};

const newPost = {
  id: '123456',
  payload: { adTargetingData }
};

const expected = {
  id: '123456',
  payload: {
    contentHtml,
    adTargetingData
  }
};

describe('with old and new posts', () => {
  it('returns the expected merged result', () => {
    expect(mergePosts(oldPost, newPost)).toEqual(expected);
  });
});

describe('with no old post', () => {
  it('returns the new post', () => {
    expect(mergePosts(undefined, newPost)).toEqual(newPost);
  });
});

describe('with no new post', () => {
  it('returns the old post', () => {
    expect(mergePosts(oldPost)).toEqual(oldPost);
  });
});
