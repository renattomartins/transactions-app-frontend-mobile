import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles.js';
import {ApplicationContext} from '../../store';

const TransactionView = ({navigation, route, handleGetTransaction}) => {
  const {env, userToken, accounts} = useContext(ApplicationContext);
  const [transactionId] = useState(route.params.itemId);

  useEffect(() => {
    const loadTransaction = async () => {
      const transaction = await handleGetTransaction(
        env,
        userToken,
        accounts[0].id,
        transactionId,
      );

      console.log(transaction);
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
