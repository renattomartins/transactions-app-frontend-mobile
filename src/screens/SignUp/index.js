import React from 'react';
import {handleSignUp} from '../../services/users';
import SignUp from './SignUp';

const SignUpWithDependencies = props => (
  <SignUp {...props} handleOnSubmit={handleSignUp} />
);

export default SignUpWithDependencies;
