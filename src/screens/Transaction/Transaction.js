import React, {useContext, useState, useRef} from 'react';
import {View, ScrollView, Text, TextInput, Switch} from 'react-native';

import {ApplicationContext} from '../../store';

import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';

import styles from './styles.js';
import {Colors} from '../../styles';

const Transaction = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [isIncome, setIsIncome] = useState(true);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  return (
    <ScrollView style={styles.main}>
      <View style={styles.inputsArea}>
        <View style={[styles.textInputWrapper, styles.amountWrapper]}>
          <TextInput
            placeholder="R$ 0,00"
            returnKeyType={'next'}
            value={amount}
            onChangeText={value => setAmount(value)}
            style={styles.amountInput}
          />
        </View>
        <View style={[styles.textInputWrapper, styles.isIncomeWrapper]}>
          <View style={styles.isIncomeLabel}>
            <Text
              style={[
                styles.isIncomeLabelFragments,
                isIncome ? styles.in : '',
              ]}>
              Entrada
            </Text>
            <Text style={styles.isIncomeLabelFragments}> / </Text>
            <Text
              style={[
                styles.isIncomeLabelFragments,
                !isIncome ? styles.out : '',
              ]}>
              Saída
            </Text>
          </View>
          <Switch
            thumbColor={Colors.white}
            trackColor={{false: Colors.positive, true: Colors.negative}}
            ios_backgroundColor={Colors.positive}
            value={!isIncome}
            onValueChange={value => setIsIncome(!value)}
            style={styles.isIncometInput}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Descrição</Text>
          <TextInput
            maxLength={255}
            returnKeyType={'next'}
            placeholder="digite a descrição"
            value={description}
            onChangeText={value => setDescription(value)}
            style={[styles.textInput, styles.descriptiontInput]}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Data</Text>
          <TextInput
            returnKeyType={'next'}
            placeholder="digite a data"
            value={date}
            onChangeText={value => setDate(value)}
            style={[styles.textInput, styles.dateInput]}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Observações (opcional)</Text>
          <TextInput
            returnKeyType={'done'}
            multiline={true}
            value={notes}
            onChangeText={value => setNotes(value)}
            style={[styles.textInput, styles.notesInput]}
          />
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <Button title="Salvar" onPress={() => {}} inverse={true} width="100%" />
        <Button
          title="Cancelar"
          onPress={() => {}}
          inverse={false}
          width="100%"
        />
      </View>
    </ScrollView>
  );
};

export default Transaction;
