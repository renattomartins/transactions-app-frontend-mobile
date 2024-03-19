import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FakeCurrencyInput} from 'react-native-currency-input';
import DatePicker from 'react-native-date-picker';

import {ApplicationContext} from '../../store';

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

const TransactionCreate = ({navigation, route, handleUpdateTransaction}) => {
  // Recupero contexto da aplicação
  const {env, userToken, setTransactions, transactions} =
    useContext(ApplicationContext);

  // Recebo inputs vindos da tela anterior (não tipados e não explícitos)
  const transaction = route.params.transaction;

  // Controle de estado dessa tela em específico (valor dos campos)
  const [amount, setAmount] = useState(transaction.amount);
  const [isIncome, setIsIncome] = useState(transaction.isIncome);
  const [description, setDescription] = useState(transaction.description);
  const [date, setDate] = useState(new Date(transaction.date));
  const [notes, setNotes] = useState(transaction.notes);

  // Controle de estado dessa tela em específico (mensagens de erro)
  const [isToShowGenericErrorMsg, setIsToShowGenericErrorMsg] = useState(false); // form
  const [genericErrorMsg, setGenericErrorMsg] = useState(''); // form

  const [
    isToShowDescriptionValidationMsg,
    setIsToShowDescriptionValidationMsg,
  ] = useState(false); // campo em específico: description
  const [descriptionValidationMsg, setDescriptionValidationMsg] = useState(''); // campo em específico: description

  const [isToShowNotesValidationMsg, setIsToShowNotesValidationMsg] =
    useState(false); // campo em específico: notes
  const [notesValidationMsg, setNotesValidationMsg] = useState(''); // campo em específico: notes

  // Controle de estado dessa tela em específico (campo específico: campo date)
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  // Controle de estado dessa tela em específico (botão do form)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // comportamento do form (ou da tela?)
  const onSubmit = async () => {
    setIsSubmitting(true); // form

    try {
      const createdTransaction = await handleUpdateTransaction(
        env,
        userToken,
        transaction.id,
        transaction.accountId,
        description,
        amount,
        date,
        notes,
        isIncome,
      ); // entidade

      // contexto da da aplicação
      const incrementedTransactions = [createdTransaction, ...transactions];
      incrementedTransactions.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      await setTransactions(incrementedTransactions);

      // tela/navegação
      navigation.navigate('TransactionList');
    } catch (e) {
      let errorMessageToDiplay;
      cleanUpValidations(); // form/campos
      setIsToShowGenericErrorMsg(true); //form

      // entidade/campos-atributos/form
      switch (e.response.data.code) {
        case 400:
          errorMessageToDiplay = errorMessages.createTransaction.e400.message; //form
          break;
        case 401:
          errorMessageToDiplay = errorMessages.createTransaction.e401.message; //form
          break;
        case 403:
          errorMessageToDiplay = errorMessages.createTransaction.e403.message; //form
          break;
        case 404:
          errorMessageToDiplay = errorMessages.createTransaction.e404.message; //form
          break;
        case 422:
          errorMessageToDiplay = errorMessages.createTransaction.e422.message; //campos específicos
          processValidationMessages(
            e.response.data.details,
            errorMessages.createTransaction.e422.details,
          );
          break;
        case 500:
          errorMessageToDiplay = errorMessages.createTransaction.e500.message; //form
          break;
        default:
          errorMessageToDiplay = errorMessages.createTransaction.e500.message; //form/tela
      }
      setGenericErrorMsg(errorMessageToDiplay); //form
    } finally {
      setIsSubmitting(false); //form
    }
  };

  // campos específicos
  const processValidationMessages = (
    responseErrorDetails,
    messagesErrorDetails,
  ) => {
    for (let errorDetail of responseErrorDetails) {
      let fieldName = errorDetail.path;
      let messageKey = convertStringToCamelCase(errorDetail.msg);

      // campo 1
      if (fieldName === 'description') {
        setIsToShowDescriptionValidationMsg(true);
        setDescriptionValidationMsg(
          messagesErrorDetails[fieldName][messageKey],
        );
      }

      // campo 2
      if (fieldName === 'notes') {
        setIsToShowNotesValidationMsg(true);
        setNotesValidationMsg(messagesErrorDetails[fieldName][messageKey]);
      }
    }
  };

  // form/campos
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
        <Field label="Descrição">
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
        <Field label="Data">
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
        <Field label="Observações (opcional)">
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
