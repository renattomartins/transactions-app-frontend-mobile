import React, {useContext, useState, useRef} from 'react';
import {View, Text, TextInput, Switch, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FakeCurrencyInput} from 'react-native-currency-input';
import DatePicker from 'react-native-date-picker';

import {ApplicationContext} from '../../store';

import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';

import styles from './styles.js';
import {Colors} from '../../styles';

const TransactionCreate = ({navigation}) => {
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(true);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  const [open, setOpen] = useState(false);

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View style={styles.inputsArea}>
        <View style={[styles.textInputWrapper, styles.amountWrapper]}>
          <FakeCurrencyInput
            returnKeyType={'next'}
            value={amount}
            onChangeValue={setAmount}
            placeholder="R$ 0,00"
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            minValue={0}
            maxValue={9999999.99}
            signPosition="beforePrefix"
            style={styles.amountInput}
            containerStyle={styles.containerAmountInput}
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
          <View style={styles.dateInputAggregate}>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
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
        <Button
          title="Salvar"
          onPress={() => {}}
          inverse={true}
          width="100%"
          style={styles.saveButton}
        />
        <Button
          title="Cancelar"
          onPress={() => navigation.navigate('TransactionList')}
          inverse={false}
          width="100%"
          style={styles.cancelButton}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TransactionCreate;
