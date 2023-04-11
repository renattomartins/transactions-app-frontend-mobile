import React from 'react';
import {handleSignUp} from '../../services/UserManager';
import SignUp from './SignUp';

const SignUpWithDependencies = props => (
  <SignUp {...props} handleOnSubmit={handleSignUp} />
);

export default SignUpWithDependencies;
