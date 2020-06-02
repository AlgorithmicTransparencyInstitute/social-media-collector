import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'common/state/preference/actions';

const usePreference = storageKey => {
  const selected = useSelector(({ preference: { [storageKey]: { value } = {} } }) => value) || '';

  const dispatch = useDispatch();

  const savePreference = useCallback(
    evt => dispatch(actions.savePreference(storageKey, evt.target.value)),
    [dispatch]
  );

  const loadPreference = useCallback(key => dispatch(actions.loadPreference(key)), [dispatch]);

  useEffect(() => {
    /* istanbul ignore else */
    if (!selected) loadPreference(storageKey);
  }, [selected]);

  return { selected, savePreference };
};

export default usePreference;
