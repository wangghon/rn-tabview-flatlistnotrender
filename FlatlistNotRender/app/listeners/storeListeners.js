
import store from '../store';
import { loadInbox } from '../actions/inboxActions';

let loginSubScriber;

const isLogin = (state) => !!state.profile.data.token;
const id = (state) => state.profile.data.id;

const addListeners = () => {
  subscribeLoginEvent();
};

const subscribeLoginEvent = () => {
  if (loginSubScriber) {
    loginSubScriber();
    loginSubScriber = null;
  }

  loginSubScriber = store.subscribe(() => {
    const state = store.getState();

    if (isLogin(state)) {
      loginSubScriber();
      loginSubScriber = null;

      store.dispatch(loadInbox(id(state)));
    }
  });
};

export {
  addListeners,
};
