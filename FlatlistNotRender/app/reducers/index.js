import { combineReducers } from 'redux';
import routes from './routes';
import profile from './profile';
import inbox from './inbox';

const appReducer = combineReducers({
  routes,
  profile,
  inbox,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
