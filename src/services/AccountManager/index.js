import axios from 'axios';
import getEnvironment from '../../config';

const getAccounts = async (env, token) => {
  const {getAccountsUrl} = getEnvironment(env);

  try {
    const response = await axios.get(getAccountsUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getAccounts};
