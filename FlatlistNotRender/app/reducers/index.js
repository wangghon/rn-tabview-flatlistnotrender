import { combineReducers } from 'redux';
import routes from 'reducers/routes';
import profile from 'reducers/profile';

const appReducer = combineReducers({
  routes,
  profile,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
