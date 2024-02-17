import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';

import If from '../../utils/if';

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

        setDescription(transaction.description);
        setAmount(transaction.amount);
        setDate(transaction.date);
        setNotes(transaction.notes);
        setIsIncome(transaction.isIncome);
        setCreatedAt(transaction.createdAt);
        setUpdatedAt(transaction.updatedAt);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    loadTransaction();
  }, [accounts, transactionId, handleGetTransaction, env, userToken]);

  return (
    <>
      <If test={isLoading}>
        <View style={styles.loaderWrapper}>
          <ActivityIndicator
            size="small"
            color="#aaa"
            style={styles.loaderIcon}
          />
          <Text style={styles.loaderText}>Carregando transação...</Text>
        </View>
      </If>
      <If test={!isLoading}>
        <KeyboardAwareScrollView style={styles.main}>
          <View style={styles.mainContent}>
            <View style={styles.transactionIconWrapper}>
              <Image
                style={[styles.transactionIcon]}
                source={
                  isIncome
                    ? require('../../assets/images/money-in.png')
                    : require('../../assets/images/money-out.png')
                }
              />
            </View>
          </View>
          <View>
            <Text>Dados da transação: {transactionId}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{description}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{amount}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{date}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{notes}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{isIncome}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{createdAt}</Text>
          </View>
          <View style={styles.attributeWrapper}>
            <Text>{updatedAt}</Text>
          </View>
        </KeyboardAwareScrollView>
      </If>
    </>
  );
};

export default TransactionView;
