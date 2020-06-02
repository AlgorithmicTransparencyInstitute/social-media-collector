/**
 *  Clean the response and extract the relevant JSON data.
 *
 *  @param text — The text from the response from the server.
 *  @return JSON data
 *  @throws Error if the reponse text could not be parsed
 */
const cleanAndParse = text => JSON.parse(text.replace('for (;;);', ''));

export default cleanAndParse;
