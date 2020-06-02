import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'common/state/navigation/actions';

const useNavigation = () => {
  const current = useSelector(({ navigation: { current } }) => current);

  const dispatch = useDispatch();

  const goto = useCallback(destination => dispatch(actions.navigate(destination)), [dispatch]);

  return { current, goto };
};

export default useNavigation;
