import React from 'react';
import {updateTransaction} from '../../services/TransactionManager';
import TransactionEdit from './TransactionEdit';

const TransactionEditWithDependencies = props => (
  <TransactionEdit {...props} handleUpdateTransaction={updateTransaction} />
);

export default TransactionEditWithDependencies;
