import * as apiTesterActions from './apiTesterActions';
import * as counterActions from './counterActions';
import * as actionProfile from './actionProfile';
import * as userSearch from '../actions/userSearch';

const actions = {
  ...apiTesterActions,
  ...counterActions,
  ...actionProfile,
  ...userSearch
};

export { actions };
