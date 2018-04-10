
import { combineReducers } from 'redux';
import _ from 'lodash';


const initialState = {
  data: {},
};

function data(prevState = initialState.data, action = {}) {

  switch (action.type) {
    case 'LOAD_SUCCESS':
      return {
        ...prevState,
        ..._.mapKeys(action.payload, 'title'),
      };
    case 'LOGOUT':
      return initialState.data;
    default:
      return prevState;
  }
}

export default combineReducers({ data });