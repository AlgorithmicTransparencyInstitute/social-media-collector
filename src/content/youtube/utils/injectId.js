import { hash } from 'common/utils/crypto';

const injectId = ad => {
  const { type, title, advertiser, adId } = ad;
  const id = hash(`${type} ${title} ${advertiser} ${adId}`);
  return { id, ...ad };
};

export default injectId;
