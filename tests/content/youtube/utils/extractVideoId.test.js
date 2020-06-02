import extractVideoId from 'content/youtube/utils/extractVideoId';

// test urls pulled from https://stackoverflow.com/a/27728417/917187
[
  ['//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0', 'up_lNV-yoK4'],
  ['http://www.youtube.com/embed/nas1rJpm7wY?rel=0', 'nas1rJpm7wY'],
  ['http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0', '1p3vcRhsYGo'],
  ['https://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo', '1p3vcRhsYGo'],
  ['http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY', '6dwqZw0j_jY'],
  ['http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be', '6dwqZw0j_jY'],
  ['http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel', 'cKZDdG9FTKY'],
  ['http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://www.youtube.com/watch?v=peFZbP64dsU', 'peFZbP64dsU'],
  [
    'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
    'yZ-K7nCVnBI'
  ],
  ['http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I', 'NRHVzbJVx8I'],
  ['http://youtu.be/6dwqZw0j_jY', '6dwqZw0j_jY'],
  ['http://youtu.be/afa-5HQHiAs', 'afa-5HQHiAs'],
  ['http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player', 'dQw4w9WgXcQ'],
  ['not a youttube url', null]
].forEach(([url, expected]) => {
  describe(`given url ${url}`, () => {
    it(`returns ${expected}`, () => {
      expect(extractVideoId(url)).toEqual(expected);
    });
  });
});
