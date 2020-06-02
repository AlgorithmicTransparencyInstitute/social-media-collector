import { decode } from '../../utils/crypto';

const decodeNewValues = changes => (acc, elem) => {
  acc[elem] = decode(changes[elem].newValue);
  return acc;
};

export default decodeNewValues;
