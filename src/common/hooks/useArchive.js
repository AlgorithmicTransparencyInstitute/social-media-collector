import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'common/state/archive/actions';

const useArchive = () => {
  const { items, index, loading, saving, ...archive } = useSelector(({ archive }) => archive);

  const oldestDate = index.reduce((acc, elem) => {
    const datetime = items[elem].observedAt;
    return acc <= datetime ? acc : datetime;
  }, Infinity);

  const oldest = oldestDate === Infinity ? undefined : oldestDate;

  const dispatch = useDispatch();

  const loadArchive = useCallback(
    /* istanbul ignore next */
    () => dispatch(actions.loadArchive()),
    [dispatch]
  );

  useEffect(() => {
    /* istanbul ignore else */
    if (!index.length && !loading && !saving) loadArchive();
  }, [index.length]);

  return { items, index, loading, saving, oldest, ...archive };
};

export default useArchive;
