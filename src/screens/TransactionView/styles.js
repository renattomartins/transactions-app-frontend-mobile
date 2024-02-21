import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  attributeWrapper: {},
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  loaderIcon: {
    marginBottom: 10,
  },
  loaderText: {
    textAlign: 'center',
    color: '#aaa',
    fontStyle: 'italic',
  },
  mainContent: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionIconWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  transactionIcon: {
    height: 48,
    width: 44,
  },
  transactionAmountWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  transactionAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.negative,
  },
  positive: {
    color: Colors.positive,
  },
  isIncomeWrapper: {
    marginTop: 3,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  isIncomeWrapperIn: {
    backgroundColor: Colors.position90tint,
  },
  isIncomeWrapperOut: {
    backgroundColor: Colors.negative90tint,
  },
  transactionIn: {
    color: Colors.positive,
  },
  transactionOut: {
    color: Colors.negative,
  },
});

export default styles;
