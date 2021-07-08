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
  inputsArea: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  buttonArea: {
    width: '100%',
    marginTop: 30,
  },
});

export default styles;
