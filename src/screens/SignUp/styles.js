import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.blueFive,
  },
  headerArea: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  genericErrorArea: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderLeftColor: 'red',
    borderLeftWidth: 5,
    borderStyle: 'solid',
    marginHorizontal: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  genericErrorText: {
    color: '#555',
  },
  inputsArea: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  buttonArea: {
    width: '100%',
    marginTop: 30,
  },
  textInputWrapper: {
    width: '100%',
    marginBottom: 10,
  },
  textInputOnboarding: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 20,
    width: '100%',
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
