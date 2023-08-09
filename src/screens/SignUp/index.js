import React from 'react';
import {addUser} from '../../services/UserManager';
import {logUserIn} from '../../services/Auth';
import {getAccounts} from '../../services/AccountManager';
import SignUp from './SignUp';

const SignUpWithDependencies = props => (
  <SignUp
    {...props}
    handleOnSubmit={addUser}
    handleOnLogin={logUserIn}
    handleOnGetAccounts={getAccounts}
  />
);

export default SignUpWithDependencies;
