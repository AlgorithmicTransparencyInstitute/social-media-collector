/**
 *  Extract the ad targeting html from the supplied jsmods object
 *
 *  @param jsmods — The jsmods objects obtained in a previous step
 *  @return the text of the ad targeting html, if any
 */
const extractAdTargetingHtml = jsmods => {
  const htmlItem = jsmods.markup[0].find(item => typeof item === 'object' && item.__html);
  return htmlItem ? htmlItem.__html : null;
};

export default extractAdTargetingHtml;
