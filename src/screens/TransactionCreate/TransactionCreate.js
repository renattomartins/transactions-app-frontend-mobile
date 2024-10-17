import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FakeCurrencyInput} from 'react-native-currency-input';
import DatePicker from 'react-native-date-picker';

import {ApplicationContext} from '../../contexts/index.js';

import If from '../../utils/if';

import FormErrorMessage from '../../components/atoms/FormErrorMessage';
import Field from '../../components/molecules/Field';
import FieldErrorMessage from '../../components/atoms/FieldErrorMessage';
import Button from '../../components/atoms/Button';

import {friendlyErrorMessages as errorMessages} from '../../utils/constants';
import convertStringToCamelCase from '../../utils/convertStringToCamelCase';
import {dateFormat} from '../../utils/formatter';

import styles from './styles.js';
import {Colors} from '../../styles';

const TransactionCreate = ({navigation, handleCreateTransaction}) => {
  const {env, baseUrl, userToken, accounts, transactions, setTransactions} =
    useContext(ApplicationContext);

  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  const [isToShowGenericErrorMsg, setIsToShowGenericErrorMsg] = useState(false);
  const [genericErrorMsg, setGenericErrorMsg] = useState('');
  const [
    isToShowDescriptionValidationMsg,
    setIsToShowDescriptionValidationMsg,
  ] = useState(false);
  const [descriptionValidationMsg, setDescriptionValidationMsg] = useState('');
  const [isToShowNotesValidationMsg, setIsToShowNotesValidationMsg] =
    useState(false);
  const [notesValidationMsg, setNotesValidationMsg] = useState('');

  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);

    try {
      const createdTransaction = await handleCreateTransaction(
        env,
        baseUrl,
        userToken,
        accounts[0].id,
        description,
        amount,
        date,
        notes,
        isIncome,
      );

      const incrementedTransactions = [createdTransaction, ...transactions];
      incrementedTransactions.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );

      await setTransactions(incrementedTransactions);
      navigation.navigate('TransactionList');
    } catch (e) {
      let errorMessageToDiplay;
      cleanUpValidations();
      setIsToShowGenericErrorMsg(true);

      switch (e.response.data.code) {
        case 400:
          errorMessageToDiplay = errorMessages.createTransaction.e400.message;
          break;
        case 401:
          errorMessageToDiplay = errorMessages.createTransaction.e401.message;
          break;
        case 403:
          errorMessageToDiplay = errorMessages.createTransaction.e403.message;
          break;
        case 404:
          errorMessageToDiplay = errorMessages.createTransaction.e404.message;
          break;
        case 422:
          errorMessageToDiplay = errorMessages.createTransaction.e422.message;
          processValidationMessages(
            e.response.data.details,
            errorMessages.createTransaction.e422.details,
          );
          break;
        case 500:
          errorMessageToDiplay = errorMessages.createTransaction.e500.message;
          break;
        default:
          errorMessageToDiplay = errorMessages.createTransaction.e500.message;
      }
      setGenericErrorMsg(errorMessageToDiplay);
    } finally {
      setIsSubmitting(false);
    }
  };

  const processValidationMessages = (
    responseErrorDetails,
    messagesErrorDetails,
  ) => {
    for (let errorDetail of responseErrorDetails) {
      let fieldName = errorDetail.path;
      let messageKey = convertStringToCamelCase(errorDetail.msg);

      if (fieldName === 'description') {
        setIsToShowDescriptionValidationMsg(true);
        setDescriptionValidationMsg(
          messagesErrorDetails[fieldName][messageKey],
        );
      }
      if (fieldName === 'notes') {
        setIsToShowNotesValidationMsg(true);
        setNotesValidationMsg(messagesErrorDetails[fieldName][messageKey]);
      }
    }
  };

  const cleanUpValidations = () => {
    setIsToShowDescriptionValidationMsg(false);
    setIsToShowNotesValidationMsg(false);
  };

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View style={styles.inputsArea}>
        <FormErrorMessage
          isVisible={isToShowGenericErrorMsg}
          message={genericErrorMsg}
          style={styles.errorMessage}
        />
        <Field style={styles.amountWrapper}>
          <FakeCurrencyInput
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
        </Field>
        <Field style={styles.isIncomeWrapper}>
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
        </Field>
        <Field>
          <Text>Descrição</Text>
          <TextInput
            maxLength={255}
            placeholder="digite a descrição"
            value={description}
            onChangeText={value => setDescription(value)}
            style={[styles.textInput, styles.descriptiontInput]}
          />
          <FieldErrorMessage
            isVisible={isToShowDescriptionValidationMsg}
            message={descriptionValidationMsg}
          />
        </Field>
        <Field>
          <Text>Data</Text>
          <View style={styles.dateInputAggregate}>
            <Button
              title={dateFormat(date.toUTCString())}
              onPress={() => setIsDateModalOpen(true)}
              style={styles.dateInput}
              textStyle={[
                styles.dateInputText,
                isDateModalOpen ? styles.dateInputTextSelected : '',
              ]}
            />
            <DatePicker
              modal
              open={isDateModalOpen}
              date={date}
              locale="pt-BR"
              is24hourSource="locale"
              title="Selecione a data"
              confirmText="Confirmar"
              cancelText="Cancelar"
              androidVariant="iosClone"
              onConfirm={value => {
                setIsDateModalOpen(false);
                setDate(value);
              }}
              onCancel={() => {
                setIsDateModalOpen(false);
              }}
            />
          </View>
        </Field>
        <Field>
          <Text>Observações (opcional)</Text>
          <TextInput
            multiline={true}
            value={notes}
            onChangeText={value => setNotes(value)}
            style={[styles.textInput, styles.notesInput]}
          />
          <FieldErrorMessage
            isVisible={isToShowNotesValidationMsg}
            message={notesValidationMsg}
          />
        </Field>
      </View>
      <View style={styles.buttonsArea}>
        <Button
          title="Salvar"
          onPress={onSubmit}
          inverse={true}
          width="100%"
          wrapStyle={styles.wrapSaveButton}
          style={styles.saveButton}
          loading={isSubmitting}
        />
        <Button
          title="Cancelar"
          onPress={() => navigation.navigate('TransactionList')}
          inverse={false}
          width="100%"
          style={styles.cancelButton}
        />
      </View>
      <If test={isSubmitting}>
        <View style={styles.overlay} />
      </If>
    </KeyboardAwareScrollView>
  );
};

export default TransactionCreate;
