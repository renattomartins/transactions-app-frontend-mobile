import React from 'react';
import propTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const currencyFormat = num => {
  return (
    'R$ ' +
    num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  );
};

const Transaction = ({id, description, isIncome, date, amount, ...props}) => {
  return (
    <View style={styles.transactionArea}>
      <View style={styles.transactionIconWrapper}>
        <Image
          style={[styles.transactionIcon]}
          source={
            isIncome
              ? require('../../../assets/images/money-in.png')
              : require('../../../assets/images/money-out.png')
          }
        />
      </View>
      <View style={styles.transactionTextWrapper}>
        <Text style={styles.transactionDescription}>{description}</Text>
        <Text style={styles.transactionDate}>{date}</Text>
      </View>
      <View style={styles.transactionAmountWrapper}>
        <Text
          style={[
            styles.transactionAmount,
            isIncome ? styles.positive : styles.negative,
          ]}>
          {currencyFormat(amount)}
        </Text>
      </View>
    </View>
  );
};

Transaction.propTypes = {
  id: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  isIncome: propTypes.bool.isRequired,
  date: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
};

export default Transaction;
