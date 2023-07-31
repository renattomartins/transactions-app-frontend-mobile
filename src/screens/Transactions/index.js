import React from 'react';
import {getTransactions} from '../../services/TransactionManager';
import Transaction from './Transactions';

const TransactionsWithDependencies = props => (
  <Transaction {...props} handleGetTransactions={getTransactions} />
);

export default TransactionsWithDependencies;
