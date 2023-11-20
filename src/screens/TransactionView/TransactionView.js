import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles.js';

const TransactionView = ({navigation, route}) => {
  const [transactionId] = useState(route.params.itemId);

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View>
        <Text>Dados da transação: {transactionId}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TransactionView;
