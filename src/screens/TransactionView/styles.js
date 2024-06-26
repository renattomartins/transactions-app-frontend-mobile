import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
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
  block: {
    backgroundColor: '#fff',
    margin: 10,
    marginBottom: 0,
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
  messagesWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorIcon: {
    height: 88,
    width: 88,
  },
  errorMessage: {
    marginTop: 20,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    width: 200,
  },
  transactionIconWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  transactionIcon: {
    height: 48,
    width: 44,
  },
  trasactionDescriptionWrapper: {
    alignItems: 'center',
  },
  trasactionDescriptionValue: {
    textAlign: 'center',
    color: '#222',
    fontSize: 15,
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
    marginBottom: 17,
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
  attributeWrapper: {
    padding: 5,
    paddingBottom: 10,
  },
  attributeLabel: {
    color: '#888',
    fontWeight: 'bold',
  },
  attributeValue: {
    color: '#888',
  },
  block4: {
    backgroundColor: null,
    marginTop: 20,
    marginBottom: 20,
    padding: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    elevation: null,
  },
  okButton: {
    borderRadius: 0,
    borderWidth: 0,
  },
  spinnerTextStyle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default styles;
