import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'common/state/permission/actions';

const usePermission = (storageKey, defaultValue) => {
  const checked = useSelector(
    ({ permission: { [storageKey]: { value } = { value: null } } }) => value
  );

  const dispatch = useDispatch();

  const savePermission = useCallback(
    evt => dispatch(actions.savePermission(storageKey, evt.target.checked)),
    [dispatch]
  );

  const loadPermission = useCallback(
    () => dispatch(actions.loadPermission(storageKey, defaultValue)),
    [dispatch]
  );

  useEffect(() => {
    /* istanbul ignore else */
    if (checked === null) loadPermission();
  }, [checked]);

  return { checked, savePermission };
};

export default usePermission;
