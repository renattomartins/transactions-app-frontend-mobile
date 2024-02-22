import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';

import Button from '../../components/atoms/Button';
import If from '../../utils/if';
import {currencyFormat, dateFormat} from '../../utils/formatter.js';

import styles from './styles.js';

const TransactionView = ({navigation, route, handleGetTransaction}) => {
  const {env, userToken, accounts} = useContext(ApplicationContext);

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
      } finally {
        setIsLoading(false);
      }
    };
    loadTransaction();
  }, [accounts, transactionId, handleGetTransaction, env, userToken]);

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
      <If test={!isLoading}>
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
