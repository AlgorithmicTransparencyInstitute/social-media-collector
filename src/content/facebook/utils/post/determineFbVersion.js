import isElementInViewport from '../visible/isElementInViewport';
import notOverlapping from '../visible/notOverlapping';

import { HYPERFEED } from '../../constants';

const DIVS_WITH_IDS = 'div[id]';
const DIV_HAS_ROLE_IS_ARTICLE = 'div [role="article"]';

const isHyperfeed = element => element.getAttribute('id').startsWith(HYPERFEED);

const determineFbVersion = (/* istanbul ignore next */ doc = document) => {
  const pre2020 = Array.from(doc.querySelectorAll(DIVS_WITH_IDS)).filter(isHyperfeed);

  const [version, elements] = pre2020.length
    ? ['pre2020', pre2020]
    : ['post2020', Array.from(doc.querySelectorAll(DIV_HAS_ROLE_IS_ARTICLE))];

  return {
    elements: elements.filter(isElementInViewport).reduce(notOverlapping, []),
    version
  };
};

export default determineFbVersion;
