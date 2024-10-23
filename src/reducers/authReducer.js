import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '../constants/actionTypes';

export const authReducer = (currentState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...currentState,
        userToken: action.token,
        loggedEmail: action.loggedEmail,
        isLoading: false,
        accounts: action.accounts,
      };
    case SIGN_IN:
      return {
        ...currentState,
        userToken: action.token,
      };
    case SIGN_OUT:
      return {
        ...currentState,
        userToken: null,
        loggedEmail: null,
      };
    default:
      return currentState;
  }
};
