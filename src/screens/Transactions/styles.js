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
  messagesWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  loaderIcon: {
    marginBottom: 10,
  },
  loaderText: {
    textAlign: 'center',
    color: '#aaa',
    fontStyle: 'italic',
  },
  noTrasactions: {
    textAlign: 'center',
    color: '#aaa',
    fontWeight: 'bold',
    width: 200,
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
});

export default styles;
