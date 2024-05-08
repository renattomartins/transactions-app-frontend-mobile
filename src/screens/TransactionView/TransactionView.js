import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';

import Button from '../../components/atoms/Button';
import ActionList from '../../components/molecules/ActionList/index.js';
import If from '../../utils/if';
import {currencyFormat, dateFormat} from '../../utils/formatter.js';
import {friendlyErrorMessages as errorMessages} from '../../utils/constants';

import styles from './styles.js';

const TransactionView = ({navigation, route, handleGetTransaction}) => {
  const {env, userToken, accounts, transactions} =
    useContext(ApplicationContext);

  const [transactionId] = useState(route.params.itemId);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0.0);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isIncome, setIsIncome] = useState(false);
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [thereIsAnError, setThereIsAnError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadTransaction = async () => {
      let accountId, transaction;

      try {
        if (accounts.length > 0) {
          accountId = accounts[0].id;
        }

        transaction = await handleGetTransaction(
          env,
          userToken,
          accountId,
          transactionId,
        );

        setDescription(transaction.description);
        setAmount(transaction.amount);
        setDate(transaction.date);
        setNotes(transaction.notes);
        setIsIncome(transaction.isIncome);
        setCreatedAt(transaction.createdAt);
        setUpdatedAt(transaction.updatedAt);
      } catch (e) {
        let errorMessageToDiplay;
        setThereIsAnError(true);

        switch (e.response.data.code) {
          case 400:
            errorMessageToDiplay = errorMessages.viewTransaction.e400.message;
            break;
          case 401:
            errorMessageToDiplay = errorMessages.viewTransaction.e401.message;
            break;
          case 403:
            errorMessageToDiplay = errorMessages.viewTransaction.e403.message;
            break;
          case 404:
            errorMessageToDiplay = errorMessages.viewTransaction.e404.message;
            break;
          case 500:
            errorMessageToDiplay = errorMessages.viewTransaction.e500.message;
            break;
          default:
            errorMessageToDiplay =
              errorMessages.viewTransaction.unknown.message;
        }
        setErrorMessage(errorMessageToDiplay);
      } finally {
        setIsLoading(false);
      }
    };
    loadTransaction();
  }, [
    accounts,
    transactionId,
    handleGetTransaction,
    env,
    userToken,
    transactions,
  ]);

  const openDeleteConfirmationDialog = () =>
    Alert.alert(
      'Excluir transação',
      'Você tem certeza que deseja excluir essa transação?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelar'),
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => console.log('Excluir'),
          style: 'destructive',
        },
      ],
    );

  return (
    <>
      <If test={isLoading}>
        <View style={styles.loaderWrapper}>
          <ActivityIndicator
            size="small"
            color="#aaa"
            style={styles.loaderIcon}
          />
          <Text style={styles.loaderText}>Carregando transação...</Text>
        </View>
      </If>
      <If test={!isLoading && thereIsAnError}>
        <View style={[styles.block, styles.messagesWrapper]}>
          <Image
            style={[styles.errorIcon]}
            source={require('../../assets/images/error-icon.png')}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
        <View style={[styles.block, styles.block3]}>
          <Button
            title="Voltar para lista de transações"
            onPress={() => navigation.navigate('TransactionList')}
            inverse={true}
            width="100%"
            style={styles.okButton}
          />
        </View>
      </If>
      <If test={!isLoading && !thereIsAnError}>
        <KeyboardAwareScrollView style={styles.main}>
          <View style={[styles.block, styles.block1]}>
            <View style={styles.transactionIconWrapper}>
              <Image
                style={[styles.transactionIcon]}
                source={
                  isIncome
                    ? require('../../assets/images/money-in.png')
                    : require('../../assets/images/money-out.png')
                }
              />
            </View>
            <View style={styles.transactionDescriptionWrapper}>
              <Text style={styles.trasactionDescriptionValue}>
                {description}
              </Text>
            </View>
            <View style={styles.transactionAmountWrapper}>
              <Text
                style={[
                  styles.transactionAmount,
                  isIncome ? styles.positive : null,
                ]}>
                {currencyFormat(amount)}
              </Text>
              <View
                style={[
                  styles.isIncomeWrapper,
                  isIncome
                    ? styles.isIncomeWrapperIn
                    : styles.isIncomeWrapperOut,
                ]}>
                <Text
                  style={
                    isIncome ? styles.transactionIn : styles.transactionOut
                  }>
                  {isIncome ? 'Entrada' : 'Saída'}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.block, styles.block2]}>
            <View style={styles.attributeWrapper}>
              <Text style={styles.attributeLabel}>Descrição</Text>
              <Text style={styles.attributeValue}>{description}</Text>
            </View>
            <View style={styles.attributeWrapper}>
              <Text style={styles.attributeLabel}>Data e hora</Text>
              <Text style={styles.attributeValue}>{dateFormat(date)}</Text>
            </View>
            <View style={styles.attributeWrapper}>
              <Text style={styles.attributeLabel}>Observações</Text>
              <Text style={styles.attributeValue}>
                {notes ? notes : 'Sem nenhuma nota para essa transação'}
              </Text>
            </View>
            <View style={styles.attributeWrapper}>
              <Text style={styles.attributeLabel}>Criada em</Text>
              <Text style={styles.attributeValue}>{dateFormat(createdAt)}</Text>
            </View>
            <View style={styles.attributeWrapper}>
              <Text style={styles.attributeLabel}>Última modificação em</Text>
              <Text style={styles.attributeValue}>{dateFormat(updatedAt)}</Text>
            </View>
          </View>
          <View style={[styles.block, styles.block3]}>
            <ActionList
              actionList={[
                {
                  onPress: () =>
                    navigation.navigate('TransactionEdit', {
                      transaction: {
                        id: transactionId,
                        description,
                        amount,
                        date,
                        notes,
                        isIncome,
                        accountId: accounts[0].id,
                      },
                    }),
                  icon: 'pencil',
                  text: 'Editar',
                },
                {
                  onPress: openDeleteConfirmationDialog,
                  icon: 'trash',
                  text: 'Excluir',
                },
              ]}
            />
          </View>
          <View style={[styles.block, styles.block4]}>
            <Button
              title="Voltar para lista de transações"
              onPress={() => navigation.navigate('TransactionList')}
              inverse={true}
              width="100%"
              style={styles.okButton}
            />
          </View>
        </KeyboardAwareScrollView>
      </If>
    </>
  );
};

export default TransactionView;
