import actions from './actions';
import { CONSENT, CONSENT_ACCEPTED_AT, CONSENT_VIEWED_AT } from 'common/keys';
import { onChanged } from 'common/storage';

const changeListener = ({ dispatch }) => {
  const changeHandler = async ({
    [CONSENT]: version,
    [CONSENT_ACCEPTED_AT]: acceptedAt,
    [CONSENT_VIEWED_AT]: viewedAt
  }) =>
    version !== undefined || acceptedAt !== undefined || viewedAt !== undefined
      ? dispatch(actions.consentChanged(version, acceptedAt, viewedAt))
      : undefined;

  return onChanged(changeHandler);
};

export default changeListener;
