export const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        loggedEmail: action.loggedEmail,
        isLoading: false,
        accounts: action.accounts,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        userToken: null,
        loggedEmail: null,
      };
    default:
      return prevState;
  }
};
