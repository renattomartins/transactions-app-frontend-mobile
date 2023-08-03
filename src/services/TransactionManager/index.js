import axios from 'axios';
import getEnvironment from '../../config';

const getTransactions = async (env, token, accountId) => {
  let {getTransactionsUrl} = getEnvironment(env);

  try {
    getTransactionsUrl = getTransactionsUrl.replace(':accountId', accountId);

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
