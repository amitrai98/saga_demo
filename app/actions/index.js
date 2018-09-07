import * as apiTesterActions from './apiTesterActions';
import * as counterActions from './counterActions';
import * as actionProfile from './actionProfile';
import * as userSearch from '../actions/userSearch';
import * as actionLogin from '../actions/actionLogin';

const actions = {
  ...apiTesterActions,
  ...counterActions,
  ...actionProfile,
  ...userSearch,
  ...actionLogin,
};

export { actions };
