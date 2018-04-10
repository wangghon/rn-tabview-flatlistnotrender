
import inboxItems from '../config/inbox';

export const loadInbox = (id) => {
  return {
    type: 'LOAD_INBOX_SUCCESS',
    payload: inboxItems[id],
  };
};