import { v4 } from 'uuid';

/**
 *  @returns a unique item id.
 */
const makeItemId = () => `item:${v4()}`;

export default makeItemId;
