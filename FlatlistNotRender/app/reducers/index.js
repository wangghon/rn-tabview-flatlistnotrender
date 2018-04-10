import { combineReducers } from 'redux';
import routes from './routes';
import profile from './profile';
import inbox from './inbox';
import contacts from './contacts';

const appReducer = combineReducers({
  routes,
  profile,
  inbox,
  contacts,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
