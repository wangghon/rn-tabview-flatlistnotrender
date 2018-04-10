
import inboxItems from '../config/inbox';

export const loadInbox = (id) => {
  return {
    type: 'LOAD_SUCCESS',
    payload: inboxItems[id],
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};