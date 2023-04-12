import React from 'react';
import {addUser} from '../../services/UserManager';
import SignUp from './SignUp';

const SignUpWithDependencies = props => (
  <SignUp {...props} handleOnSubmit={addUser} />
);

export default SignUpWithDependencies;
