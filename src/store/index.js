import React, {createContext} from 'react';

const ApplicationContext = createContext();

const StoreProvider = ({children, ...props}) => {
  const {values, ...propsFromWrapperApp} = props;
  const {env} = propsFromWrapperApp;

  return (
    <ApplicationContext.Provider value={{env, ...values}}>
      {children}
    </ApplicationContext.Provider>
  );
};

const StoreConsumer = ({children}) => (
  <ApplicationContext.Consumer>{children}</ApplicationContext.Consumer>
);

export {ApplicationContext, StoreProvider, StoreConsumer};
