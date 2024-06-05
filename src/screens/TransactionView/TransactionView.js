import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';

import {ApplicationContext} from '../../store';

import Button from '../../components/atoms/Button';
import ActionList from '../../components/molecules/ActionList/index.js';
import If from '../../utils/if';
import {currencyFormat, dateFormat} from '../../utils/formatter.js';
import {friendlyErrorMessages as errorMessages} from '../../utils/constants';

import styles from './styles.js';
import {showMessage} from 'react-native-flash-message';

const TransactionView = ({
  navigation,
  route,
  handleGetTransaction,
  handleDeleteTransaction,
}) => {
  const {env, userToken, accounts, setTransactions, transactions} =
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
  const [isDeleting, setIsDeleting] = useState(false);

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

  const navigateToEditScreen = () =>
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
    });

  const deleteTransaction = async () => {
    setIsDeleting(true);

    try {
      await handleDeleteTransaction(
        env,
        userToken,
        accounts[0].id,
        transactionId,
      );

      const transactionsWithoutDeletedTransaction = transactions.filter(
        transaction => transaction.id !== transactionId,
      );

      await setTransactions(transactionsWithoutDeletedTransaction);

      setTimeout(() => {
        showMessage({
          message: 'Transação excluída com sucesso!',
          type: 'success',
          floating: true,
          position: 'bottom',
          duration: 3000,
        });
      }, 500);

      navigation.navigate('TransactionList');
    } catch (e) {
      let errorMessageToDiplay;

      switch (e.response.data.code) {
        case 400:
          errorMessageToDiplay = errorMessages.deleteTransaction.e400.message;
          break;
        case 401:
          errorMessageToDiplay = errorMessages.deleteTransaction.e401.message;
          break;
        case 403:
          errorMessageToDiplay = errorMessages.deleteTransaction.e403.message;
          break;
        case 404:
          errorMessageToDiplay = errorMessages.deleteTransaction.e404.message;
          break;
        case 500:
          errorMessageToDiplay = errorMessages.deleteTransaction.e500.message;
          break;
        default:
          errorMessageToDiplay = errorMessages.deleteTransaction.e500.message;
      }

      setTimeout(() => {
        showMessage({
          message: errorMessageToDiplay,
          type: 'danger',
          floating: true,
          icon: 'warning',
          duration: 3000,
        });
      }, 500);
    } finally {
      setIsDeleting(false);
    }
  };

  const openDeleteConfirmationDialog = () =>
    Alert.alert(
      'Excluir transação',
      'Você tem certeza que deseja excluir essa transação?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: deleteTransaction,
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
                  onPress: navigateToEditScreen,
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
      <Spinner
        visible={isDeleting}
        textContent={'Só mais um instante...'}
        overlayColor={'rgba(0, 0, 0, 0.65)'}
        animation={'fade'}
        textStyle={styles.spinnerTextStyle}
      />
    </>
  );
};

export default TransactionView;
