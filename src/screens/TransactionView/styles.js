import {StyleSheet} from 'react-native';

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
    height: 58,
    width: 54,
  },
});

export default styles;
