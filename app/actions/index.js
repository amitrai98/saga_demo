import * as apiTesterActions from './apiTesterActions';
import * as counterActions from './counterActions';
import * as actionProfile from './actionProfile';

const actions = {
  ...apiTesterActions,
  ...counterActions,
  ...actionProfile
};

export { actions };
