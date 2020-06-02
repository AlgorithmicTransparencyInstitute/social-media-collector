import actions from './actions';
import { PREF_COUNTRY, PREF_LANGUAGE } from 'common/keys';
import { onChanged } from 'common/storage';

const changeListener = ({ dispatch }) =>
  onChanged(async ({ [PREF_COUNTRY]: country, [PREF_LANGUAGE]: language }) => {
    if (country !== undefined) return dispatch(actions.preferenceChanged(PREF_COUNTRY, country));
    if (language !== undefined) return dispatch(actions.preferenceChanged(PREF_LANGUAGE, language));
  });

export default changeListener;
