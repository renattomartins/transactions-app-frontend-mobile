import React, {createContext, useState} from 'react';

const ApplicationContext = createContext();

const StoreProvider = ({children, ...props}) => {
  const [token, setToken] = useState('');
  const {values, ...propsFromWrapperApp} = props;
  const {env} = propsFromWrapperApp;

  return (
    <ApplicationContext.Provider value={{env, token, setToken, ...values}}>
      {children}
    </ApplicationContext.Provider>
  );
};

const StoreConsumer = ({children}) => (
  <ApplicationContext.Consumer>{children}</ApplicationContext.Consumer>
);

export {ApplicationContext, StoreProvider, StoreConsumer};
