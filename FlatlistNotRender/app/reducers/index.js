import { combineReducers } from 'redux';
import routes from './routes';
import profile from './profile';

const appReducer = combineReducers({
  routes,
  profile,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
