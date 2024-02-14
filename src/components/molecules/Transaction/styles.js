import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({
  transactionArea: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  transactionIconWrapper: {
    flex: 3,
  },
  transactionIcon: {
    height: 38,
    width: 34,
  },
  transactionTextWrapper: {
    minHeight: 50,
    flex: 12,
  },
  transactionDescription: {
    fontWeight: 'bold',
    width: 200,
  },
  transactionDate: {
    color: '#666',
  },
  transactionAmountWrapper: {
    flex: 6,
  },
  transactionAmount: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: Colors.negative,
  },
  positive: {
    color: Colors.positive,
  },
  enterIconWrapper: {
    flex: 1,
    marginLeft: 5,
    marginTop: 2,
  },
  enterIcon: {
    alignItems: 'center',
    width: 16,
    height: 16,
  },
});

export default styles;
