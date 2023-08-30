import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';

import {ApplicationContext} from '../../store';

import styles from './styles.js';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Nova transação</Text>
    </View>
  );
};

export default Transaction;
