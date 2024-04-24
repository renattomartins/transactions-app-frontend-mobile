const getEnvironment = env => {
  const environment = typeof env === 'string' ? env.toLocaleLowerCase() : env;

  const hosts = {
    LOCAL: 'http://192.168.18.4:3000',
    PRD: '',
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
    },
    prd: {
      signUpUrl: `${hosts.PRD}/users`,
      loginUrl: `${hosts.PRD}/login`,
      getAccountsUrl: `${hosts.PRD}/accounts`,
      getTransactionsUrl: `${hosts.PRD}/accounts/:accountId/transactions`,
      createTransactionsUrl: `${hosts.PRD}/accounts/:accountId/transactions`,
      getTransactionUrl: `${hosts.PRD}/accounts/:accountId/transactions/:transactionId`,
      updateTransactionUrl: `${hosts.PRD}/accounts/:accountId/transactions/:transactionId`,
    },
  };

  return values[environment] || values.prd;
};

export default getEnvironment;
