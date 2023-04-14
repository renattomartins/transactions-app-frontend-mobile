const getEnvironment = env => {
  const environment = typeof env === 'string' ? env.toLocaleLowerCase() : env;

  const hosts = {
    LOCAL: 'http://localhost:3000',
    PRD: '',
  };

  const values = {
    local: {
      signUpUrl: `${hosts.LOCAL}/users`,
    },
    prd: {
      signUpUrl: `${hosts.PRD}/users`,
    },
  };

  return values[environment] || values.prd;
};

export default getEnvironment;
