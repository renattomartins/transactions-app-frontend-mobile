import React from 'react';
import {addUser} from '../../services/UserManager';
import {logUserIn} from '../../services/Auth';
import SignUp from './SignUp';

const SignUpWithDependencies = props => (
  <SignUp {...props} handleOnSubmit={addUser} handleOnLogin={logUserIn} />
);

export default SignUpWithDependencies;
