import AsyncStorage from '../modules/AsyncStorage';
import {getAccounts} from '../services/AccountManager';
import {RESTORE_TOKEN} from '../constants/actionTypes';

export const initializeAppState = async (dispatch, env, baseUrl) => {
  let userToken, loggedEmail, accounts;

  try {
    userToken = await AsyncStorage.readData('userToken');
    loggedEmail = await AsyncStorage.readData('loggedEmail');
  } catch (e) {
    console.log('Failed to load user data from storage', e);
  }

  if (userToken) {
    try {
      accounts = await getAccounts(env, baseUrl, userToken);
    } catch (e) {
      userToken = null;
      loggedEmail = null;
      console.log('Failed to load accounts', e);
    }
  }

  dispatch({
    type: RESTORE_TOKEN,
    token: userToken,
    loggedEmail: loggedEmail,
    accounts: accounts,
  });
};
