import axios from 'axios';
import getEnvironment from '../../config';

const getTransactions = async (env, token) => {
  const {getTransactionsUrl} = getEnvironment(env);

  try {
    // @todo replaces :accountId in getTransactionsUrl
    const response = await axios.get(getTransactionsUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getTransactions};
