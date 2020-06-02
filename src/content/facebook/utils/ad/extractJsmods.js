import cleanAndParse from 'common/utils/cleanAndParse';

/**
 *  Clean the response and extract the relevant JSON data.
 *
 *  @param text — The text from the server response.
 *  @return JSON data, or null if the response does not hold valid JSON.
 */
const extractJsmods = text => {
  try {
    const { jsmods } = cleanAndParse(text);
    return jsmods;
  } catch (err) {
    return null;
  }
};

export default extractJsmods;
