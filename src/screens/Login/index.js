import React from 'react';
import {logUserIn} from '../../services/Auth';
import Login from './Login';

const LogInWithDependencies = props => (
  <Login {...props} handleOnLogin={logUserIn} />
);

export default LogInWithDependencies;
