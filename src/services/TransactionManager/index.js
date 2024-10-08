import axios from 'axios';
import getEnvironment from '../../config';

const getTransactions = async (env, baseUrl, token, accountId) => {
  let {getTransactionsUrl} = getEnvironment(env, baseUrl);

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
  baseUrl,
  token,
  accountId,
  transactionDescription,
  transactionAmount,
  transactionDate,
  transactionNotes,
  transactionIsIncome,
) => {
  let {createTransactionUrl} = getEnvironment(env, baseUrl);

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

const getTransaction = async (
  env,
  baseUrl,
  token,
  accountId,
  transactionId,
) => {
  let {getTransactionUrl} = getEnvironment(env, baseUrl);

  try {
    getTransactionUrl = getTransactionUrl
      .replace(':accountId', accountId)
      .replace(':transactionId', transactionId);

    const response = await axios.get(getTransactionUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateTransaction = async (
  env,
  baseUrl,
  token,
  accountId,
  transactionId,
  transactionDescription,
  transactionAmount,
  transactionDate,
  transactionNotes,
  transactionIsIncome,
) => {
  let {updateTransactionUrl} = getEnvironment(env, baseUrl);

  try {
    updateTransactionUrl = updateTransactionUrl
      .replace(':accountId', accountId)
      .replace(':transactionId', transactionId);

    const response = await axios.put(
      updateTransactionUrl,
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

const deleteTransaction = async (
  env,
  baseUrl,
  token,
  accountId,
  transactionId,
) => {
  let {deleteTransactionUrl} = getEnvironment(env, baseUrl);

  try {
    deleteTransactionUrl = deleteTransactionUrl
      .replace(':accountId', accountId)
      .replace(':transactionId', transactionId);

    const response = await axios.delete(deleteTransactionUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getTransactions,
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
