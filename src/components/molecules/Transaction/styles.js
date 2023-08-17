import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  transactionArea: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  transactionIconWrapper: {
    flex: 1,
  },
  transactionIcon: {
    height: 38,
    width: 34,
  },
  transactionTextWrapper: {
    minHeight: 50,
    flex: 4,
  },
  transactionDescription: {
    fontWeight: 'bold',
    width: 200,
  },
  transactionDate: {
    color: '#666',
  },
  transactionAmountWrapper: {
    flex: 2,
  },
  transactionAmount: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#DD4E4D',
  },
  positive: {
    color: '#43B700',
  },
});

export default styles;