// regex derived from https://stackoverflow.com/a/27728417/917187
const FIND_ID = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;

const extractVideoId = url => {
  const match = url.match(FIND_ID);
  return match ? match[1] : null;
};

export default extractVideoId;
