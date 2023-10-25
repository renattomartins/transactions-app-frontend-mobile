import React from 'react';
import {getTransactions} from '../../services/TransactionManager';
import TransactionList from './TransactionList';

const TransactionListWithDependencies = props => (
  <TransactionList {...props} handleGetTransactions={getTransactions} />
);

export default TransactionListWithDependencies;
