import React from 'react';
import {getTransactions} from '../../services/TransactionManager';
import Transactions from './Transactions';

const TransactionsWithDependencies = props => (
  <Transactions {...props} handleGetTransactions={getTransactions} />
);

export default TransactionsWithDependencies;
