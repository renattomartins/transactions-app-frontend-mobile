import React, {createContext, useState} from 'react';

const ApplicationContext = createContext();

const StoreProvider = ({children, authActions, ...props}) => {
  const [userToken, setUserToken] = useState(null);
  const {values, ...propsFromWrapperApp} = props;
  const {env} = propsFromWrapperApp;

  return (
    <ApplicationContext.Provider
      value={{env, userToken, setUserToken, ...authActions, ...values}}>
      {children}
    </ApplicationContext.Provider>
  );
};

const StoreConsumer = ({children}) => (
  <ApplicationContext.Consumer>{children}</ApplicationContext.Consumer>
);

export {ApplicationContext, StoreProvider, StoreConsumer};
