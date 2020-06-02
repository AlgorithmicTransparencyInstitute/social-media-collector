import { UPLOAD_POSTS } from 'common/actions';

[UPLOAD_POSTS].forEach(key => {
  it('exists', () => {
    expect(typeof key).toEqual('string');
  });
});
