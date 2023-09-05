import React, {useContext, useState, useRef} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';

import {ApplicationContext} from '../../store';

import ErrorMessage from '../../components/atoms/ErrorMessage';

import styles from './styles.js';

const Transaction = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [isIncome, setIsIncome] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  return (
    <View style={styles.main}>
      <View style={styles.inputsArea}>
        <View style={styles.textInputWrapper}>
          <TextInput
            placeholder="R$ 0,00"
            returnKeyType={'next'}
            value={amount}
            onChangeText={value => setAmount(value)}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Entrada / Saída</Text>
          <Switch
            value={isIncome}
            onValueChange={value => setIsIncome(value)}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Descrição:</Text>
          <TextInput
            maxLength={255}
            returnKeyType={'next'}
            value={description}
            onChangeText={value => setDescription(value)}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Data:</Text>
          <TextInput
            returnKeyType={'next'}
            value={date}
            onChangeText={value => setDate(value)}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Observações (opcional):</Text>
          <TextInput
            returnKeyType={'done'}
            multiline={true}
            value={notes}
            onChangeText={value => setNotes(value)}
          />
        </View>
      </View>
    </View>
  );
};

export default Transaction;
