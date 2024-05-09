import React from 'react';
import {
  getTransaction,
  deleteTransaction,
} from '../../services/TransactionManager';
import TransactionView from './TransactionView';

const TransactionViewWithDependencies = props => (
  <TransactionView
    {...props}
    handleGetTransaction={getTransaction}
    handleDeleteTransaction={deleteTransaction}
  />
);

export default TransactionViewWithDependencies;
