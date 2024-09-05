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
  const [transactions, setTransactions] = useState([]);
  const {values, ...propsFromWrapperApp} = props;
  const {env} = propsFromWrapperApp;
  const {baseUrl} = propsFromWrapperApp;

  return (
    <ApplicationContext.Provider
      value={{
        env,
        baseUrl,
        userToken,
        setUserToken,
        loggedEmail,
        setLoggedEmail,
        accounts,
        setAccounts,
        transactions,
        setTransactions,
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
