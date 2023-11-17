import React from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles.js';

const TransactionView = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View>
        <Text>Dados da transação</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TransactionView;
