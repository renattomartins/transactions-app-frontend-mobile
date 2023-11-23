import React, {useContext, useEffect, useState} from 'react';
import chalk from 'chalk';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';

import styles from './styles.js';

const TransactionView = ({navigation, route, handleGetTransaction}) => {
  const {env, userToken, accounts} = useContext(ApplicationContext);

  const [transactionId] = useState(route.params.itemId);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0.0);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isIncome, setIsIncome] = useState(false);
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [thereIsAnError, setThereIsAnError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadTransaction = async () => {
      let accountId, transaction;

      try {
        if (accounts.length > 0) {
          accountId = accounts[0].id;
        }

        transaction = await handleGetTransaction(
          env,
          userToken,
          accountId,
          transactionId,
        );

        const ctx = new chalk.Instance({level: 3});
        console.log(
          ctx.green(
            `Transação de Id: ${transaction.id} recuperada com sucesso.`,
          ),
        );
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    loadTransaction();
  }, [accounts, transactionId, handleGetTransaction, env, userToken]);

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View>
        <Text>Dados da transação: {transactionId}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TransactionView;
