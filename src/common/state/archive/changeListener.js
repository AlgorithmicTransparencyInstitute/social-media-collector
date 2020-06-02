import actions from './actions';
import { ARCHIVE } from 'common/keys';
import { onChanged } from 'common/storage';

const changeListener = ({ dispatch }) =>
  onChanged(async changes => {
    const newArchive = Object.keys(changes).reduce((acc, elem) => {
      if (elem.startsWith(ARCHIVE)) acc[elem] = changes[elem];
      return acc;
    }, {});

    if (Object.keys(newArchive).length) return dispatch(actions.archiveChanged(newArchive));
  });

export default changeListener;
