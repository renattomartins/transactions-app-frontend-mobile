import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import Button from '../../components/atoms/Button';

import styles from './styles';

const Transactions = ({navigation, handleGetTransactions}) => {
  const {signOut, loggedEmail, setLoggedEmail} = useContext(ApplicationContext);

  const onSubmit = async () => {
    await AsyncStorage.cleanKeyData('userToken');
    await AsyncStorage.cleanKeyData('loggedEmail');
    setLoggedEmail(null);
    signOut();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerArea}>
        <View style={styles.logoutText}>
          <Text style={styles.text}>Você está logado como: {loggedEmail}</Text>
        </View>
        <View style={styles.logoutButton}>
          <Button title="Sair" onPress={onSubmit} inverse />
        </View>
      </View>
      <View style={styles.mainArea}>
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
      </View>
    </View>
  );
};

export default Transactions;
