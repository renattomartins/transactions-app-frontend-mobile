/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, ActivityIndicator} from 'react-native';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import If from '../../utils/if';
import Button from '../../components/atoms/Button';
import FloatButton from '../../components/atoms/FloatButton';
import Transaction from '../../components/molecules/Transaction';
import {friendlyErrorMessages as errorMessages} from '../../utils/constants';

import styles from './styles';

const TransactionList = ({navigation, handleGetTransactions}) => {
  const {
    env,
    userToken,
    setUserToken,
    loggedEmail,
    setLoggedEmail,
    accounts,
    setAccounts,
    signOut,
  } = useContext(ApplicationContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [thereIsAnError, setThereIsAnError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [transactions, setTransactions] = useState([]);

  const onLogout = async () => {
    // Requests
    // @todo Invalidate token on server

    // Local storage
    await AsyncStorage.cleanKeyData('userToken');
    await AsyncStorage.cleanKeyData('loggedEmail');
    await AsyncStorage.cleanKeyData('accounts');

    // State in application context
    setUserToken(null);
    setLoggedEmail(null);
    setAccounts([]);

    // Screen state
    signOut();
  };

  useEffect(() => {
    const loadTransactions = async () => {
      let initialAccountId, transactionsList;

      try {
        if (accounts.length > 0) {
          initialAccountId = accounts[0].id;
        }

        transactionsList = await handleGetTransactions(
          env,
          userToken,
          initialAccountId,
        );

        console.log(`${transactionsList.length} transações recuperadas.`);

        if (transactionsList.length > 0) {
          setIsEmpty(false);
          setTransactions(transactionsList);
        }
      } catch (e) {
        let errorMessageToDiplay;
        setThereIsAnError(true);

        switch (e.response.data.code) {
          case 400:
            errorMessageToDiplay = errorMessages.getTransactions.e400.message;
            break;
          case 401:
            errorMessageToDiplay = errorMessages.getTransactions.e401.message;
            break;
          case 403:
            errorMessageToDiplay = errorMessages.getTransactions.e403.message;
            break;
          case 404:
            errorMessageToDiplay = errorMessages.getTransactions.e404.message;
            break;
          case 500:
            errorMessageToDiplay = errorMessages.getTransactions.e500.message;
            break;
          default:
            errorMessageToDiplay =
              errorMessages.getTransactions.unknown.message;
        }
        setErrorMessage(errorMessageToDiplay);
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerArea}>
        <View style={styles.logoutText}>
          <Text style={styles.text}>Você está logado como: {loggedEmail}</Text>
        </View>
        <View style={styles.logoutButton}>
          <Button title="Sair" onPress={onLogout} inverse />
        </View>
      </View>
      <View style={styles.mainArea}>
        <If test={isLoading}>
          <View style={styles.messagesWrapper}>
            <ActivityIndicator
              size="small"
              color="#aaa"
              style={styles.loaderIcon}
            />
            <Text style={styles.loaderText}>Carregando transações...</Text>
          </View>
        </If>
        <If test={!isLoading && thereIsAnError}>
          <View style={styles.messagesWrapper}>
            <Image
              style={[styles.errorIcon]}
              source={require('../../assets/images/error-icon.png')}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        </If>
        <If test={!isLoading && !thereIsAnError && isEmpty}>
          <View style={styles.messagesWrapper}>
            <Text style={styles.noTrasactions}>
              Você não possui transações cadastradas.
            </Text>
          </View>
        </If>
        <If test={!isLoading && !thereIsAnError && !isEmpty}>
          <ScrollView
            scrollIndicatorInsets={{right: 1}}
            style={styles.scrollArea}>
            {transactions.map(transaction => (
              <Transaction
                key={`transactionId-${transaction.id}`}
                id={transaction.id}
                description={transaction.description}
                isIncome={transaction.isIncome}
                date={transaction.date}
                amount={transaction.amount}
              />
            ))}
          </ScrollView>
          <FloatButton
            onPress={() => navigation.navigate('TransactionCreate')}
          />
        </If>
      </View>
    </View>
  );
};

export default TransactionList;
