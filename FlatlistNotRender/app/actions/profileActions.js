import { resetNavigationStack } from "../nav";

export const login = (id) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      id,
      token: '123456',
    },
  };
};

export const logout = () => {
  resetNavigationStack();
  return {
    type: 'LOGOUT',
  };
};
