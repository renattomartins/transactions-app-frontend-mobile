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
    paddingVertical: 10,
    flexDirection: 'row',
  },
  transactionIconWrapper: {
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#666',
  },
  transactionMinus: {
    color: '#E06755',
  },
  transactionPlus: {
    color: '#A0DD63',
  },
  transactionTextWrapper: {
    height: 60,
    paddingHorizontal: 10,
  },
  transactionDescription: {},
  transactionDate: {},
  transactionAmount: {},
  text: {
    color: '#fff',
    padding: 20,
  },
});

export default styles;
