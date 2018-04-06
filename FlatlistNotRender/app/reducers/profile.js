
import { combineReducers } from 'redux';


const initialState = {
  data: {
    token: '',
    id: '',
  },
};

function data(prevState = initialState.data, action = {}) {

  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...prevState,
        ...action.payload,
      };

    case 'LOGOUT':
      return {
        ...initialState.data,
      };
    default:
      return prevState;
  }
}

export default combineReducers({ data });
