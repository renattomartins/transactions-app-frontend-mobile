import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import Button from '../../components/atoms/Button';
import If from '../../utils/if';
import {friendlyErrorMessages as errorMessages} from '../../utils/constants';

import styles from './styles';

const Transactions = ({navigation, handleGetTransactions}) => {
  const {env, userToken, setUserToken, loggedEmail, setLoggedEmail, signOut} =
    useContext(ApplicationContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [thereIsAnError, setThereIsAnError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogout = async () => {
    await AsyncStorage.cleanKeyData('userToken');
    await AsyncStorage.cleanKeyData('loggedEmail');
    setUserToken(null);
    setLoggedEmail(null);
    signOut();
  };

  useEffect(() => {
    const loadTransactions = async () => {
      let transactions;

      try {
        transactions = await handleGetTransactions(env, userToken, 23);
        console.log(`${transactions.length} transações recuperadas.`);

        if (transactions.length > 0) {
          setIsEmpty(false);
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
  });

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
          <View style={styles.transactionArea}>
            <View style={styles.transactionIconWrapper}>
              <Image
                style={[styles.transactionIcon]}
                source={require('../../assets/images/money-in.png')}
              />
            </View>
            <View style={styles.transactionTextWrapper}>
              <Text style={styles.transactionDescription}>Saque Banco 24h</Text>
              <Text style={styles.transactionDate}>18/jul às 18:46</Text>
            </View>
            <View style={styles.transactionAmountWrapper}>
              <Text style={[styles.transactionAmount, styles.positive]}>
                R$ 150,00
              </Text>
            </View>
          </View>
          <View style={styles.transactionArea}>
            <View style={styles.transactionIconWrapper}>
              <Image
                style={[styles.transactionIcon]}
                source={require('../../assets/images/money-out.png')}
              />
            </View>
            <View style={styles.transactionTextWrapper}>
              <Text style={styles.transactionDescription}>Padaria</Text>
              <Text style={styles.transactionDate}>19/jul às 07:10</Text>
            </View>
            <View style={styles.transactionAmountWrapper}>
              <Text style={styles.transactionAmount}>-R$ 13,40</Text>
            </View>
          </View>
          <View style={styles.transactionArea}>
            <View style={styles.transactionIconWrapper}>
              <Image
                style={[styles.transactionIcon]}
                source={require('../../assets/images/money-out.png')}
              />
            </View>
            <View style={styles.transactionTextWrapper}>
              <Text style={styles.transactionDescription}>Barbearia</Text>
              <Text style={styles.transactionDate}>19/jul às 09:15</Text>
            </View>
            <View style={styles.transactionAmountWrapper}>
              <Text style={styles.transactionAmount}>-R$ 40,00</Text>
            </View>
          </View>
        </If>
      </View>
    </View>
  );
};

export default Transactions;
