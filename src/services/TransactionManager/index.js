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

const createTransaction = async (
  env,
  token,
  accountId,
  transactionDescription,
  transactionAmount,
  transactionDate,
  transactionNotes,
  transactionIsIncome,
) => {
  let {createTransactionUrl} = getEnvironment(env);

  try {
    createTransactionUrl = createTransactionUrl.replace(
      ':accountId',
      accountId,
    );

    const response = await axios.post(
      createTransactionUrl,
      {
        description: transactionDescription,
        amount: transactionAmount,
        date: transactionDate,
        notes: transactionNotes,
        isIncome: transactionIsIncome,
      },
      {
        headers: {Authorization: `bearer ${token}`},
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getTransactions, createTransaction};
