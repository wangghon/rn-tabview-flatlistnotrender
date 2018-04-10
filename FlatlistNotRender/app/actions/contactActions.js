import contacts from '../config/contacts';

export const loadContacts = (id) => {
  return {
    type: 'LOAD_CONTACTS_SUCCESS',
    payload: contacts[id],
  };
};