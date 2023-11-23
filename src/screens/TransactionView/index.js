import React from 'react';
import {getTransaction} from '../../services/TransactionManager';
import TransactionView from './TransactionView';

const TransactionViewWithDependencies = props => (
  <TransactionView {...props} handleGetTransaction={getTransaction} />
);

export default TransactionViewWithDependencies;
