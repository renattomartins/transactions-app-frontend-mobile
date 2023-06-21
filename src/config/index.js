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
    },
    prd: {
      signUpUrl: `${hosts.PRD}/users`,
      loginUrl: `${hosts.PRD}/login`,
    },
  };

  return values[environment] || values.prd;
};

export default getEnvironment;
