import React, {createContext, useState} from 'react';

const ApplicationContext = createContext();

const StoreProvider = ({children, token, email, authActions, ...props}) => {
  const [userToken, setUserToken] = useState(token);
  const [loggedEmail, setLoggedEmail] = useState(email);
  const [accounts, setAccounts] = useState([]);
  const {values, ...propsFromWrapperApp} = props;
  const {env} = propsFromWrapperApp;

  return (
    <ApplicationContext.Provider
      value={{
        env,
        userToken,
        setUserToken,
        loggedEmail,
        setLoggedEmail,
        accounts,
        setAccounts,
        ...authActions,
        ...values,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
};

const StoreConsumer = ({children}) => (
  <ApplicationContext.Consumer>{children}</ApplicationContext.Consumer>
);

export {ApplicationContext, StoreProvider, StoreConsumer};
