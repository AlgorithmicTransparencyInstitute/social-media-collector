import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'common/state/consent/actions';

const useConsent = () => {
  const { granted, acceptedAt, viewedAt } = useSelector(
    ({ consent: { granted, acceptedAt, viewedAt } }) => ({
      granted,
      acceptedAt,
      viewedAt
    })
  );

  const dispatch = useDispatch();

  const loadConsent = useCallback(() => dispatch(actions.loadConsent()), [dispatch]);

  const saveConsent = useCallback(() => dispatch(actions.saveConsent()), [dispatch]);

  const viewedConsent = useCallback(() => dispatch(actions.viewedConsent()), [dispatch]);

  useEffect(() => {
    /* istanbul ignore else */
    if (!granted) loadConsent();
  }, [granted]);

  return { granted, acceptedAt, viewedAt, saveConsent, viewedConsent };
};

export default useConsent;
