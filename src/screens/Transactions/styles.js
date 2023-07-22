import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.blueFive,
  },
  headerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutText: {
    width: '77%',
    height: 75,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    padding: 20,
  },
  logoutButton: {
    width: '23%',
    paddingRight: 15,
  },
  mainArea: {
    flex: 9,
    backgroundColor: 'white',
  },
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
