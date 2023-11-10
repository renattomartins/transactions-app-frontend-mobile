import React from 'react';
import {createTransaction} from '../../services/TransactionManager';
import TransactionCreate from './TransactionCreate';

const TransactionCreateWithDependencies = props => (
  <TransactionCreate {...props} handleCreateTransaction={createTransaction} />
);

export default TransactionCreateWithDependencies;
