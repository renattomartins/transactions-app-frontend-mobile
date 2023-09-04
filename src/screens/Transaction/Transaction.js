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
    <View style={styles.wrapper}>
      <TextInput
        placeholder="R$ 0,00"
        value={amount}
        onChangeText={value => setAmount(value)}
      />
      <Text>Entrada / Saída</Text>
      <Switch value={isIncome} onValueChange={value => setIsIncome(value)} />
      <Text>Descrição:</Text>
      <TextInput
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <Text>Data:</Text>
      <TextInput value={date} onChangeText={value => setDate(value)} />
      <Text>Observações (opcional):</Text>
      <TextInput value={notes} onChangeText={value => setNotes(value)} />
    </View>
  );
};

export default Transaction;
