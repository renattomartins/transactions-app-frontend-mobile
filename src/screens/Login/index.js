import React from 'react';
import {logUserIn} from '../../services/Auth';
import {getAccounts} from '../../services/AccountManager';
import Login from './Login';

const LogInWithDependencies = props => (
  <Login
    {...props}
    handleOnLogin={logUserIn}
    handleOnGetAccounts={getAccounts}
  />
);

export default LogInWithDependencies;
