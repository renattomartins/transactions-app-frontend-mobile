import React from 'react';
import {logUserIn} from '../../services/Auth';
import SignUp from './Login';

const LogInWithDependencies = props => (
  <SignUp {...props} handleOnLogin={logUserIn} />
);

export default LogInWithDependencies;
