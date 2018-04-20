import { combineReducers } from 'redux';
import routes from './routes';
import profile from './profile';
import inbox from './inbox';
import contacts from './contacts';

import { addListeners } from '../listeners/storeListeners';

const appReducer = combineReducers({
  routes,
  profile,
  inbox,
  contacts,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    addListeners();
  }
  return appReducer(state, action);
};

export default rootReducer;
