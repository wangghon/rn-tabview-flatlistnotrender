
import { combineReducers } from 'redux';

const initialState = {
  data: [],
};

function data(prevState = initialState.data, action = {}) {

  switch (action.type) {
    case 'LOAD_CONTACTS_SUCCESS':
      return [
        ...action.payload,
      ];
    case 'LOGOUT':
      return initialState.data;
    default:
      return prevState;
  }
}

export default combineReducers({ data });