import React from 'react';
import {Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles.js';

const TransactionCreate = ({navigation, route}) => {
  const transaction = route.params.transaction;

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <Text>Tela de editar transações</Text>
      <Text>ID: {transaction.id}</Text>
      <Text>Descrição: {transaction.description}</Text>
      <Text>Valor: {transaction.amount}</Text>
      <Text>Data: {transaction.date}</Text>
      <Text>Notas: {transaction.notes}</Text>
      <Text>É entrada? {transaction.isIncome ? 'Sim' : 'Não'}</Text>
    </KeyboardAwareScrollView>
  );
};

export default TransactionCreate;
