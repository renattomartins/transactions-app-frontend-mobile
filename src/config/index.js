const getEnvironment = (env, baseUrl) => {
  const environment = typeof env === 'string' ? env.toLocaleLowerCase() : env;

  const hosts = {
    LOCAL: `http://${baseUrl}`,
    QA: `https://${baseUrl}`,
    PRD: `https://${baseUrl}`,
  };

  const values = {
    local: {
      signUpUrl: `${hosts.LOCAL}/users`,
      loginUrl: `${hosts.LOCAL}/login`,
      getAccountsUrl: `${hosts.LOCAL}/accounts`,
      getTransactionsUrl: `${hosts.LOCAL}/accounts/:accountId/transactions`,
      createTransactionUrl: `${hosts.LOCAL}/accounts/:accountId/transactions`,
      getTransactionUrl: `${hosts.LOCAL}/accounts/:accountId/transactions/:transactionId`,
      updateTransactionUrl: `${hosts.LOCAL}/accounts/:accountId/transactions/:transactionId`,
      deleteTransactionUrl: `${hosts.LOCAL}/accounts/:accountId/transactions/:transactionId`,
    },
    qa: {
      signUpUrl: `${hosts.QA}/users`,
      loginUrl: `${hosts.QA}/login`,
      getAccountsUrl: `${hosts.QA}/accounts`,
      getTransactionsUrl: `${hosts.QA}/accounts/:accountId/transactions`,
      createTransactionsUrl: `${hosts.QA}/accounts/:accountId/transactions`,
      getTransactionUrl: `${hosts.QA}/accounts/:accountId/transactions/:transactionId`,
      updateTransactionUrl: `${hosts.QA}/accounts/:accountId/transactions/:transactionId`,
      deleteTransactionUrl: `${hosts.QA}/accounts/:accountId/transactions/:transactionId`,
    },
    prd: {
      signUpUrl: `${hosts.PRD}/users`,
      loginUrl: `${hosts.PRD}/login`,
      getAccountsUrl: `${hosts.PRD}/accounts`,
      getTransactionsUrl: `${hosts.PRD}/accounts/:accountId/transactions`,
      createTransactionsUrl: `${hosts.PRD}/accounts/:accountId/transactions`,
      getTransactionUrl: `${hosts.PRD}/accounts/:accountId/transactions/:transactionId`,
      updateTransactionUrl: `${hosts.PRD}/accounts/:accountId/transactions/:transactionId`,
      deleteTransactionUrl: `${hosts.PRD}/accounts/:accountId/transactions/:transactionId`,
    },
  };

  return values[environment] || values.prd;
};

export default getEnvironment;
