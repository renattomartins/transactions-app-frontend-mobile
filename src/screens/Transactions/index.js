import React from 'react';
import {View, Text} from 'react-native';

import Button from '../../components/atoms/Button';

import styles from './styles';

const Transactions = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerArea}>
        <Text style={styles.text}>
          No futuro, você verá as transações nessa tela.
        </Text>
      </View>
      <View style={styles.mainArea}>
        <Button
          title="Voltar para o início"
          onPress={() => navigation.navigate('Home')}
          width="80%"
        />
      </View>
    </View>
  );
};

export default Transactions;
