import axios from 'axios';
import getEnvironment from '../../config';

const getAccounts = async (env, baseUrl, token) => {
  const {getAccountsUrl} = getEnvironment(env, baseUrl);

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
