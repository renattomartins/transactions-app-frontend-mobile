import React from 'react';
import {Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles.js';

const TransactionCreate = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={styles.main}>
      <Text>Tela de editar transações</Text>
    </KeyboardAwareScrollView>
  );
};

export default TransactionCreate;
