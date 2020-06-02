import { checkConsent, getConsentAcceptedAt } from 'common/storage/consent';

const getConsentWithTimestamp = async () => {
  const [granted, acceptedAt] = await Promise.all([checkConsent(), getConsentAcceptedAt()]);
  return { granted, acceptedAt };
};

export default getConsentWithTimestamp;
