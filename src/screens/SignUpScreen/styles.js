import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.blueFive,
  },
  logoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
