import React, {createContext, useState} from 'react';

const ApplicationContext = createContext();

const StoreProvider = ({
  children,
  initialToken,
  initialEmail,
  initialAccounts,
  authActions,
  ...props
}) => {
  const [userToken, setUserToken] = useState(initialToken);
  const [loggedEmail, setLoggedEmail] = useState(initialEmail);
  const [accounts, setAccounts] = useState(initialAccounts);
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
