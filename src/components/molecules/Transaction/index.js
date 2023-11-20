import React from 'react';
import propTypes from 'prop-types';
import {Pressable, View, Text, Image} from 'react-native';
import {dateFormat, currencyFormat} from '../../../utils/formatter';

import styles from './styles';

const Transaction = ({
  id,
  description,
  isIncome,
  date,
  amount,
  onPress,
  ...props
}) => {
  return (
    <Pressable style={styles.transactionArea} onPress={onPress}>
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
        <Text style={styles.transactionDate}>{dateFormat(date)}</Text>
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
      <View style={styles.enterIconWrapper}>
        <Image
          style={[styles.enterIcon]}
          source={require('../../../assets/images/arrow-right.png')}
          width={16}
          height={16}
        />
      </View>
    </Pressable>
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
