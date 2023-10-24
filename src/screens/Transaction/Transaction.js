import React, {useContext, useState, useRef} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FakeCurrencyInput} from 'react-native-currency-input';
import DateTimePicker from '@react-native-community/datetimepicker';

import {ApplicationContext} from '../../store';

import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';

import styles from './styles.js';
import {Colors} from '../../styles';

const Transaction = ({navigation}) => {
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(true);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date);
  const [notes, setNotes] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime;
    setDate(currentTime);
  };

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
            <DateTimePicker
              value={date}
              mode="date"
              timeZoneName="America/Sao_Paulo"
              locale="pt-BR"
              is24Hour={true}
              onChange={onChangeDate}
              style={styles.dateInput}
              // style={[styles.textInput, styles.dateInput]}
            />
            <DateTimePicker
              value={time}
              mode="time"
              timeZoneName="America/Sao_Paulo"
              locale="pt-BR"
              is24Hour={true}
              onChange={onChangeTime}
              style={styles.timeInput}
            />
          </View>
          {/* onChange={onChange}
                textColor={textColor || undefined}
                accentColor={accentColor || undefined}
                neutralButton={{label: neutralButtonLabel}}
                negativeButton={{label: 'Cancel', textColor: 'red'}} */}
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
          onPress={() => navigation.navigate('Transactions')}
          inverse={false}
          width="100%"
          style={styles.cancelButton}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Transaction;
